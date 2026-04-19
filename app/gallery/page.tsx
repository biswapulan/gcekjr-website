'use client'
import { useEffect, useState } from 'react'
import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

interface GalleryItem { Title: string; ImageUrl: string; Category: string }

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    fetch('/api/gallery').then(r => r.json()).then(d => setItems(Array.isArray(d) ? d : []))
  }, [])

  const cats = ['All', ...new Set(items.map(i => i.Category).filter(Boolean))]
  const filtered = filter === 'All' ? items : items.filter(i => i.Category === filter)

  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />
      <div style={{padding:'32px'}}>
        <div style={{display:'flex',alignItems:'center',marginBottom:'24px'}}>
          <h1 style={{fontFamily:'Source Serif 4, serif',fontSize:'20px',fontWeight:600,color:'white',background:'var(--blue)',padding:'8px 16px'}}>Photo Gallery</h1>
          <div style={{flex:1,height:'2px',background:'var(--border)',alignSelf:'flex-end'}}></div>
        </div>
        <div style={{display:'flex',gap:'8px',marginBottom:'24px',flexWrap:'wrap'}}>
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              style={{padding:'6px 16px',fontSize:'12px',fontWeight:600,border:'1px solid var(--border)',cursor:'pointer',background:filter===c?'var(--blue)':'white',color:filter===c?'white':'var(--text)'}}>
              {c}
            </button>
          ))}
        </div>
        {filtered.length === 0 ? (
          <div style={{textAlign:'center',color:'var(--muted)',padding:'60px'}}>Gallery coming soon.</div>
        ) : (
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:'16px'}}>
            {filtered.map((item, i) => (
              <a key={i} href={item.ImageUrl} target="_blank" rel="noopener noreferrer"
                style={{display:'block',border:'1px solid var(--border)',overflow:'hidden',textDecoration:'none'}}>
                <div style={{height:'180px',background:'var(--blue-light)',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
                  {item.ImageUrl ? (
                    <img src={item.ImageUrl} alt={item.Title} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                  ) : (
                    <span style={{color:'var(--muted)',fontSize:'12px'}}>Image</span>
                  )}
                </div>
                <div style={{padding:'10px 12px'}}>
                  <div style={{fontSize:'12px',fontWeight:600,color:'var(--text)'}}>{item.Title}</div>
                  <div style={{fontSize:'11px',color:'var(--muted)'}}>{item.Category}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
