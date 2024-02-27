import NextAuth from "next-auth"
import Providers from 'next-auth/providers'

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    Providers.Credentials({
        name: 'Credentials',
        credentials: {
            username: { label: "Username", type: "text" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const res = await fetch(process.env.APP_API_URL, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
          const user = await res.json()
          console.log('user', user)

          if (res.ok && user) {
            return user
          }

          return null
        }
      })
  ],
})