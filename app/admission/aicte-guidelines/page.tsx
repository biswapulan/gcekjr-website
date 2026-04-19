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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Admission → AICTE Guidelines</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>AICTE Guidelines for Anti-Ragging</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{fontSize:"13px",color:"var(--muted)",lineHeight:1.9,marginBottom:"20px"}}>AICTE has issued comprehensive guidelines for prevention and prohibition of ragging in technical institutions. All students, faculty, and staff are required to be aware of and comply with these guidelines.</p>
  <div style={{background:"var(--blue-light)",border:"1px solid var(--border)",borderLeft:"4px solid var(--blue)",padding:"16px 20px",marginBottom:"20px",fontSize:"13px",color:"var(--muted)",lineHeight:1.8}}>
    For the complete AICTE circular and guidelines, please visit the official AICTE website or download the PDF below.
  </div>
  <a href="https://www.aicte-india.org/sites/default/files/downloads/Anti-Ragging.pdf" target="_blank" rel="noopener noreferrer"
    style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"var(--blue)",color:"white",fontSize:"12px",fontWeight:600,padding:"12px 20px",textDecoration:"none"}}>
    Download AICTE Anti-Ragging Guidelines PDF →
  </a>
      </div>
      <Footer />
    </div>
  )
}
