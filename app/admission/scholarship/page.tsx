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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Admission → Scholarship</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Scholarships & Financial Aid</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{fontSize:"13px",color:"var(--muted)",lineHeight:1.9,marginBottom:"20px"}}>GCE Keonjhar students are eligible for a wide range of scholarships offered by the Government of Odisha, AICTE, and other bodies. Eligible students are encouraged to apply through the respective portals before deadlines.</p>
  <div style={{display:"flex",flexDirection:"column",gap:"1px",background:"var(--border)"}}>
    {[["Post-Matric Scholarship (SC/ST/OBC)","Govt. of Odisha","Full tuition fee waiver + maintenance allowance"],["AICTE Pragati Scholarship","AICTE","For girl students — ₹30,000/year + contingency"],["AICTE Saksham Scholarship","AICTE","For PwD students — ₹30,000/year + contingency"],["Merit-cum-Means Scholarship","BPUT","CGPA above 7.5 + family income below ₹8 LPA"],["INSPIRE Scholarship","DST Govt. of India","Top 1% in Class 12 — ₹60,000/year"]].map(([name,auth,desc],i)=>(
      <div key={i} style={{background:"var(--white)",padding:"16px 20px"}}>
        <div style={{fontSize:"13px",fontWeight:600,color:"var(--text)",marginBottom:"2px"}}>{name}</div>
        <div style={{fontSize:"11px",color:"var(--blue)",fontWeight:600,marginBottom:"4px"}}>{auth}</div>
        <div style={{fontSize:"12px",color:"var(--muted)"}}>{desc}</div>
      </div>
    ))}
  </div>
      </div>
      <Footer />
    </div>
  )
}
