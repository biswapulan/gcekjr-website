import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CEDeptPage() {
  const labs = ['Structural Engineering Lab', 'Geotechnical Lab', 'Transportation Lab', 'Fluid Mechanics Lab', 'Surveying Lab', 'Concrete Technology Lab']
  const recruiters = ['L&T', 'RITES', 'NHPC', 'NHAI', 'NMDC', 'NALCO', 'Govt. PWD', 'CPWD']

  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>
          Home → Departments → Civil Engineering
        </p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Civil Engineering</h1>
      </div>

      {/* Dept Info Strip */}
      <div className="dept-info-strip">
        <span><strong style={{ color: 'var(--text)' }}>Code:</strong> CE</span>
        <span><strong style={{ color: 'var(--text)' }}>Established:</strong> 1997</span>
        <span><strong style={{ color: 'var(--text)' }}>Intake:</strong> 60 seats/year</span>
        <span><strong style={{ color: 'var(--text)' }}>HOD:</strong> Prof. Sasmita Kumari Sahu</span>
        <span><strong style={{ color: 'var(--text)' }}>Email:</strong> <a href="mailto:hod.ce@gcekjr.ac.in" style={{ color: 'var(--blue-mid)' }}>hod.ce@gcekjr.ac.in</a></span>
      </div>

      <div className="page-wrap">

        {/* About */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>About the Department</h2>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
        </div>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '36px' }}>The Civil Engineering department offers a comprehensive curriculum covering structural analysis, concrete technology, geotechnical engineering, transportation engineering, hydraulics, water supply, and environmental engineering. Students are trained on AutoCAD and structural design software. The department maintains strong industry connections with government infrastructure agencies and private construction firms.</p>

        {/* Labs & Recruiters grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '36px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>Laboratories</h2>
              <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
              {labs.map((lab: string, i: number) => (
                <div key={i} style={{ background: 'var(--white)', padding: '12px 16px', fontSize: '13px', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--blue)', fontSize: '8px' }}>▶</span> {lab}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>Key Recruiters</h2>
              <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {recruiters.map((r: string, i: number) => (
                <span key={i} style={{ background: 'var(--blue-light)', border: '1px solid var(--border)', color: 'var(--blue)', fontSize: '12px', fontWeight: 600, padding: '8px 14px' }}>{r}</span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'var(--blue)', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', marginBottom: '4px' }}>View All Departments</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Explore other programmes offered at GCE Keonjhar</div>
          </div>
          <Link href="/departments" style={{ background: 'white', color: 'var(--blue)', fontSize: '12px', fontWeight: 600, padding: '10px 20px', textDecoration: 'none' }}>All Departments →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
