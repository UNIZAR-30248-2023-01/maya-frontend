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
        return {
          name: account.username,
          email: account.email
        }
      }
    })
  ],
  callbacks: {
    async jwt ({ token, account, profile }) {
      if (account?.provider && account?.provider === 'github') {
        const { name, email, login: username } = profile

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
          const { error } = await supabase
            .from('people')
            .insert([{ email, username, firstname: firstname ?? '', lastname: lastname ?? '' }])

          if (error) return new Response(error.message, { status: 500 })
        }
      }

      return token
    },
    async redirect ({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }

  },
  session: {
    strategy: 'jwt',
    maxAge: 2 * 60 * 60 // 2 hours
  },
  pages: {
    error: '/sign-in',
    signIn: '/sign-in',
    signOut: '/',
    newUser: '/home'
  }
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
