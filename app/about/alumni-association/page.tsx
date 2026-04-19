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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → About → Alumni Association</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Alumni Association</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>The GCE Keonjhar Alumni Association connects graduates across all departments and batches, fostering a lifelong bond with the institution and with each other. Our alumni are spread across leading industries, public sector undertakings, and academic institutions in India and abroad.</p>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>What We Do</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Organise annual alumni meets and networking events on campus.</li>
          <li>Facilitate mentorship programmes connecting current students with industry professionals.</li>
          <li>Support placement drives and industry interactions.</li>
          <li>Contribute to infrastructure development and scholarships through alumni donations.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Get Involved</h2>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>All graduates of GCE Keonjhar are automatically members of the Alumni Association. To update your details, participate in events, or offer mentorship, please contact the college office at <strong>establishment@gcekjr.ac.in</strong>.</p>
      </div>
      <Footer />
    </div>
  )
}
