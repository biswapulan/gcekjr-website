'use client'
import { useEffect, useState } from 'react'
import { SectionHead, Input, AddCard, Flash, EmptyState, LoadingState, Table, DeleteBtn, thStyle, tdStyle } from './shared'

interface Notice { Date: string; Title: string; Category: string; PdfUrl: string; IsNew: string }

export default function NoticesTab() {
  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState(''); const [msgType, setMsgType] = useState<'success'|'error'|''>('')
  const [form, setForm] = useState({ date: '', title: '', category: '', pdfUrl: '', isNew: false })

  const flash = (m: string, t: 'success'|'error') => { setMsg(m); setMsgType(t); setTimeout(() => setMsg(''), 3500) }

  const load = async () => {
    setLoading(true)
    try { const d = await fetch('/api/notices').then(r => r.json()); setNotices(Array.isArray(d) ? d : []) }
    catch { flash('Failed to load notices.', 'error') }
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const add = async () => {
    if (!form.title || !form.date) return flash('Date and Title are required.', 'error')
    try {
      const r = await fetch('/api/notices', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!r.ok) throw new Error()
      setForm({ date: '', title: '', category: '', pdfUrl: '', isNew: false })
      flash('Notice added successfully!', 'success'); load()
    } catch { flash('Failed to add notice. Please try again.', 'error') }
  }

  const del = async (i: number) => {
    if (!confirm('Delete this notice?')) return
    try {
      const r = await fetch('/api/notices', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ rowIndex: i }) })
      if (!r.ok) throw new Error()
      flash('Notice deleted.', 'success'); load()
    } catch { flash('Failed to delete.', 'error') }
  }

  return (
    <div>
      <SectionHead title="Notices & Announcements" subtitle="Manage notices shown on the homepage and notices page." />
      <Flash msg={msg} type={msgType} />
      <AddCard title="Add New Notice" onSubmit={add}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }} className="admin-form-grid">
          <Input label="Date" value={form.date} onChange={v => setForm({ ...form, date: v })} placeholder="2026-04-19" type="date" />
          <Input label="Category" value={form.category} onChange={v => setForm({ ...form, category: v })} placeholder="Academic Affairs, Exam, Admission..." />
          <div style={{ gridColumn: '1/-1' }}>
            <Input label="Notice Title" value={form.title} onChange={v => setForm({ ...form, title: v })} placeholder="Notice title here..." />
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <Input label="PDF Link (Google Drive)" value={form.pdfUrl} onChange={v => setForm({ ...form, pdfUrl: v })} placeholder="https://drive.google.com/file/d/..." hint="Share the file publicly on Drive before pasting the link." />
          </div>
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', cursor: 'pointer', marginBottom: '4px' }}>
          <input type="checkbox" checked={form.isNew} onChange={e => setForm({ ...form, isNew: e.target.checked })} />
          Mark as <strong>NEW</strong> (shows red NEW badge)
        </label>
      </AddCard>

      {loading ? <LoadingState /> : notices.length === 0 ? <EmptyState msg="No notices yet. Add one above." /> : (
        <Table headers={['Date', 'Title', 'Category', 'PDF', 'New?', '']}>
          {notices.map((n, i) => (
            <tr key={i}>
              <td style={{ ...tdStyle, whiteSpace: 'nowrap', color: 'var(--muted)', fontSize: '12px' }}>{n.Date}</td>
              <td style={tdStyle}>{n.Title}</td>
              <td style={{ ...tdStyle, fontSize: '12px' }}><span style={{ background: 'var(--blue-light)', color: 'var(--blue)', padding: '2px 8px', fontSize: '11px', fontWeight: 600 }}>{n.Category || '—'}</span></td>
              <td style={tdStyle}>{n.PdfUrl ? <a href={n.PdfUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-mid)', fontSize: '12px', fontWeight: 600 }}>PDF ↗</a> : <span style={{ color: 'var(--light-text)' }}>—</span>}</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>{n.IsNew === 'true' ? <span style={{ background: 'var(--red)', color: 'white', padding: '2px 7px', fontSize: '10px', fontWeight: 700 }}>NEW</span> : '—'}</td>
              <td style={{ ...tdStyle, textAlign: 'right' }}><DeleteBtn onDelete={() => del(i)} /></td>
            </tr>
          ))}
        </Table>
      )}
    </div>
  )
}
