'use client'
import { useEffect, useState } from 'react'
import { SectionHead, Input, AddCard, Flash, EmptyState, LoadingState, Table, DeleteBtn, tdStyle } from './shared'

interface Event { DateRange: string; Title: string; Description: string }

export default function EventsTab() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState(''); const [msgType, setMsgType] = useState<'success'|'error'|''>('')
  const [form, setForm] = useState({ dateRange: '', title: '', description: '' })

  const flash = (m: string, t: 'success'|'error') => { setMsg(m); setMsgType(t); setTimeout(() => setMsg(''), 3500) }
  const load = async () => {
    setLoading(true)
    try { const d = await fetch('/api/events').then(r => r.json()); setEvents(Array.isArray(d) ? d : []) }
    catch { flash('Failed to load.', 'error') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  const add = async () => {
    if (!form.title || !form.dateRange) return flash('Date and Title are required.', 'error')
    try {
      const r = await fetch('/api/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!r.ok) throw new Error()
      setForm({ dateRange: '', title: '', description: '' })
      flash('Event added!', 'success'); load()
    } catch { flash('Failed to add event.', 'error') }
  }

  const del = async (i: number) => {
    if (!confirm('Delete this event?')) return
    try {
      await fetch('/api/events', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ rowIndex: i }) })
      flash('Event deleted.', 'success'); load()
    } catch { flash('Failed to delete.', 'error') }
  }

  return (
    <div>
      <SectionHead title="Events" subtitle="Upcoming events shown in the sidebar." />
      <Flash msg={msg} type={msgType} />
      <AddCard title="Add New Event" onSubmit={add}>
        <Input label="Date Range" value={form.dateRange} onChange={v => setForm({ ...form, dateRange: v })} placeholder="Apr 17–18" hint="e.g. Apr 17, Apr 17–18, Apr 17–20" />
        <Input label="Event Title" value={form.title} onChange={v => setForm({ ...form, title: v })} placeholder="Annual Tech Fest 2026" />
        <Input label="Description (optional)" value={form.description} onChange={v => setForm({ ...form, description: v })} placeholder="Short description" />
      </AddCard>
      {loading ? <LoadingState /> : events.length === 0 ? <EmptyState msg="No events yet." /> : (
        <Table headers={['Date', 'Title', 'Description', '']}>
          {events.map((e, i) => (
            <tr key={i}>
              <td style={{ ...tdStyle, whiteSpace: 'nowrap', fontSize: '12px', color: 'var(--blue)', fontWeight: 600 }}>{e.DateRange}</td>
              <td style={tdStyle}>{e.Title}</td>
              <td style={{ ...tdStyle, color: 'var(--muted)', fontSize: '12px' }}>{e.Description || '—'}</td>
              <td style={{ ...tdStyle, textAlign: 'right' }}><DeleteBtn onDelete={() => del(i)} /></td>
            </tr>
          ))}
        </Table>
      )}
    </div>
  )
}
