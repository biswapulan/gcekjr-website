'use client'
import { useEffect, useState } from 'react'
import { SectionHead, Input, AddCard, Flash, EmptyState, LoadingState, Table, DeleteBtn, tdStyle } from './shared'

interface Faculty { Name: string; Designation: string; Department: string; Qualification: string; PhotoUrl: string }

const DEPARTMENTS = ['Mining Engineering', 'Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Computer Science & Engineering', 'Metallurgical & Materials Engineering', 'Mineral Engineering']

export default function FacultyTab() {
  const [faculty, setFaculty] = useState<Faculty[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState(''); const [msgType, setMsgType] = useState<'success'|'error'|''>('')
  const [form, setForm] = useState({ name: '', designation: '', department: '', qualification: '', photoUrl: '' })

  const flash = (m: string, t: 'success'|'error') => { setMsg(m); setMsgType(t); setTimeout(() => setMsg(''), 3500) }
  const load = async () => {
    setLoading(true)
    try { const d = await fetch('/api/faculty').then(r => r.json()); setFaculty(Array.isArray(d) ? d : []) }
    catch { flash('Failed to load.', 'error') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  const add = async () => {
    if (!form.name || !form.department) return flash('Name and Department are required.', 'error')
    try {
      const r = await fetch('/api/faculty', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!r.ok) throw new Error()
      setForm({ name: '', designation: '', department: '', qualification: '', photoUrl: '' })
      flash('Faculty member added!', 'success'); load()
    } catch { flash('Failed to add faculty.', 'error') }
  }

  const del = async (i: number) => {
    if (!confirm('Delete this faculty member?')) return
    try {
      await fetch('/api/faculty', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ rowIndex: i }) })
      flash('Deleted.', 'success'); load()
    } catch { flash('Failed to delete.', 'error') }
  }

  const depts = [...new Set(faculty.map(f => f.Department).filter(Boolean))]

  return (
    <div>
      <SectionHead title="Faculty" subtitle="Manage faculty members shown on the faculty page." />
      <Flash msg={msg} type={msgType} />
      <AddCard title="Add Faculty Member" onSubmit={add}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }} className="admin-form-grid">
          <Input label="Full Name" value={form.name} onChange={v => setForm({ ...form, name: v })} placeholder="Dr. Example Name" />
          <Input label="Designation" value={form.designation} onChange={v => setForm({ ...form, designation: v })} placeholder="Assistant Professor" />
          <div style={{ marginBottom: '12px' }}>
            <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '4px' }}>Department</label>
            <select value={form.department} onChange={e => setForm({ ...form, department: e.target.value })}
              style={{ width: '100%', border: '1px solid var(--border)', padding: '8px 10px', fontSize: '13px', outline: 'none', background: 'var(--input-bg)', color: 'var(--text)', borderRadius: '2px' }}>
              <option value="">Select department...</option>
              {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <Input label="Qualification" value={form.qualification} onChange={v => setForm({ ...form, qualification: v })} placeholder="Ph.D, M.Tech" />
          <div style={{ gridColumn: '1/-1' }}>
            <Input label="Photo URL (Google Drive)" value={form.photoUrl} onChange={v => setForm({ ...form, photoUrl: v })} placeholder="https://drive.google.com/..." hint="Upload photo to Drive, share publicly, paste the link." />
          </div>
        </div>
      </AddCard>

      {loading ? <LoadingState /> : faculty.length === 0 ? <EmptyState msg="No faculty added yet." /> : (
        <div>
          {depts.map(dept => (
            <div key={dept} style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px', paddingBottom: '6px', borderBottom: '2px solid var(--blue-light)' }}>{dept}</div>
              <Table headers={['Photo', 'Name', 'Designation', 'Qualification', '']}>
                {faculty.filter(f => f.Department === dept).map((f, i) => {
                  const globalIndex = faculty.indexOf(f)
                  return (
                    <tr key={i}>
                      <td style={tdStyle}>
                        <div style={{ width: '36px', height: '44px', background: 'var(--blue-light)', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {f.PhotoUrl ? <img src={f.PhotoUrl} alt={f.Name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ fontSize: '18px', opacity: 0.4 }}>👤</span>}
                        </div>
                      </td>
                      <td style={{ ...tdStyle, fontWeight: 600 }}>{f.Name}</td>
                      <td style={{ ...tdStyle, fontSize: '12px', color: 'var(--muted)' }}>{f.Designation}</td>
                      <td style={{ ...tdStyle, fontSize: '12px', color: 'var(--muted)' }}>{f.Qualification}</td>
                      <td style={{ ...tdStyle, textAlign: 'right' }}><DeleteBtn onDelete={() => del(globalIndex)} /></td>
                    </tr>
                  )
                })}
              </Table>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
