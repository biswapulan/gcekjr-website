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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Extension Activities → Internships</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Internships</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>Internships are an integral part of the engineering curriculum at GCE Keonjhar. Students are encouraged to undertake internships during summer vacations to gain hands-on industry exposure and strengthen their employability.</p>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Internship Opportunities</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Core sector companies: Vedanta, IMFA, NMDC, SAIL, Coal India, NALCO.</li>
          <li>IT sector: TCS, Infosys, Wipro, HCL Technologies.</li>
          <li>Government bodies: GRIDCO, NTPC, BHEL.</li>
          <li>Research institutions: CSIR, NIT, IIT summer research programmes.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Process</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>Students may apply directly through company portals or via the Placement Cell.</li>
          <li>The Training & Placement Cell facilitates company tie-ups for bulk internship placements.</li>
          <li>Students must submit an internship completion certificate and report to the department at the end of the internship.</li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>For internship opportunities and letters of recommendation, contact the Training & Placement Officer at <strong>placement@gcekjr.ac.in</strong>.</p>
      </div>
      <Footer />
    </div>
  )
}
