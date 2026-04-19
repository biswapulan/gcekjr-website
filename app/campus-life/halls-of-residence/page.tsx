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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Campus Life → Halls of Residence</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Halls of Residence</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>GCE Keonjhar provides on-campus residential facilities for both boys and girls, ensuring a safe, comfortable, and academically conducive environment for students who come from outside Keonjhar.</p>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Boys' Hostel</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Located within the campus premises with 24-hour security.</li>
          <li>Furnished rooms with study tables, fans, and adequate lighting.</li>
          <li>Common room with television and indoor games.</li>
          <li>Mess facility with nutritious meals at subsidised rates.</li>
          <li>Wi-Fi connectivity in common areas.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Girls' Hostel</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Separate secured hostel with female warden and round-the-clock security.</li>
          <li>Fully furnished rooms with attached/shared bathrooms.</li>
          <li>Dedicated mess with vegetarian and non-vegetarian options.</li>
          <li>Reading room and recreation facilities.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Admission to Hostel</h2>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>Hostel seats are allotted on a first-come, first-served basis at the time of college admission. Contact the hostel warden or the college office for application forms and fee details.</p>
      </div>
      <Footer />
    </div>
  )
}
