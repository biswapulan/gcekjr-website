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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Campus Life → Facilities</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Campus Facilities</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>GCE Keonjhar is equipped with a range of academic and co-curricular facilities to support holistic student development.</p>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Academic Facilities</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li><strong>Central Library</strong> — Over 15,000 volumes, journals, e-resources, and a dedicated reading hall.</li>
          <li><strong>Computer Centre</strong> — High-speed internet, workstations, and 24-hour access for students.</li>
          <li><strong>Laboratories</strong> — Well-equipped labs for all seven departments, regularly updated with modern instruments.</li>
          <li><strong>Smart Classrooms</strong> — Projector-equipped classrooms for interactive learning.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Sports & Recreation</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Cricket ground, football field, and volleyball courts.</li>
          <li>Basketball and badminton courts.</li>
          <li>Indoor games room at the Student Activity Center.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Other Facilities</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Boys' and Girls' Hostels within campus.</li>
          <li>College canteen with affordable meals.</li>
          <li>Medical room with a visiting doctor.</li>
          <li>Bank ATM and stationery shop on campus.</li>
          <li>Backup power supply (generator) for uninterrupted classes.</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}
