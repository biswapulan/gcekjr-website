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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → About → Board of Governors</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Board of Governors</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>The Board of Governors is the apex governing body of Government College of Engineering, Keonjhar. It is constituted in accordance with the guidelines of the All India Council for Technical Education (AICTE) and the Government of Odisha.</p>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Composition</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Chairperson — Nominated by the Government of Odisha</li>
          <li>Principal — Member Secretary (ex-officio)</li>
          <li>Representatives from BPUT and AICTE</li>
          <li>Industry nominees from relevant sectors</li>
          <li>Faculty representatives</li>
          <li>State government nominees</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Functions</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Overseeing the overall management and administration of the institution.</li>
          <li>Approving the annual budget and financial statements.</li>
          <li>Reviewing academic performance and institutional development plans.</li>
          <li>Ensuring compliance with AICTE norms and government regulations.</li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>For official correspondence regarding the Board, contact the Principal's office at <strong>principal@gcekjr.ac.in</strong>.</p>
      </div>
      <Footer />
    </div>
  )
}
