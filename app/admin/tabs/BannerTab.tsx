'use client'
import { useEffect, useState } from 'react'
import { SectionHead, Input, Flash, LoadingState } from './shared'
import { getDriveImageUrl } from '@/lib/driveImage'

export default function BannerTab() {
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState(''); const [msgType, setMsgType] = useState<'success'|'error'|''>('')
  const [imageUrl, setImageUrl] = useState('')
  const [active, setActive] = useState(false)
  const [hasData, setHasData] = useState(false)

  const flash = (m: string, t: 'success'|'error') => { setMsg(m); setMsgType(t); setTimeout(() => setMsg(''), 3500) }

  const load = async () => {
    setLoading(true)
    try {
      const d = await fetch('/api/banner').then(r => r.json())
      if (d && d.ImageUrl !== undefined) {
        setImageUrl(d.ImageUrl || '')
        setActive(d.Active === 'TRUE' || d.Active === true)
        setHasData(true)
      }
    } catch { flash('Failed to load.', 'error') }
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const save = async () => {
    if (!imageUrl) return flash('Image URL is required.', 'error')
    try {
      const r = await fetch('/api/banner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl, active })
      })
      if (!r.ok) throw new Error()
      flash('Banner saved!', 'success')
      load()
    } catch { flash('Failed to save banner.', 'error') }
  }

  const disable = async () => {
    try {
      const r = await fetch('/api/banner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl, active: false })
      })
      if (!r.ok) throw new Error()
      setActive(false)
      flash('Banner disabled.', 'success')
    } catch { flash('Failed to disable.', 'error') }
  }

  return (
    <div>
      <SectionHead title="Popup Banner" subtitle="Shows a popup modal on homepage load. Disable it when the event is over." />
      <Flash msg={msg} type={msgType} />

      {loading ? <LoadingState /> : (
        <>
          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', padding: '20px', marginBottom: '16px' }}>
            <div style={{ marginBottom: '16px' }}>
              <Input label="Banner Image URL (Google Drive link)" value={imageUrl} onChange={setImageUrl} placeholder="https://drive.google.com/file/d/.../view" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>Banner Active:</label>
              <button
                onClick={() => setActive(!active)}
                style={{
                  padding: '6px 18px', fontSize: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', borderRadius: '2px',
                  background: active ? '#16a34a' : 'var(--border)',
                  color: active ? 'white' : 'var(--muted)',
                  transition: 'all 0.2s'
                }}
              >
                {active ? '✓ ON' : 'OFF'}
              </button>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>
                {active ? 'Banner will show on homepage load' : 'Banner is hidden'}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={save} style={{ background: 'var(--blue)', color: 'white', border: 'none', padding: '9px 22px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', borderRadius: '2px' }}>
                Save Banner
              </button>
              {hasData && active && (
                <button onClick={disable} style={{ background: 'var(--red)', color: 'white', border: 'none', padding: '9px 22px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', borderRadius: '2px' }}>
                  Disable Banner
                </button>
              )}
            </div>
          </div>

          {imageUrl && (
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', padding: '16px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>Preview</div>
              <img
                src={getDriveImageUrl(imageUrl, 800)}
                alt="Banner preview"
                style={{ maxWidth: '320px', maxHeight: '400px', objectFit: 'contain', border: '1px solid var(--border)' }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}
