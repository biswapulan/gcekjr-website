import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// Simple in-memory rate limiter: max 10 attempts per email per 15 minutes
const loginAttempts = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(email: string): boolean {
  const now = Date.now()
  const entry = loginAttempts.get(email)
  if (!entry || entry.resetAt < now) {
    loginAttempts.set(email, { count: 1, resetAt: now + 15 * 60 * 1000 })
    return true
  }
  if (entry.count >= 10) return false
  entry.count++
  return true
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials?.email ?? ''
        const password = credentials?.password ?? ''

        if (!email || !password) return null
        if (!checkRateLimit(email)) return null

        const adminEmail = process.env.ADMIN_EMAIL ?? ''
        const adminPassword = process.env.ADMIN_PASSWORD ?? ''

        if (!adminEmail || !adminPassword) {
          console.error('[Auth] ADMIN_EMAIL or ADMIN_PASSWORD env vars are not set!')
          return null
        }

        if (email === adminEmail && password === adminPassword) {
          loginAttempts.delete(email)
          return { id: '1', name: 'Admin', email }
        }
        return null
      },
    }),
  ],
  pages: { signIn: '/admin/login' },
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
}