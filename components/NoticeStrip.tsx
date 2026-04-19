'use client'
import { useEffect, useState } from 'react'

interface Notice { Title: string; Category: string }

export default function NoticeStrip() {
  const [notices, setNotices] = useState<Notice[]>([])

  useEffect(() => {
    fetch('/api/notices')
      .then(r => r.json())
      .then(data => setNotices(Array.isArray(data) ? data.slice(0, 5) : []))
      .catch(() => {})
  }, [])

  const displayNotices = notices.length > 0 ? notices : [
    { Title: 'Welcome to Government College of Engineering, Keonjhar — Official Website', Category: '' },
    { Title: 'Admissions open for 2026-27 via OJEE Portal', Category: '' },
  ]

  return (
    <div style={{background:'var(--blue)',display:'flex',alignItems:'stretch',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>
      <div style={{background:'var(--red)',color:'white',fontSize:'11px',fontWeight:600,padding:'8px 16px',letterSpacing:'1px',textTransform:'uppercase',whiteSpace:'nowrap',display:'flex',alignItems:'center',gap:'6px'}}>
        <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'white',animation:'blink 1.2s infinite',display:'inline-block'}}></span>
        Latest News
      </div>
      <div style={{padding:'8px 16px',overflow:'hidden',display:'flex',alignItems:'center',gap:'24px',flex:1}}>
        {displayNotices.map((n, i) => (
          <span key={i} style={{color:'rgba(255,255,255,0.85)',fontSize:'12px',whiteSpace:'nowrap',display:'flex',alignItems:'center',gap:'6px'}}>
            <span style={{fontSize:'8px',color:'var(--red)'}}>▶</span>
            {n.Title}
          </span>
        ))}
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  )
}
