const row1 = [
  { name: 'Vedanta',      file: 'vedanta.png' },
  { name: 'IMFA',         file: 'imfa.png' },
  { name: 'Tata Steel',   file: 'tata-steel.png' },
  { name: 'Aditya Birla', file: 'aditya-birla.png' },
  { name: 'Monnet',       file: 'monnet.jpg' },
]
const row2 = [
  { name: 'Thriveni',     file: 'thriveni.png' },
  { name: 'ACC Limited',  file: 'acc.png' },
  { name: 'JSPL',         file: 'jspl.png' },
  { name: 'Apmosys',      file: 'apmosys.png' },
  { name: 'GMDC',         file: 'gmdc.png' },
]

export default function RecruiterMarquee() {
  return (
    <section className="recruiters-section">
      <div className="recruiters-header">
        <div>
          <p style={{ fontSize: '11px', color: 'var(--red)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 700 }}>
            Training &amp; Placement
          </p>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'var(--blue)' }}>
            Our Recruiters
          </h2>
        </div>
      </div>

      <div className="recruiters-marquee-wrap">
        {/* Row 1 — scrolls left */}
        <div className="recruiters-row">
          <div className="recruiters-row-inner">
            {[...row1, ...row1].map((r, i) => (
              <div key={i} className="recruiter-logo-card">
                <img src={`/recruiters/${r.file}`} alt={r.name} className="recruiter-logo-img" />
                <div className="recruiter-logo-name">{r.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="recruiters-row" style={{ marginTop: '12px' }}>
          <div className="recruiters-row-inner reverse">
            {[...row2, ...row2].map((r, i) => (
              <div key={i} className="recruiter-logo-card">
                <img src={`/recruiters/${r.file}`} alt={r.name} className="recruiter-logo-img" />
                <div className="recruiter-logo-name">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
