'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [search, setSearch] = useState('')
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search.trim())}`)
      setMobileSearchOpen(false)
    }
  }

  return (
    <>
      <div className="site-header">
        <div className="header-logo">
          <img src="/gcekjr-logo.png" alt="GCE Keonjhar Logo" />
        </div>
        <div className="header-divider" />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="header-name">Government College of Engineering, Keonjhar</div>
          <div className="header-odia">ସରକାରୀ ଯାନ୍ତ୍ରୀକ ମହାବିଦ୍ୟାଳୟ, କେନ୍ଦୁଝରଗଡ଼</div>
          <div className="header-sub">Jamunalia, Old Town, Keonjhar – 758002, Odisha &nbsp;|&nbsp; Estd. 1995</div>
        </div>
        <div className="header-right">
          <div className="header-badges">
            <span className="header-badge header-badge-filled">AICTE Approved</span>
            <span className="header-badge">BPUT Affiliated</span>
            <span className="header-badge">NAAC Accredited</span>
          </div>
          <form onSubmit={handleSearch} className="search-form desktop-search">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search notices, faculty, departments..."
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
          </form>
        </div>
        <button
          className="mobile-search-icon"
          onClick={() => setMobileSearchOpen(v => !v)}
          aria-label="Search"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
        </button>
      </div>

      {mobileSearchOpen && (
        <form onSubmit={handleSearch} className="mobile-search-bar">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search notices, faculty, departments..."
            className="mobile-search-input"
            autoFocus
          />
          <button type="submit" className="search-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
          <button type="button" onClick={() => setMobileSearchOpen(false)} className="mobile-search-close">✕</button>
        </form>
      )}
    </>
  )
}
