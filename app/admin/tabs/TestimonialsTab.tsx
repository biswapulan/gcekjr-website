'use client'
import { useEffect, useState } from 'react'
import { SectionHead, Input, AddCard, Flash, EmptyState, LoadingState, DeleteBtn } from './shared'

interface Testimonial { Quote: string; Name: string; Designation: string; Company: string }

export default function TestimonialsTab() {
  const [items, setItems] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState(''); const [msgType, setMsgType] = useState<'success'|'error'|''>('')
  const [form, setForm] = useState({ quote: '', name: '', designation: '', company: '' })

  const flash = (m: string, t: 'success'|'error') => { setMsg(m); setMsgType(t); setTimeout(() => setMsg(''), 3500) }
  const load = async () => {
    setLoading(true)
    try { const d = await fetch('/api/testimonials').then(r => r.json()); setItems(Array.isArray(d) ? d : []) }
    catch { flash('Failed to load.', 'error') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  const add = async () => {
    if (!form.quote || !form.name) return flash('Quote and Name are required.', 'error')
    try {
      const r = await fetch('/api/testimonials', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!r.ok) throw new Error()
      setForm({ quote: '', name: '', designation: '', company: '' })
      flash('Testimonial added!', 'success'); load()
    } catch { flash('Failed to add.', 'error') }
  }

  const del = async (i: number) => {
    if (!confirm('Remove this testimonial?')) return
    try {
      const r = await fetch('/api/testimonials', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ rowIndex: i }) })
      if (!r.ok) throw new Error()
      flash('Removed.', 'success'); load()
    } catch { flash('Failed to delete.', 'error') }
  }

  return (
    <div>
      <SectionHead title="Testimonials" subtitle="Recruiter testimonials shown in the homepage slider." />
      <Flash msg={msg} type={msgType} />
      <AddCard title="Add Testimonial" onSubmit={add}>
        <div style={{ marginBottom: '12px' }}>
          <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '4px' }}>Quote</label>
          <textarea value={form.quote} onChange={e => setForm({ ...form, quote: e.target.value })} rows={3} placeholder="What the recruiter said about GCE Keonjhar graduates..."
            style={{ width: '100%', border: '1px solid var(--border)', padding: '8px 10px', fontSize: '13px', outline: 'none', fontFamily: 'Source Sans 3, sans-serif', background: 'var(--input-bg)', color: 'var(--text)', resize: 'vertical', borderRadius: '2px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0 16px' }} className="admin-form-grid">
          <Input label="Name" value={form.name} onChange={v => setForm({ ...form, name: v })} placeholder="Mr. Rajesh Kumar" />
          <Input label="Designation" value={form.designation} onChange={v => setForm({ ...form, designation: v })} placeholder="Head – HR" />
          <Input label="Company" value={form.company} onChange={v => setForm({ ...form, company: v })} placeholder="Vedanta Resources" />
        </div>
      </AddCard>

      {loading ? <LoadingState /> : items.length === 0 ? <EmptyState msg="No testimonials yet." /> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {items.map((t, i) => (
            <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '2px', padding: '16px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13px', color: 'var(--text)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '10px', borderLeft: '3px solid var(--blue)', paddingLeft: '12px' }}>"{t.Quote}"</div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ width: '28px', height: '28px', background: 'var(--blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '11px', fontWeight: 700, flexShrink: 0 }}>{t.Name?.[0]}</div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>{t.Name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{t.Designation} · {t.Company}</div>
                  </div>
                </div>
              </div>
              <DeleteBtn onDelete={() => del(i)} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}