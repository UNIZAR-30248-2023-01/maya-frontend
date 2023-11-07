/* eslint-disable camelcase */
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import DiscordProvider from 'next-auth/providers/discord'
import GitHubProvider from 'next-auth/providers/github'
import { supabase } from '@/lib/utils'
import crypto from 'crypto'

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req) {
        const { username, password } = credentials
        console.log(username, password)

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
