"use client"

import { SessionProvider } from "next-auth/react"

// função que garante que os componentes envolvidos tenham acesso às informações de sessão fornecidas pelo 'SessionProvider'
export const AuthProvider = ({ children}) => {
    return <SessionProvider>{children}</SessionProvider>
}