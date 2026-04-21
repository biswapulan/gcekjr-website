'use client'
import { useEffect, useState } from 'react'
import { SectionHead, Input, AddCard, Flash, EmptyState, LoadingState, Table, DeleteBtn, tdStyle } from './shared'

interface Download { Title: string; Description: string; DriveUrl: string; Category: string; FileSize: string }
const CATEGORIES = ['Brochure', 'Prospectus', 'Annual Magazine', 'NIRF Report', 'Placement Report', 'Circular', 'Other']

export default function DownloadsTab() {
  const [items, setItems] = useState<Download[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState(''); const [msgType, setMsgType] = useState<'success'|'error'|''>('')
  const [form, setForm] = useState({ title: '', description: '', driveUrl: '', category: '', fileSize: '' })

  const flash = (m: string, t: 'success'|'error') => { setMsg(m); setMsgType(t); setTimeout(() => setMsg(''), 3500) }
  const load = async () => {
    setLoading(true)
    try { const d = await fetch('/api/downloads').then(r => r.json()); setItems(Array.isArray(d) ? d : []) }
    catch { flash('Failed to load.', 'error') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  const add = async () => {
    if (!form.title || !form.driveUrl) return flash('Title and Drive URL are required.', 'error')
    try {
      const r = await fetch('/api/downloads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!r.ok) throw new Error()
      setForm({ title: '', description: '', driveUrl: '', category: '', fileSize: '' })
      flash('Download added!', 'success'); load()
    } catch { flash('Failed to add.', 'error') }
  }

  const del = async (i: number) => {
    if (!confirm('Remove this download?')) return
    try {
      const r = await fetch("/api/downloads", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ rowIndex: i }) })
      if (!r.ok) throw new Error()
      flash('Removed.', 'success'); load()
    } catch { flash('Failed to delete.', 'error') }
  }

  return (
    <div>
      <SectionHead title="Downloads & Publications" subtitle="Brochures, reports and documents available for download on the website." />
      <Flash msg={msg} type={msgType} />
      <AddCard title="Add Download" onSubmit={add}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }} className="admin-form-grid">
          <Input label="Title" value={form.title} onChange={v => setForm({ ...form, title: v })} placeholder="Placement Brochure 2024-25" />
          <div style={{ marginBottom: '12px' }}>
            <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '4px' }}>Category</label>
            <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}
              style={{ width: '100%', border: '1px solid var(--border)', padding: '8px 10px', fontSize: '13px', outline: 'none', background: 'var(--input-bg)', color: 'var(--text)', borderRadius: '2px' }}>
              <option value="">Select category...</option>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <Input label="Description" value={form.description} onChange={v => setForm({ ...form, description: v })} placeholder="2024–25 · Top recruiters, packages & stats" />
          <Input label="File Size (optional)" value={form.fileSize} onChange={v => setForm({ ...form, fileSize: v })} placeholder="PDF · 4.2 MB" />
          <div style={{ gridColumn: '1/-1' }}>
            <Input label="Google Drive Link" value={form.driveUrl} onChange={v => setForm({ ...form, driveUrl: v })} placeholder="https://drive.google.com/file/d/..." hint="Share the file publicly on Drive before pasting." />
          </div>
        </div>
      </AddCard>

      {loading ? <LoadingState /> : items.length === 0 ? <EmptyState msg="No downloads yet. Add one above." /> : (
        <Table headers={['Title', 'Category', 'Description', 'Size', 'Link', '']}>
          {items.map((d, i) => (
            <tr key={i}>
              <td style={{ ...tdStyle, fontWeight: 600 }}>{d.Title}</td>
              <td style={tdStyle}><span style={{ background: 'var(--blue-light)', color: 'var(--blue)', padding: '2px 8px', fontSize: '11px', fontWeight: 600 }}>{d.Category}</span></td>
              <td style={{ ...tdStyle, color: 'var(--muted)', fontSize: '12px' }}>{d.Description}</td>
              <td style={{ ...tdStyle, color: 'var(--muted)', fontSize: '12px' }}>{d.FileSize}</td>
              <td style={tdStyle}><a href={d.DriveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-mid)', fontSize: '12px', fontWeight: 600 }}>Open ↗</a></td>
              <td style={{ ...tdStyle, textAlign: 'right' }}><DeleteBtn onDelete={() => del(i)} /></td>
            </tr>
          ))}
        </Table>
      )}
    </div>
  )
}
