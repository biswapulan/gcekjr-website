'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getDriveImageUrl } from '@/lib/driveImage'

interface GalleryItem { Title: string; ImageUrl: string; Category: string }

const categories = ['All', 'Events', 'Campus', 'Labs', 'Sports', 'Convocation']

// placeholder gradient tiles when no images loaded
const placeholderColors = [
  ['#1a3a6b', '#234d8f'], ['#b5261e', '#8a1c14'], ['#1a3a6b', '#0a1e38'],
  ['#234d8f', '#1a3a6b'], ['#112244', '#1a3a6b'], ['#8a1c14', '#b5261e'],
]

export default function GalleryShowcase() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  useEffect(() => {
    fetch('/api/gallery').then(r => r.json()).then(data => {
      if (Array.isArray(data) && data.length > 0) setItems(data)
    }).catch(() => {})
  }, [])

  const filtered = activeCategory === 'All' ? items : items.filter(i => i.Category === activeCategory)
  const showItems = filtered.length > 0 ? filtered.slice(0, 9) : Array(9).fill(null)

  return (
    <section className="gallery-showcase">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div className="section-heading" style={{ margin: 0, flex: 1 }}>
          <h2>Photo Gallery</h2>
          <div className="section-heading-line" />
        </div>
        <Link href="/gallery" className="gallery-view-all">View All →</Link>
      </div>

      {/* Category filters */}
      <div className="gallery-filters">
        {categories.map(cat => (
          <button key={cat} className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      <div className="gallery-grid">
        {showItems.map((item, i) => (
          <div
            key={i}
            className={`gallery-tile gallery-tile-${(i % 5 === 0 || i % 7 === 0) ? 'tall' : 'normal'}`}
            onClick={() => item && setLightbox(item)}
            style={{ cursor: item ? 'pointer' : 'default' }}
          >
            {item?.ImageUrl ? (
              <img src={getDriveImageUrl(item.ImageUrl)} alt={item.Title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg, ${placeholderColors[i % 6][0]}, ${placeholderColors[i % 6][1]})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', opacity: 0.3 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                </div>
              </div>
            )}
            {item && (
              <div className="gallery-tile-overlay">
                <div className="gallery-tile-title">{item.Title}</div>
                <div className="gallery-tile-cat">{item.Category}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button className="gallery-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <div className="gallery-lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={getDriveImageUrl(lightbox.ImageUrl)} alt={lightbox.Title} style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', display: 'block' }} />
            <div style={{ padding: '12px 16px', background: 'rgba(0,0,0,0.8)' }}>
              <div style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>{lightbox.Title}</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '2px' }}>{lightbox.Category}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
