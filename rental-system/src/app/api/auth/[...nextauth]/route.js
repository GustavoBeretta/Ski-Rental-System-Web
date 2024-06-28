import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import connectMongoDB from "../../../../../libs/mongodb"
import bcrypt from 'bcryptjs'

async function findUser(email) {
    const response = await fetch("http://localhost:3000/api/users");
    const usuarios = await response.json();
    const user = await usuarios.users.find((usuario) => usuario.email === email);
    return user;
}

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password, isEmployeeLogin } = credentials

                try {
                    await connectMongoDB()
                    const user = await findUser(email)

                    if (!user) {
                        return null
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password)

                    if (!passwordsMatch) {
                        return null
                    }

                    const employee = Boolean(isEmployeeLogin)

                    if (employee) {
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
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }