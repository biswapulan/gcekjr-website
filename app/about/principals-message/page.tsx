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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → About → Principal's Message</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Principal's Message</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>Welcome to Government College of Engineering, Keonjhar — one of North Odisha's premier technical institutions, dedicated to shaping competent and responsible engineers since 1995.</p>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>Our mission is to provide quality technical education that is accessible, rigorous, and aligned with the needs of industry and society. With seven undergraduate programmes, experienced faculty, and modern laboratories, GCE Keonjhar equips students not only with technical knowledge but also with the values and leadership qualities to serve the nation.</p>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>We are committed to fostering innovation, research, and community engagement. I encourage every student to make the most of the opportunities here — academically, professionally, and personally. The doors of this institution are always open for dialogue, and I look forward to working together to build a brighter future.</p>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }} style={{ fontStyle: 'italic', color: 'var(--blue)', fontWeight: 500 }}>— Principal, Government College of Engineering, Keonjhar</p>
      </div>
      <Footer />
    </div>
  )
}
