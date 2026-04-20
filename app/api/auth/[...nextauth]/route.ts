import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    ADMIN_EMAIL_SET: !!process.env.ADMIN_EMAIL,
    ADMIN_EMAIL_VALUE: process.env.ADMIN_EMAIL ?? 'NOT SET',
    ADMIN_PASSWORD_SET: !!process.env.ADMIN_PASSWORD,
    NEXTAUTH_SECRET_SET: !!process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL ?? 'NOT SET',
  })
}