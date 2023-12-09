/* eslint-disable camelcase */
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import { supabase } from '@/lib/utils'
import crypto from 'crypto'

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
        redirect: false
      },
      async authorize (credentials, req) {
        const { username, password } = credentials

        const { data: user, error } = await supabase
          .from('people')
          .select('*')
          .eq('username', username)

        if (error) return new Response(error.message, { status: 500 })
        if (!user) return new Response(error.message, { status: 400 })

        const { passwd_hash, salt, ...account } = user[0]
        const hashedPassword = crypto
          .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
          .toString('hex')

        if (passwd_hash !== hashedPassword) return new Response(error.message, { status: 400 })
        return { ...account }
      }
    })
  ],
  callbacks: {
    async signIn ({ profile: { id, name, email, login: username } }) {
      try {
        const [firstname, lastname] = name.split(' ')

        // Check if user exists
        const { data: users, error } = await supabase
          .from('people')
          .select('*')
          .or(`username.eq.${username}`, `email.eq.${email}`)

        // Error handling
        if (error) return new Response(error.message, { status: 500 })

        // Create user if not exists
        if (users.length === 0) {
          const { data: account, error } = await supabase
            .from('people')
            .insert([
              {
                email,
                username,
                firstname: firstname ?? '',
                lastname: lastname ?? ''
              }
            ])

          if (error) return new Response(error.message, { status: 500 })
          // Once user is created, return account
          return { ...account[0] }
        } else {
          // User already exists so return account
          const account = users.filter((user) => user.email === email)[0]
          return { ...account }
        }
      } catch (error) {
        return '/sign-in'
      }
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: 2 * 60 * 60 // 2 hours
  },
  pages: {
    signIn: '/sign-in',
    signOut: '/',
    newUser: '/home'
  }
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
