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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → About → Mission & Vision</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Mission & Vision</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Our Vision</h2>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>To be a centre of excellence in technical education and research, nurturing competent, ethical, and innovative engineers who contribute meaningfully to the development of society and the nation.</p>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Our Mission</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>To provide quality technical education through well-structured curricula, experienced faculty, and modern infrastructure.</li>
          <li>To foster a culture of research, innovation, and entrepreneurship among students and staff.</li>
          <li>To produce graduates who are technically proficient, socially responsible, and globally competitive.</li>
          <li>To strengthen industry-institute interaction for enhancing the employability of graduates.</li>
          <li>To promote inclusive education and equal opportunity for all students.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Core Values</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li><strong>Integrity</strong> — Upholding the highest standards of honesty and ethics.</li>
          <li><strong>Excellence</strong> — Striving for quality in all academic and administrative endeavours.</li>
          <li><strong>Innovation</strong> — Encouraging creative thinking and problem-solving.</li>
          <li><strong>Inclusivity</strong> — Ensuring equal access and opportunity for every student.</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}
