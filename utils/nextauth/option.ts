import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import CredentialProvider from 'next-auth/providers/credentials'
import   {AuthOptions, NextAuthOptions} from 'next-auth';
import {PrismaAdapter} from "@auth/prisma-adapter"
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()
// @ts-ignore
export const options: AuthOptions = {

  pages: {
    signIn: "/login",
  },

// @ts-ignore
  adapter: PrismaAdapter(prisma),

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',// 'database' akan masuk ke data base
    // maxAge: 30 * 24 * 60 * 60, // 30 days
    // updateAge: 24 * 60 * 60, // 24 hours
    // generateSessionToken: () => {
    // 	return new Date().toISOString()z
    // },
  },

  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'your email address',
        },
        password: {
          label: 'password',
          type: 'password',
          placeholder: 'your password',
        },
      },
      //@ts-ignore
      async authorize(
        credentials,
        req
      ) {
        try {
          if (!credentials || !credentials.email) {
            return null
          }

          const res = await fetch("http://localhost:3000/api/secure/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });
          if (res.status === 401) return null;
          const user = await res.json();
          // console.log(lomba)

          if (user) {
            // Any object returned will be saved in `lomba` property of the JWT
            return user;
          } else {
            // If you return null then an error will be displayed advising the lomba to check their details.
            return null;
          }


        } catch (error) {

          return null
        }
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile) {
        const email: string = profile.email
        if (email.includes('liar')) {
          profile.role = 'admin'
        } else {
          profile.role = 'user'
        }
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          role: profile.role,
          image: profile.avatar_url,
        }
      },
    }),

    GoogleProvider({
      profile(profile) {

        // console.log('profile Google', profile)

        // let userRole = 'User Google'
        const email: string = profile.email
        if (email.includes('liar')) {
          profile.role = 'admin'
        } else {
          profile.role = 'user'
        }
        return {
          id: profile.sub,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          role: profile.role,
          image: profile.picture,
        }
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn({account, profile}) {
      console.log('callbacks signIn')
      if (account !== null) {
        if (account.provider === 'credentials') {
          return true
        }
      }
      if (profile !== undefined && account !== null) {
        if (account.provider === "google" && profile.email !== undefined) {

          return profile.email_verified && profile.email.endsWith("@gmail.com")
        }
      }
      console.log('callbacks signIn false')
      return false
    },
//will call again because in the callbacks/event loop
    async jwt({
                token,
                user,
                account
              }) {
      // console.log('----------')
      // console.log(token, 'token')
      // console.log(user, 'user')
      // console.log(account, 'account')
      // console.log('----------')

      if (user) {
        token.id = user.id
      }
      if (account) {
        token.accessToken = account.access_token
      }
      return {
        ...token,
        ...user,
      }
    },

    async session({
                    session,
                    token
                  }) {

      session.user = token as any;
      return session;

    },
  },

} satisfies NextAuthOptions;
