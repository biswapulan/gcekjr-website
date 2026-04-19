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
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Extension Activities → Conferences / Seminars / Workshops</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Conferences, Seminars & Workshops</h1>
      </div>
      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>GCE Keonjhar regularly organises and hosts conferences, seminars, and workshops to bridge the gap between academic knowledge and industry practice. These events provide students and faculty with exposure to the latest developments in engineering and technology.</p>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Recent Activities</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 2 }}>
          <li>National Conference on Advances in Mining Technology — in collaboration with industry partners.</li>
          <li>Workshop on Machine Learning and Data Analytics — conducted by external industry experts.</li>
          <li>Seminar on Sustainable Infrastructure — featuring AICTE-sponsored speakers.</li>
          <li>Guest lectures by NALCO, NMDC, and Tata Steel professionals.</li>
        </ul>
        <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'var(--blue)', marginBottom: '8px', marginTop: '24px' }}>Organising an Event</h2>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>Faculty members and student clubs wishing to organise a seminar or workshop should submit a proposal to the Principal's office at least 30 days in advance. Funding support may be available through AICTE's ATAL scheme and TEQIP.</p>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '16px' }}>For participation or collaboration enquiries, contact <strong>establishment@gcekjr.ac.in</strong>.</p>
      </div>
      <Footer />
    </div>
  )
}
