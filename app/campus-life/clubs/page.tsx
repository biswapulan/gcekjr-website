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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Campus Life → Clubs & Societies</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Clubs & Societies</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>Student clubs and societies at GCE Keonjhar are the heartbeat of campus life. They provide platforms for students to explore interests beyond academics, develop leadership skills, and build lasting friendships.</p>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Technical Clubs</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li><strong>Coding Club</strong> — Competitive programming, hackathons, and open-source projects.</li>
          <li><strong>Robotics Club</strong> — Hands-on robotics, automation, and participation in national competitions.</li>
          <li><strong>Mining & Mineral Society</strong> — Industry visits, technical seminars, and field studies.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Cultural & Literary</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li><strong>Dramatics Club</strong> — Theatre, street plays, and cultural performances.</li>
          <li><strong>Music Club</strong> — Classical, folk, and modern music performances.</li>
          <li><strong>Literary Society</strong> — Debates, elocution, creative writing, and quizzes.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Social & Sports</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li><strong>NSS Unit</strong> — Community service, blood donation camps, and rural outreach.</li>
          <li><strong>Sports Committee</strong> — Organises inter-college and intra-college sports events.</li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>For membership or to start a new club, contact the Student Welfare Dean's office.</p>
      </div>
      <Footer />
    </div>
  )
}
