import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()
  const adminEmail = process.env.ADMIN_EMAIL ?? ''
  const adminPassword = process.env.ADMIN_PASSWORD ?? ''
  return NextResponse.json({
    emailMatch: email === adminEmail,
    passwordMatch: password === adminPassword,
    adminEmailLength: adminEmail.length,
    adminPasswordLength: adminPassword.length,
  })
}