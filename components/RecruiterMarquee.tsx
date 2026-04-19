import Link from 'next/link'

const row1 = ['Vedanta', 'IMFA', 'Tata Steel', 'Aditya Birla', 'Monnet', 'Thriveni', 'ACC Limited', 'NMDC', 'NALCO', 'JSPL']
const row2 = ['L&T', 'Infosys', 'TCS', 'BHEL', 'SAIL', 'Coal India', 'GRIDCO', 'NTPC', 'Wipro', 'HCL Technologies']

export default function RecruiterMarquee() {
  return (
    <section className="recruiters-section">
      <div className="recruiters-header">
        <div>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>
            Training &amp; Placement
          </p>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '22px', fontWeight: 600, color: 'white' }}>
            Our Recruiters
          </h2>
        </div>
        <Link href="/placement" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
          View Placement Cell →
        </Link>
      </div>

      <div className="recruiters-marquee-wrap">
        {/* Row 1 — scrolls left */}
        <div className="recruiters-row">
          <div className="recruiters-row-inner">
            {[...row1, ...row1].map((r, i) => (
              <div key={i} className="recruiter-tag">{r}</div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="recruiters-row" style={{ marginTop: '2px' }}>
          <div className="recruiters-row-inner reverse">
            {[...row2, ...row2].map((r, i) => (
              <div key={i} className="recruiter-tag">{r}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
