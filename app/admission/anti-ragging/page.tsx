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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Admission → Anti-Ragging Cell</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Anti-Ragging Cell</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{background:"var(--red)",padding:"18px 24px",marginBottom:"24px"}}>
    <div style={{fontSize:"14px",fontWeight:600,color:"white",marginBottom:"4px"}}>Ragging is a Criminal Offence</div>
    <div style={{fontSize:"12px",color:"rgba(255,255,255,0.8)"}}>UGC Regulations and Supreme Court directives make ragging punishable by expulsion, FIR, and imprisonment. National Helpline: <strong>1800-180-5522</strong></div>
  </div>
  <p style={{fontSize:"13px",color:"var(--muted)",lineHeight:1.9,marginBottom:"20px"}}>The Anti-Ragging Cell of GCE Keonjhar is constituted as per UGC regulations and AICTE guidelines. The cell is responsible for preventing ragging in any form on campus, in hostels, and in the surrounding areas. All complaints are treated with strict confidentiality.</p>
  <div style={{border:"1px solid var(--border)",padding:"20px",background:"var(--off)"}}>
    <div style={{fontSize:"13px",fontWeight:600,color:"var(--blue)",marginBottom:"12px"}}>Anti-Ragging Committee Members</div>
    {[["Dean, Student Welfare","Chairperson"],["Hostel Warden","Member"],["Senior Faculty Representative","Member"],["Student Representative","Member"],["Local Police Liaison","Member"]].map(([role,pos],i)=>(
      <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:"1px dashed var(--border)",fontSize:"12px"}}>
        <span style={{color:"var(--text)"}}>{role}</span>
        <span style={{color:"var(--muted)"}}>{pos}</span>
      </div>
    ))}
  </div>
      </div>
      <Footer />
    </div>
  )
}
