'use client'
import { useEffect, useState } from 'react'
import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

interface Event { DateRange: string; Title: string; Category?: string; Description?: string }

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/events').then(r => r.json()).then(d => {
      setEvents(Array.isArray(d) ? d : [])
    }).finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Events</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Events & Activities</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>Upcoming & Recent Events</h2>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
        </div>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: 'var(--muted)', fontSize: '13px' }}>Loading events...</div>
        ) : events.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', color: 'var(--muted)', fontSize: '13px' }}>No events at this time. Check back soon.</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
            {events.map((e, i) => (
              <div key={i} style={{ background: 'var(--white)', padding: '18px 20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--blue)', color: 'white', padding: '8px 12px', textAlign: 'center', flexShrink: 0, minWidth: '80px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px' }}>{e.DateRange}</div>
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{e.Title}</div>
                  {e.Category && <span style={{ fontSize: '10px', background: 'var(--blue-light)', color: 'var(--blue)', padding: '2px 8px', border: '1px solid var(--border)', fontWeight: 600 }}>{e.Category}</span>}
                  {e.Description && <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '6px', lineHeight: 1.7 }}>{e.Description}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
