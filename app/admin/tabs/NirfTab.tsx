'use client'
import { useEffect, useState } from 'react'
import { SectionHead, Input, AddCard, Flash, EmptyState, LoadingState, Table, DeleteBtn, tdStyle } from './shared'

interface NirfDoc { Year: string; Title: string; DriveUrl: string; Type: string }
const TYPES = ['NIRF Report', 'Placement Report', 'Annual Report', 'Accreditation', 'Other']

export default function NirfTab() {
  const [items, setItems] = useState<NirfDoc[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState(''); const [msgType, setMsgType] = useState<'success'|'error'|''>('')
  const [form, setForm] = useState({ year: '', title: '', driveUrl: '', type: '' })

  const flash = (m: string, t: 'success'|'error') => { setMsg(m); setMsgType(t); setTimeout(() => setMsg(''), 3500) }
  const load = async () => {
    setLoading(true)
    try { const d = await fetch('/api/nirf').then(r => r.json()); setItems(Array.isArray(d) ? d : []) }
    catch { flash('Failed to load.', 'error') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  const add = async () => {
    if (!form.title || !form.driveUrl) return flash('Title and Drive URL are required.', 'error')
    try {
      const r = await fetch('/api/nirf', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!r.ok) throw new Error()
      setForm({ year: '', title: '', driveUrl: '', type: '' })
      flash('Document added!', 'success'); load()
    } catch { flash('Failed to add.', 'error') }
  }

  const del = async (i: number) => {
    if (!confirm('Remove this document?')) return
    try {
      await fetch('/api/nirf', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ rowIndex: i }) })
      flash('Removed.', 'success'); load()
    } catch { flash('Failed to delete.', 'error') }
  }

  return (
    <div>
      <SectionHead title="NIRF & Reports" subtitle="PDF links for NIRF ranking data, placement reports and accreditation documents." />
      <Flash msg={msg} type={msgType} />
      <AddCard title="Add Document" onSubmit={add}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }} className="admin-form-grid">
          <Input label="Year" value={form.year} onChange={v => setForm({ ...form, year: v })} placeholder="2024" />
          <div style={{ marginBottom: '12px' }}>
            <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '4px' }}>Type</label>
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
              style={{ width: '100%', border: '1px solid var(--border)', padding: '8px 10px', fontSize: '13px', outline: 'none', background: 'var(--input-bg)', color: 'var(--text)', borderRadius: '2px' }}>
              <option value="">Select type...</option>
              {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <Input label="Document Title" value={form.title} onChange={v => setForm({ ...form, title: v })} placeholder="NIRF Data 2024 — GCE Keonjhar" />
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <Input label="Google Drive Link" value={form.driveUrl} onChange={v => setForm({ ...form, driveUrl: v })} placeholder="https://drive.google.com/file/d/..." hint="Share file publicly on Drive before pasting." />
          </div>
        </div>
      </AddCard>

      {loading ? <LoadingState /> : items.length === 0 ? <EmptyState msg="No documents yet." /> : (
        <Table headers={['Year', 'Type', 'Title', 'Link', '']}>
          {items.map((d, i) => (
            <tr key={i}>
              <td style={{ ...tdStyle, fontWeight: 700, color: 'var(--blue)', fontSize: '13px' }}>{d.Year}</td>
              <td style={tdStyle}><span style={{ background: 'var(--blue-light)', color: 'var(--blue)', padding: '2px 8px', fontSize: '11px', fontWeight: 600 }}>{d.Type}</span></td>
              <td style={tdStyle}>{d.Title}</td>
              <td style={tdStyle}><a href={d.DriveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-mid)', fontSize: '12px', fontWeight: 600 }}>PDF ↗</a></td>
              <td style={{ ...tdStyle, textAlign: 'right' }}><DeleteBtn onDelete={() => del(i)} /></td>
            </tr>
          ))}
        </Table>
      )}
    </div>
  )
}
