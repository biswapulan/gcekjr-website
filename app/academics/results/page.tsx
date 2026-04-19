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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Academics → Results</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Semester Results</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ background: 'var(--blue-light)', border: '1px solid var(--border)', borderLeft: '4px solid var(--blue)', padding: '16px 20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8 }}>
          This section will be updated with the latest Semester Results. For now, please visit <a href="https://bput.ac.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-mid)', fontWeight: 600 }}>BPUT Official Website</a> or contact your department HOD.
        </div>
      </div>
      <Footer />
    </div>
  )
}
