export { default } from "next-auth/middleware"

//rotas que serão tratadas pelo middleware, ou seja, serão privadas para usuários logados
export const config = { matcher: ["/home", "/edit-account", "/rental-requests", "/homeEmployee", "/rental-requests-employee", "/usersRegistered", "/edit-account-employee", "/cadastro"] }