'use client'
import { useEffect, useState } from 'react'
import { SectionHead, Input, AddCard, Flash, EmptyState, LoadingState, DeleteBtn } from './shared'
import { getDriveImageUrl } from '@/lib/driveImage'

interface GalleryItem { Title: string; ImageUrl: string; Category: string }
const CATEGORIES = ['Events', 'Campus', 'Labs', 'Sports', 'Convocation', 'Other']

export default function GalleryTab() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState(''); const [msgType, setMsgType] = useState<'success'|'error'|''>('')
  const [form, setForm] = useState({ title: '', imageUrl: '', category: '' })

  const flash = (m: string, t: 'success'|'error') => { setMsg(m); setMsgType(t); setTimeout(() => setMsg(''), 3500) }
  const load = async () => {
    setLoading(true)
    try { const d = await fetch('/api/gallery').then(r => r.json()); setItems(Array.isArray(d) ? d : []) }
    catch { flash('Failed to load.', 'error') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  const add = async () => {
    if (!form.title || !form.imageUrl) return flash('Title and Image URL are required.', 'error')
    try {
      const r = await fetch('/api/gallery', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!r.ok) throw new Error()
      setForm({ title: '', imageUrl: '', category: '' })
      flash('Image added to gallery!', 'success'); load()
    } catch { flash('Failed to add image.', 'error') }
  }

  const del = async (i: number) => {
    if (!confirm('Remove this image?')) return
    try {
      const r = await fetch('/api/gallery', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ rowIndex: i }) })
      if (!r.ok) throw new Error()
      flash('Image removed.', 'success'); load()
    } catch { flash('Failed to delete.', 'error') }
  }

  return (
    <div>
      <SectionHead title="Photo Gallery" subtitle="Images shown in the gallery section on the homepage and gallery page." />
      {msg && <div style={{ padding: '10px 16px', marginBottom: '16px', fontSize: '13px', borderRadius: '2px', ...(msgType === 'success' ? { background: '#f0fdf4', border: '1px solid #86efac', color: '#166534' } : { background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626' }) }}>{msgType === 'success' ? '✓ ' : '✕ '}{msg}</div>}

      <AddCard title="Add Gallery Image" onSubmit={add}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }} className="admin-form-grid">
          <Input label="Title" value={form.title} onChange={v => setForm({ ...form, title: v })} placeholder="Convocation 2025" />
          <div style={{ marginBottom: '12px' }}>
            <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '4px' }}>Category</label>
            <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}
              style={{ width: '100%', border: '1px solid var(--border)', padding: '8px 10px', fontSize: '13px', outline: 'none', background: 'var(--input-bg)', color: 'var(--text)', borderRadius: '2px' }}>
              <option value="">Select category...</option>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <Input label="Google Drive Image URL" value={form.imageUrl} onChange={v => setForm({ ...form, imageUrl: v })} placeholder="https://drive.google.com/..." hint="Upload image to Drive → Share publicly → Copy link → Paste here." />
          </div>
        </div>
      </AddCard>

      {loading ? <LoadingState /> : items.length === 0 ? <EmptyState msg="No gallery images yet." /> : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="admin-gallery-grid">
          {items.map((g, i) => (
            <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ height: '150px', background: 'var(--blue-light)', overflow: 'hidden', position: 'relative' }}>
                {g.ImageUrl
                  ? <img src={getDriveImageUrl(g.ImageUrl)} alt={g.Title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                  : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '32px', opacity: 0.3 }}>🖼</div>
                }
                <div style={{ position: 'absolute', top: '6px', right: '6px', background: 'var(--blue)', color: 'white', fontSize: '10px', fontWeight: 600, padding: '2px 8px' }}>{g.Category}</div>
              </div>
              <div style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)', flex: 1, marginRight: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{g.Title}</div>
                <DeleteBtn onDelete={() => del(i)} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}