import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const programmes = [
  { code: 'MnE', name: 'Mining Engineering', seats: 60 },
  { code: 'CE', name: 'Civil Engineering', seats: 60 },
  { code: 'ME', name: 'Mechanical Engineering', seats: 60 },
  { code: 'EE', name: 'Electrical Engineering', seats: 60 },
  { code: 'CSE', name: 'Computer Science & Engg.', seats: 60 },
  { code: 'MME', name: 'Metallurgical & Materials Engg.', seats: 30 },
  { code: 'MiE', name: 'Mineral Engineering', seats: 30 },
]

const timeline = [
  { phase: 'OJEE Registration', period: 'Jan – Mar 2026', desc: 'Online registration on the OJEE portal. Fill form, upload documents, pay fee.' },
  { phase: 'OJEE Exam', period: 'Apr 2026', desc: 'Written entrance examination at designated centres across Odisha.' },
  { phase: 'Result & Rank Card', period: 'May 2026', desc: 'Results published on OJEE website. Download rank card for counselling.' },
  { phase: 'Online Counselling', period: 'Jun – Jul 2026', desc: 'Choice filling, locking, seat allotment. Multiple rounds including spot round.' },
  { phase: 'Document Verification', period: 'Jul 2026', desc: 'Bring original documents to the college on the reporting date.' },
  { phase: 'Classes Begin', period: 'Aug 2026', desc: 'Orientation programme followed by commencement of first semester classes.' },
]

export default function AdmissionPage() {
  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Admission</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>UG Admission 2026–27</h1>
      </div>

      {/* Alert Banner */}
      <div style={{ background: 'var(--red)', padding: '12px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '13px', color: 'white', fontWeight: 500 }}>🔔 Admissions open for 2026–27 batch via OJEE Portal</span>
        <a href="https://ojee.nic.in" target="_blank" rel="noopener noreferrer"
          style={{ background: 'white', color: 'var(--red)', fontSize: '12px', fontWeight: 600, padding: '6px 16px', textDecoration: 'none' }}>
          Apply Now →
        </a>
      </div>

      <div className="page-wrap">

        {/* Quick nav */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)', marginBottom: '48px' }}>
          {[
            { label: 'Scholarship', href: '/admission/scholarship', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            { label: 'Anti-Ragging Cell', href: '/admission/anti-ragging', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
            { label: 'AICTE Guidelines', href: '/admission/aicte-guidelines', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
            { label: 'OJEE Portal', href: 'https://ojee.nic.in', icon: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' },
          ].map((item, i) => (
            <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{ background: 'var(--white)', padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none', gap: '10px' }}>
              <div style={{ width: '44px', height: '44px', background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="1.8"><path d={item.icon} /></svg>
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>{item.label}</div>
            </a>
          ))}
        </div>

        {/* Eligibility */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>Eligibility Criteria</h2>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
        </div>
        <div style={{ border: '1px solid var(--border)', background: 'var(--off)', padding: '20px 24px', marginBottom: '36px' }}>
          {[
            ['Qualification', 'Passed 10+2 or equivalent with Physics, Chemistry, and Mathematics (PCM)'],
            ['Minimum Marks', '45% aggregate in PCM (40% for SC/ST candidates)'],
            ['Entrance Exam', 'Valid OJEE rank or JEE Main score'],
            ['Age Limit', 'No upper age limit for B.Tech admissions'],
            ['Lateral Entry', '3-year Diploma holders can apply for direct 2nd year via OJEE Lateral Entry'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', gap: '16px', padding: '10px 0', borderBottom: '1px dashed var(--border)', fontSize: '13px' }}>
              <span style={{ color: 'var(--muted)', minWidth: '130px', flexShrink: 0 }}>{k}</span>
              <span style={{ color: 'var(--text)' }}>{v}</span>
            </div>
          ))}
        </div>

        {/* Programmes & Seats */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>Programmes & Intake</h2>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', marginBottom: '36px' }}>
          {programmes.map((p, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'var(--blue)', color: 'white', fontSize: '11px', fontWeight: 700, width: '48px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{p.code}</div>
              <div style={{ flex: 1, fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>{p.name}</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Intake: <strong style={{ color: 'var(--text)' }}>{p.seats} seats</strong></div>
            </div>
          ))}
        </div>

        {/* Admission Timeline */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>Admission Timeline 2026–27</h2>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)', marginBottom: '36px' }}>
          {timeline.map((t, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '18px 16px' }}>
              <div style={{ background: 'var(--blue)', color: 'white', fontSize: '10px', fontWeight: 600, padding: '3px 10px', display: 'inline-block', marginBottom: '8px' }}>{t.period}</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{t.phase}</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7 }}>{t.desc}</div>
            </div>
          ))}
        </div>

        {/* Fee Structure */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>Fee Structure (Approx.)</h2>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', marginBottom: '36px' }}>
          {[
            ['Tuition Fee', '₹30,000 per year', 'As per SDTE Odisha norms'],
            ['Development Fee', '₹5,000 per year', 'One-time per academic year'],
            ['Hostel Fee', '₹18,000 per year', 'Includes mess charges (approx.)'],
            ['Exam Fee', 'As per BPUT', 'Payable each semester'],
          ].map(([item, amount, note]) => (
            <div key={item} style={{ background: 'var(--white)', padding: '12px 20px', display: 'flex', alignItems: 'center' }}>
              <span style={{ flex: 1, fontSize: '13px', color: 'var(--text)' }}>{item}</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--blue)', marginRight: '20px' }}>{amount}</span>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{note}</span>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--blue)', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', marginBottom: '4px' }}>Apply via OJEE 2026</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Visit the official OJEE portal to register and apply</div>
          </div>
          <a href="https://ojee.nic.in" target="_blank" rel="noopener noreferrer"
            style={{ background: 'white', color: 'var(--blue)', fontSize: '12px', fontWeight: 600, padding: '10px 20px', textDecoration: 'none' }}>
            Go to OJEE →
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
