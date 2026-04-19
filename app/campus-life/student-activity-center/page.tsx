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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Campus Life → Student Activity Center</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Student Activity Center</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>The Student Activity Center (SAC) is the hub of co-curricular and extracurricular life at GCE Keonjhar. It provides a dedicated space where students can meet, collaborate, organise events, and pursue interests beyond the classroom.</p>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Facilities at SAC</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Large auditorium for seminars, cultural events, and college functions.</li>
          <li>Club rooms for individual student organisations.</li>
          <li>Indoor games area including table tennis, chess, and carom.</li>
          <li>Notice boards and bulletin displays for student announcements.</li>
          <li>Canteen and refreshment area.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Annual Events</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li><strong>Abhiyantriki</strong> — The annual technical fest featuring paper presentations, project expos, and competitions.</li>
          <li><strong>Srijan</strong> — The cultural fest with music, dance, drama, and literary events.</li>
          <li><strong>Sports Meet</strong> — Inter-department and inter-college sports competitions.</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}
