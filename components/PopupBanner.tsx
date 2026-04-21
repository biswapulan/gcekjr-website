'use client'
import { useEffect, useState } from 'react'
import { getDriveImageUrl } from '@/lib/driveImage'

export default function PopupBanner() {
  const [show, setShow] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    // Only show once per session
    const dismissed = sessionStorage.getItem('banner-dismissed')
    if (dismissed) return

    fetch('/api/banner')
      .then(r => r.json())
      .then(d => {
        if (d?.Active === 'TRUE' && d?.ImageUrl) {
          setImageUrl(d.ImageUrl)
          setShow(true)
        }
      })
      .catch(() => {})
  }, [])

  const close = () => {
    setShow(false)
    sessionStorage.setItem('banner-dismissed', '1')
  }

  if (!show || !imageUrl) return null

  return (
    <div
      onClick={close}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.75)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '580px',
          width: '100%',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        {/* Close button */}
        <button
          onClick={close}
          style={{
            position: 'absolute', top: '10px', right: '10px', zIndex: 10,
            background: 'rgba(0,0,0,0.6)', color: 'white',
            border: 'none', borderRadius: '50%',
            width: '32px', height: '32px',
            fontSize: '16px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        <img
          src={getDriveImageUrl(imageUrl, 1200)}
          alt="Notice"
          style={{ width: '100%', display: 'block', maxHeight: '85vh', objectFit: 'contain' }}
        />

        <div style={{ background: 'var(--blue)', padding: '10px 16px', textAlign: 'center' }}>
          <button
            onClick={close}
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.4)', color: 'white', fontSize: '12px', padding: '5px 20px', cursor: 'pointer', borderRadius: '2px' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
