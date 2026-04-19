'use client'
import { useEffect, useState } from 'react'
import { SectionHead, Input, AddCard, Flash, EmptyState, LoadingState, DeleteBtn } from './shared'

interface Recruiter { Name: string; Sector: string }

export default function RecruitersTab() {
  const [items, setItems] = useState<Recruiter[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState(''); const [msgType, setMsgType] = useState<'success'|'error'|''>('')
  const [form, setForm] = useState({ name: '', sector: '' })

  const flash = (m: string, t: 'success'|'error') => { setMsg(m); setMsgType(t); setTimeout(() => setMsg(''), 3500) }
  const load = async () => {
    setLoading(true)
    try { const d = await fetch('/api/recruiters').then(r => r.json()); setItems(Array.isArray(d) ? d : []) }
    catch { flash('Failed to load.', 'error') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  const add = async () => {
    if (!form.name) return flash('Company name is required.', 'error')
    try {
      const r = await fetch('/api/recruiters', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!r.ok) throw new Error()
      setForm({ name: '', sector: '' })
      flash('Recruiter added!', 'success'); load()
    } catch { flash('Failed to add.', 'error') }
  }

  const del = async (i: number) => {
    if (!confirm('Remove this recruiter?')) return
    try {
      await fetch('/api/recruiters', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ rowIndex: i }) })
      flash('Removed.', 'success'); load()
    } catch { flash('Failed to delete.', 'error') }
  }

  return (
    <div>
      <SectionHead title="Recruiters" subtitle="Companies shown in the scrolling marquee on the homepage." />
      <Flash msg={msg} type={msgType} />
      <AddCard title="Add Recruiter" onSubmit={add}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }} className="admin-form-grid">
          <Input label="Company Name" value={form.name} onChange={v => setForm({ ...form, name: v })} placeholder="Vedanta Resources" />
          <Input label="Sector (optional)" value={form.sector} onChange={v => setForm({ ...form, sector: v })} placeholder="Mining / Metals" />
        </div>
      </AddCard>

      {loading ? <LoadingState /> : items.length === 0 ? <EmptyState msg="No recruiters yet." /> : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {items.map((r, i) => (
            <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '2px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>{r.Name}</div>
                {r.Sector && <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{r.Sector}</div>}
              </div>
              <button onClick={() => del(i)} style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontSize: '14px', padding: '0 2px', lineHeight: 1 }} title="Remove">✕</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
