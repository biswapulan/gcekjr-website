import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const officers = [
  { role: 'Public Information Officer (PIO)', name: 'Administrative Officer', dept: 'Establishment Section', email: 'pio@gcekjr.ac.in', phone: '06766-255002' },
  { role: 'Assistant Public Information Officer (APIO)', name: 'Office Superintendent', dept: 'Administration', email: 'apio@gcekjr.ac.in', phone: '06766-255002' },
  { role: 'Appellate Authority', name: 'Principal', dept: 'Principal\'s Office', email: 'principal@gcekjr.ac.in', phone: '06766-255002' },
]

export default function RTIPage() {
  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → RTI</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Right to Information (RTI)</h1>
      </div>

      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>

        {/* About RTI */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>About RTI Act, 2005</h2>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
        </div>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '32px' }}>
          The Right to Information Act, 2005 empowers every citizen of India to request information from public authorities. Government College of Engineering, Keonjhar, being a public institution under the Government of Odisha, is bound by the provisions of the RTI Act. The college is committed to proactive disclosure and timely response to all RTI applications.
        </p>

        {/* RTI Officers */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>RTI Officers</h2>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', marginBottom: '32px' }}>
          {officers.map((o, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '18px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--red)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '4px' }}>{o.role}</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{o.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{o.dept}</div>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                <div>📞 {o.phone}</div>
                <div style={{ marginTop: '4px' }}>✉ <a href={`mailto:${o.email}`} style={{ color: 'var(--blue-mid)' }}>{o.email}</a></div>
              </div>
            </div>
          ))}
        </div>

        {/* How to file */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>How to File an RTI Application</h2>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', marginBottom: '32px' }}>
          {[
            ['01', 'Online', 'File online through the RTI Online Portal at rtionline.gov.in using your registered account.'],
            ['02', 'By Post / In Person', 'Send a written application addressed to the PIO at GCE Keonjhar, Jamunalia, Old Town, Keonjhar – 758002, Odisha.'],
            ['03', 'Application Fee', '₹10 per application (Indian Post Order / Demand Draft / online payment). BPL applicants are exempted.'],
            ['04', 'Response Time', 'Response within 30 days of receipt. For life/liberty matters, within 48 hours.'],
            ['05', 'First Appeal', 'If unsatisfied, file a first appeal to the Appellate Authority within 30 days of receiving the response.'],
          ].map(([num, step, desc]) => (
            <div key={num} style={{ background: 'var(--white)', padding: '14px 20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--blue)', color: 'white', fontFamily: 'Source Serif 4, serif', fontSize: '14px', fontWeight: 600, width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{num}</div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>{step}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Proactive Disclosure */}
        <div style={{ background: 'var(--blue-light)', border: '1px solid var(--border)', borderLeft: '4px solid var(--blue)', padding: '18px 20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8 }}>
          <strong style={{ color: 'var(--blue)' }}>Proactive Disclosure (Section 4):</strong> As per Section 4 of the RTI Act, GCE Keonjhar proactively discloses information regarding its organisational structure, functions, powers, duties, decision-making processes, norms, rules, and documents. For detailed disclosures, contact the PIO or visit the college administration office.
        </div>
      </div>

      <Footer />
    </div>
  )
}
