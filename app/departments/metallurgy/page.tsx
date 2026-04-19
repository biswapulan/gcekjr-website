import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function MMEDeptPage() {
  const labs = ['Metallography Lab', 'Heat Treatment Lab', 'Foundry Lab', 'Material Testing Lab', 'XRD & SEM Lab']
  const recruiters = ['TISCO', 'SAIL', 'RINL', 'IMFA', 'Vedanta', 'NALCO', 'JSPL', 'Hindalco']

  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>
          Home → Departments → Metallurgical & Materials Engineering
        </p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Metallurgical & Materials Engineering</h1>
      </div>

      {/* Dept Info Strip */}
      <div className="dept-info-strip">
        <span><strong style={{ color: 'var(--text)' }}>Code:</strong> MME</span>
        <span><strong style={{ color: 'var(--text)' }}>Established:</strong> 2000</span>
        <span><strong style={{ color: 'var(--text)' }}>Intake:</strong> 30 seats/year</span>
        <span><strong style={{ color: 'var(--text)' }}>HOD:</strong> Dr. Sanjay Kumar Sahu</span>
        <span><strong style={{ color: 'var(--text)' }}>Email:</strong> <a href="mailto:hod.mme@gcekjr.ac.in" style={{ color: 'var(--blue-mid)' }}>hod.mme@gcekjr.ac.in</a></span>
      </div>

      <div className="page-wrap">

        {/* About */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>About the Department</h2>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
        </div>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '36px' }}>This department focuses on the science of materials — their structure, properties, processing, and performance. The curriculum covers physical metallurgy, iron and steel making, foundry technology, corrosion, heat treatment, and material characterisation techniques including XRD and SEM analysis. Graduates find excellent opportunities in steel plants, PSUs, and materials research organisations.</p>

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
