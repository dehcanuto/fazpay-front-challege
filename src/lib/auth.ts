import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {
          username: { label: "username", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          const authorize: Promise<User> = await fetch(`${process.env.APP_API_URL}/login`, {
              method: "POST",
              headers: {
                cookie: req?.headers?.cookie || "",
                ContentType: "application/x-www-form-urlencoded"
              },
              body: new URLSearchParams(credentials)
          })
          .then(resposta => resposta.json())
          .then(json => {
            if (json?.statusCode === 401) throw new Error('Unauthorized!');
            return json
          })
          .catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message);
              return null
          })

          return authorize
        },
      }),
    ],
  
    callbacks: {
      async jwt({ token, user }) {
        return { ...token, ...user };
      },
      async session({ session, token, user }) {
        // Envia as propriedades para a session.
        session.token = token.access_token
        session.user.name = token.user.name
        session.user.email = token.user.email
        session.user.image = token.user.image
        return session
      },
      async redirect({ url, baseUrl }) {
        return Promise.resolve(url)
      },
    },
    session: {
      strategy: "jwt",
    },
    pages: {
      signIn: "/"
    },
    debug: true,
};
