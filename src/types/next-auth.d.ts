import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    token: string
    user: {
      name: string
      email: string
      image: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    message: string
    statusCode: number
    result: {
      access_token: string
      user: {
        name: string
        email: string
        image: string
      },
    },
    iat: number
    exp: number
    jti: string
  }
}