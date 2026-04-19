import type { Metadata } from 'next'
import './globals.css'
import SocialSidebar from '@/components/SocialSidebar'
import ThemeProvider from '@/components/ThemeProvider'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Government College of Engineering, Keonjhar',
  description: 'Official website of GCE Keonjhar — Premier engineering institution in North Odisha. Affiliated to BPUT, approved by AICTE.',
  keywords: 'GCE Keonjhar, GCEKJR, Government College Engineering Keonjhar, BPUT, engineering college Odisha',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
          <SocialSidebar />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
