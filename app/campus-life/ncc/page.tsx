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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Campus Life → NCC</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>National Cadet Corps (NCC)</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>The National Cadet Corps (NCC) unit at GCE Keonjhar has been a cornerstone of character-building and discipline for students since the college's early years. The unit trains cadets in military discipline, leadership, and community service.</p>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>About the Unit</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Army Wing NCC unit affiliated to the Odisha Directorate.</li>
          <li>Open to students of all departments and years.</li>
          <li>Weekly parades and drill sessions on campus.</li>
          <li>Annual Training Camps (ATCs) at designated NCC centres.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Benefits of Joining NCC</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Priority in government job recruitment (NCC Special Entry).</li>
          <li>Bonus marks in university examinations for certified cadets.</li>
          <li>National and state-level camps, Republic Day parade opportunities.</li>
          <li>Leadership, teamwork, and physical fitness training.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>How to Join</h2>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>Enrolment is done at the beginning of each academic year. Interested students should contact the NCC Officer at the college. No prior military experience is required.</p>
      </div>
      <Footer />
    </div>
  )
}
