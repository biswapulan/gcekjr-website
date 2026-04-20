'use client'
import { useEffect, useState } from 'react'
import { SectionHead, Flash } from './shared'

interface ContactInfo {
  phone: string; email: string; establishmentEmail: string
  address: string; officeHours: string; collegeTimings: string; tpoEmail: string; tpoPhone: string
}

const DEFAULT: ContactInfo = {
  phone: '06766-255002', email: 'principal@gcekjr.ac.in',
  establishmentEmail: 'establishment@gcekjr.ac.in',
  address: 'Jamunalia, Old Town, Keonjhar – 758002, Odisha',
  officeHours: 'Mon – Sat: 10:00 AM – 5:00 PM',
  collegeTimings: 'Mon – Sat: 8:30 AM – 5:00 PM',
  tpoEmail: 'tpo@gcekjr.ac.in', tpoPhone: '06766-255002',
}

function Field({ label, value, onChange, hint }: { label: string; value: string; onChange: (v: string) => void; hint?: string }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '5px' }}>{label}</label>
      <input value={value} onChange={e => onChange(e.target.value)}
        style={{ width: '100%', border: '1px solid var(--border)', padding: '9px 12px', fontSize: '13px', outline: 'none', fontFamily: 'Source Sans 3, sans-serif', background: 'var(--input-bg)', color: 'var(--text)', borderRadius: '2px' }} />
      {hint && <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '3px' }}>{hint}</div>}
    </div>
  )
}

export default function ContactTab() {
  const [info, setInfo] = useState<ContactInfo>(DEFAULT)
  const [msg, setMsg] = useState(''); const [msgType, setMsgType] = useState<'success'|'error'|''>('')

  // Load from sheet on mount
  useEffect(() => {
    fetch('/api/contact').then(r => r.json()).then(d => {
      if (d && (d.Phone || d.phone)) setInfo({
        phone:               d.Phone               || d.phone               || DEFAULT.phone,
        email:               d.Email               || d.email               || DEFAULT.email,
        establishmentEmail:  d.EstablishmentEmail  || d.establishmentEmail  || DEFAULT.establishmentEmail,
        address:             d.Address             || d.address             || DEFAULT.address,
        officeHours:         d.OfficeHours         || d.officeHours         || DEFAULT.officeHours,
        collegeTimings:      d.CollegeTimings      || d.collegeTimings      || DEFAULT.collegeTimings,
        tpoEmail:            d.TpoEmail            || d.tpoEmail            || DEFAULT.tpoEmail,
        tpoPhone:            d.TpoPhone            || d.tpoPhone            || DEFAULT.tpoPhone,
      })
    }).catch(() => {})
  }, [])

  const save = async () => {
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(info) })
      if (!r.ok) throw new Error()
      setMsg('Contact info saved!'); setMsgType('success'); setTimeout(() => setMsg(''), 3500)
    } catch {
      setMsg('Failed to save. Please try again.'); setMsgType('error'); setTimeout(() => setMsg(''), 3500)
    }
  }

  const set = (key: keyof ContactInfo) => (v: string) => setInfo(prev => ({ ...prev, [key]: v }))

  return (
    <div>
      <SectionHead title="Contact Information" subtitle="Manage the contact details shown across the website." />
      <Flash msg={msg} type={msgType} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px' }} className="admin-form-grid">
        <div>
          <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid var(--border)' }}>General</div>
          <Field label="Main Phone" value={info.phone} onChange={set('phone')} />
          <Field label="Principal Email" value={info.email} onChange={set('email')} />
          <Field label="Establishment Email" value={info.establishmentEmail} onChange={set('establishmentEmail')} />
          <Field label="Address" value={info.address} onChange={set('address')} />
          <Field label="Office Hours" value={info.officeHours} onChange={set('officeHours')} hint="e.g. Mon – Sat: 10:00 AM – 5:00 PM" />
          <Field label="College Timings" value={info.collegeTimings} onChange={set('collegeTimings')} />
        </div>
        <div>
          <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid var(--border)' }}>Placement Cell</div>
          <Field label="TPO Email" value={info.tpoEmail} onChange={set('tpoEmail')} />
          <Field label="TPO Phone" value={info.tpoPhone} onChange={set('tpoPhone')} />
        </div>
      </div>
      <button onClick={save} style={{ background: 'var(--blue)', color: 'white', border: 'none', padding: '10px 28px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', borderRadius: '2px', marginTop: '8px' }}>
        Save Changes
      </button>
    </div>
  )
}