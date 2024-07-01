import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import connectMongoDB from "../../../../../libs/mongodb"
import bcrypt from 'bcryptjs'

// função para achar um usuário no banco de dados que corresponda com o email digitado
async function findUser(email) {
    const response = await fetch("https://rental-request-app.vercel.app/api/users");
    const usuarios = await response.json();
    const user = await usuarios.users.find((usuario) => usuario.email === email);
    return user;
}

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            // função de validação das credenciais digitadas
            async authorize(credentials) {
                const { email, password, isEmployeeLogin } = credentials

                try {
                    await connectMongoDB()
                    const user = await findUser(email)

                    // se nào for encontrado nenhum usuário com o email digitado, o retorno será 'null', o que resultará em um erro
                    if (!user) {
                        return null
                    }
                    
                    // verifica se a senha digitada bate com a registrada no BD
                    const passwordsMatch = await bcrypt.compare(password, user.password)
                    
                    if (!passwordsMatch) {
                        return null
                    }

                    // verifica se a tentativa de login é para funcionário e, caso positivo, verifica se o usuário realmente é um funcionário
                    if (isEmployeeLogin === 'true') {
                        if (user.role !== "employee") {
                            return null
                        }
                    }

                    return user
                } catch (error) {
                    console.log('Error: ', error)
                }
            },
        }),
    ],
    callbacks: {

        // atualiza o JWT para fornecer todas as informações do usuário, pois, por padrão, ele fornece apenas nome e email
        async jwt({ token, user }) {
			user && (token.user = user);
			return token;
		},
        // atualiza a sessão com as informações do JWT
		async session({ session, token }) {
			session.user = token.user;
			return session;
		},
    },
    session: {
        // define a estratégia de sessão com JWT
        strategy: "jwt",
    },
    // chave secreta para assinar os JWT
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        // rota da página de login
        signIn: "/",
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }