import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Extension Activities → Center for Competitive Exams</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Center for Competitive Exams</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>The Center for Competitive Examinations at GCE Keonjhar prepares students for national-level competitive examinations including GATE, ESE (IES), PSU recruitment tests, and banking and civil service examinations.</p>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Examinations Covered</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li><strong>GATE</strong> — Graduate Aptitude Test in Engineering (for M.Tech admissions and PSU jobs).</li>
          <li><strong>ESE / IES</strong> — Engineering Services Examination conducted by UPSC.</li>
          <li><strong>PSU Tests</strong> — BHEL, NTPC, ONGC, SAIL, Coal India, NMDC recruitment exams.</li>
          <li><strong>State Services</strong> — Odisha Public Service Commission technical posts.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Preparation Support</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Weekly coaching sessions by experienced faculty.</li>
          <li>Study material and previous year question banks available in the library.</li>
          <li>Mock tests and performance analysis sessions.</li>
          <li>GATE result tracking and guidance for higher studies.</li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>Students interested in enrolling should contact the center coordinator through the college office.</p>
      </div>
      <Footer />
    </div>
  )
}
