'use client'
import { useEffect, useState } from 'react'
import { SectionHead, Input, AddCard, Flash, EmptyState, LoadingState, DeleteBtn } from './shared'

interface Slide { Tag: string; Title: string; Description: string; ImageUrl: string }

export default function SliderTab() {
  const [slides, setSlides] = useState<Slide[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState(''); const [msgType, setMsgType] = useState<'success'|'error'|''>('')
  const [form, setForm] = useState({ tag: '', title: '', description: '', imageUrl: '' })

  const flash = (m: string, t: 'success'|'error') => { setMsg(m); setMsgType(t); setTimeout(() => setMsg(''), 3500) }
  const load = async () => {
    setLoading(true)
    try { const d = await fetch('/api/slider').then(r => r.json()); setSlides(Array.isArray(d) ? d : []) }
    catch { flash('Failed to load.', 'error') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  const add = async () => {
    if (!form.title) return flash('Title is required.', 'error')
    try {
      const r = await fetch('/api/slider', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!r.ok) throw new Error()
      setForm({ tag: '', title: '', description: '', imageUrl: '' })
      flash('Slide added!', 'success'); load()
    } catch { flash('Failed to add slide.', 'error') }
  }

  const del = async (i: number) => {
    if (!confirm('Delete this slide?')) return
    try {
      const r = await fetch('/api/slider', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ rowIndex: i }) })
      if (!r.ok) throw new Error()
      flash('Slide deleted.', 'success'); load()
    } catch { flash('Failed to delete.', 'error') }
  }

  return (
    <div>
      <SectionHead title="Hero Slider" subtitle="Slides shown on the homepage hero section. If empty, default slides are used." />
      <Flash msg={msg} type={msgType} />
      <div style={{ background: 'var(--blue-light)', border: '1px solid var(--border)', borderLeft: '3px solid var(--blue)', padding: '10px 14px', marginBottom: '16px', fontSize: '12px', color: 'var(--muted)' }}>
        💡 If no slides are added here, the homepage will use the built-in default slides automatically.
      </div>
      <AddCard title="Add New Slide" onSubmit={add}>
        <Input label="Tag (small label above title)" value={form.tag} onChange={v => setForm({ ...form, tag: v })} placeholder="Admissions Open · 2026-27" />
        <Input label="Title (main heading)" value={form.title} onChange={v => setForm({ ...form, title: v })} placeholder="Begin Your Engineering Journey" />
        <Input label="Description" value={form.description} onChange={v => setForm({ ...form, description: v })} placeholder="Short description shown below the title..." />
        <Input label="Background Image URL (optional)" value={form.imageUrl} onChange={v => setForm({ ...form, imageUrl: v })} placeholder="https://drive.google.com/..." />
      </AddCard>

      {loading ? <LoadingState /> : slides.length === 0 ? <EmptyState msg="No custom slides. Default slides are being used." /> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {slides.map((s, i) => (
            <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '2px', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '10px', color: 'var(--red)', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '3px' }}>{s.Tag || 'No tag'}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--blue)', fontFamily: 'Source Serif 4, serif' }}>{s.Title}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '3px', lineHeight: 1.5 }}>{s.Description}</div>
              </div>
              <DeleteBtn onDelete={() => del(i)} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}