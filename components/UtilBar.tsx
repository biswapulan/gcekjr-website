'use client'
import { useEffect, useState } from 'react'

export default function UtilBar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme') === 'dark'
    setDark(saved)
  }, [])

  const toggleTheme = () => {
    const next = dark ? 'light' : 'dark'
    setDark(!dark)
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <div className="utilbar">
      <span className="utilbar-left">
        Government College of Engineering, Keonjhar &nbsp;|&nbsp; Odisha
      </span>
      <div className="utilbar-right">
        {[
          { label: 'SHe-BOX', href: 'https://shebox.wcd.gov.in' },
          { label: 'Pay Online', href: 'https://www.onlinesbi.sbi/sbicollect/icollecthome.htm' },
          { label: 'Grievance Portal', href: 'https://edugrievance.com' },
          { label: 'Alumni Portal', href: 'https://gcekjralumni.org' },
          { label: 'AICTE Feedback', href: 'https://www.aicte-india.org' },
        ].map(link => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="utilbar-link">
            {link.label}
          </a>
        ))}
        <span className="utilbar-divider" />
        <button onClick={toggleTheme} className="theme-toggle" title={dark ? 'Light Mode' : 'Dark Mode'}>
          {dark ? (
            <svg width="13" height="13" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          )}
        </button>
        <a href="/login" className="login-btn">
          <svg width="12" height="12" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2">
            <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
          Login
        </a>
      </div>
    </div>
  )
}
