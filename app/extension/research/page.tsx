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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Extension Activities → Research Works</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Research Works</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>Research and innovation are actively encouraged at GCE Keonjhar. Faculty members and students regularly engage in applied research relevant to the mining, metallurgy, civil, and electrical engineering sectors that are prominent in the region.</p>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Research Areas</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Mining safety and rock mechanics.</li>
          <li>Mineral processing and extractive metallurgy.</li>
          <li>Structural engineering and sustainable construction materials.</li>
          <li>Renewable energy systems and power electronics.</li>
          <li>Machine learning applications in industrial processes.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Funded Projects</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Projects funded under AICTE Research Promotion Scheme (RPS).</li>
          <li>Collaborative research with CSIR-IMMT, Bhubaneswar.</li>
          <li>Industry-sponsored projects with IMFA and NALCO.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Student Research</h2>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>Final year students undertake research-based projects under faculty supervision. Outstanding projects are nominated for the BPUT Project Competition and national-level student paper contests. Students with research interests may contact department heads for guidance on pursuing PhD programmes after graduation.</p>
      </div>
      <Footer />
    </div>
  )
}
