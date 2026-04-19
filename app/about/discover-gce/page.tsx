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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → About → Discover GCE Keonjhar</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Discover GCE Keonjhar</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>Established in 1995, Government College of Engineering, Keonjhar is the premier technical institution of North Odisha. Located at Jamunalia, Old Town, Keonjhar, the college is affiliated to Biju Patnaik University of Technology (BPUT) and approved by the All India Council for Technical Education (AICTE), New Delhi.</p>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>At a Glance</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li><strong>Established:</strong> 1995</li>
          <li><strong>Affiliation:</strong> Biju Patnaik University of Technology (BPUT), Rourkela</li>
          <li><strong>Approval:</strong> AICTE, New Delhi</li>
          <li><strong>Accreditation:</strong> NAAC Accredited</li>
          <li><strong>Programmes:</strong> 7 B.Tech programmes across 7 departments</li>
          <li><strong>Campus:</strong> Sprawling green campus in Keonjhar town</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Why GCE Keonjhar?</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Government institution with affordable fee structure.</li>
          <li>Strong industry connections in mining, steel, and energy sectors.</li>
          <li>85%+ placement rate with packages up to ₹18 LPA.</li>
          <li>Experienced faculty with industry and research backgrounds.</li>
          <li>Active student clubs, NCC unit, and sports facilities.</li>
          <li>Hostels for boys and girls within the campus.</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}
