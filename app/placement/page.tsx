import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const stats = [
  { num: '85%+', label: 'Overall Placement Rate', sub: '2024–25 Batch' },
  { num: '50+', label: 'Recruiting Companies', sub: 'Active Partners' },
  { num: '₹6.5L', label: 'Average CTC', sub: '2024–25' },
  { num: '₹18L', label: 'Highest Package', sub: '2024–25' },
]

const recruiters = [
  { name: 'Vedanta Resources', sector: 'Mining / Metals' },
  { name: 'IMFA', sector: 'Ferro Alloys' },
  { name: 'Tata Steel', sector: 'Steel / Mining' },
  { name: 'Aditya Birla Group', sector: 'Conglomerate' },
  { name: 'Monnet Ispat', sector: 'Steel / Power' },
  { name: 'Thriveni Earthmovers', sector: 'Mining' },
  { name: 'ACC Limited', sector: 'Cement' },
  { name: 'NMDC', sector: 'Mining (PSU)' },
  { name: 'NALCO', sector: 'Aluminium (PSU)' },
  { name: 'JSPL', sector: 'Steel / Power' },
  { name: 'L&T', sector: 'Engineering / Infra' },
  { name: 'Infosys', sector: 'IT Services' },
  { name: 'TCS', sector: 'IT Services' },
  { name: 'BHEL', sector: 'Heavy Engineering' },
  { name: 'GRIDCO', sector: 'Power (PSU)' },
  { name: 'Coal India Ltd', sector: 'Mining (PSU)' },
]

const process = [
  { step: '01', title: 'Company Registration', desc: 'Companies register with the Placement Cell via email or the online portal, providing job profiles, CTC, and eligibility criteria.' },
  { step: '02', title: 'Student Registration', desc: 'Eligible students register for placement by submitting their resume and academic records to the Placement Cell.' },
  { step: '03', title: 'Pre-Placement Talk (PPT)', desc: 'Companies conduct a PPT on campus to introduce their organisation, work culture, and the job profile on offer.' },
  { step: '04', title: 'Aptitude / Technical Test', desc: 'An online or written screening test covering aptitude, core domain knowledge, and/or coding (for IT companies).' },
  { step: '05', title: 'Group Discussion / PI', desc: 'Shortlisted candidates go through Group Discussions and Technical/HR Personal Interviews on campus.' },
  { step: '06', title: 'Offer Letter', desc: 'Selected students receive their offer letters. The Placement Cell coordinates with both parties for smooth onboarding.' },
]

const tpoTeam = [
  { name: 'Dr. Priya Ranjan Sahu', role: 'Training & Placement Officer', email: 'tpo@gcekjr.ac.in' },
  { name: 'Er. Soumya Ranjan Das', role: 'Placement Coordinator', email: 'placement@gcekjr.ac.in' },
]

function SectionHeading({ title }: { title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
      <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>
        {title}
      </h2>
      <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
    </div>
  )
}

export default function PlacementPage() {
  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />

      {/* Banner */}
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>
          Home → Placement
        </p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>
          Training & Placement Cell
        </h1>
      </div>

      {/* Stats Strip */}
      <div className="placement-stats">
        {stats.map((s, i) => (
          <div key={i} className="placement-stat-item">
            <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '26px', fontWeight: 600, color: 'var(--blue)' }}>{s.num}</div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)', marginTop: '2px' }}>{s.label}</div>
            <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="page-wrap">

        {/* About */}
        <SectionHeading title="About the Placement Cell" />
        <div className="grid-aside" style={{ marginBottom: '48px' }}>
          <div>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '14px' }}>
              The <strong style={{ color: 'var(--text)' }}>Training & Placement Cell</strong> of GCE Keonjhar serves as the bridge between the institution and industry. The cell facilitates campus recruitment, internship placements, pre-placement training, and industry-academia interactions throughout the academic year.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '14px' }}>
              In addition to recruitment, the Placement Cell organises personality development workshops, communication skills training, aptitude classes, mock interviews, and group discussion practice sessions to prepare students for the competitive job market.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9 }}>
              Companies interested in recruiting from GCE Keonjhar may reach out to the Training & Placement Officer. The college welcomes both PSUs and private sector organisations across engineering, IT, manufacturing, and core industry domains.
            </p>
          </div>
          <div style={{ background: 'var(--off)', border: '1px solid var(--border)', padding: '20px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--blue)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid var(--border)' }}>
              TPO Contact
            </div>
            {tpoTeam.map((t, i) => (
              <div key={i} style={{ marginBottom: i < tpoTeam.length - 1 ? '14px' : 0 }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>{t.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '1px' }}>{t.role}</div>
                <a href={`mailto:${t.email}`} style={{ fontSize: '11px', color: 'var(--blue-mid)', textDecoration: 'none', marginTop: '2px', display: 'block' }}>{t.email}</a>
              </div>
            ))}
            <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--border)', fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--text)' }}>Phone:</strong> 06766-255002<br />
              <strong style={{ color: 'var(--text)' }}>Placement Season:</strong> Oct – Mar
            </div>
          </div>
        </div>

        {/* Placement Process */}
        <SectionHeading title="Placement Process" />
        <div className="grid-3" style={{ marginBottom: '48px' }}>
          {process.map((p) => (
            <div key={p.step} style={{ background: 'var(--white)', padding: '20px 18px' }}>
              <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '28px', fontWeight: 600, color: 'var(--border)', marginBottom: '8px', lineHeight: 1 }}>{p.step}</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--blue)', marginBottom: '6px' }}>{p.title}</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Training Programs */}
        <SectionHeading title="Training & Skill Development" />
        <div className="grid-2" style={{ marginBottom: '48px' }}>
          {[
            { title: 'Aptitude Training', desc: 'Regular aptitude sessions covering quantitative ability, logical reasoning, and verbal ability conducted from Semester V onwards.' },
            { title: 'Communication Skills', desc: 'English communication, presentation skills, report writing, and email etiquette workshops for all students.' },
            { title: 'Technical Training', desc: 'Core domain technical training by industry experts including AutoCAD, MATLAB, Python, and PLC programming.' },
            { title: 'Soft Skills & Interview Prep', desc: 'Mock interviews, group discussion practice, body language training, and HR round preparation sessions.' },
          ].map((t, i) => (
            <div key={i} style={{ border: '1px solid var(--border)', padding: '18px', background: 'var(--off)' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--blue)', marginBottom: '6px' }}>{t.title}</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7 }}>{t.desc}</div>
            </div>
          ))}
        </div>

        {/* Recruiters */}
        <SectionHeading title="Our Recruiters" />
        <div className="grid-4" style={{ marginBottom: '48px' }}>
          {recruiters.map((r, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>{r.name}</div>
              <div style={{ fontSize: '10px', color: 'var(--muted)', background: 'var(--blue-light)', padding: '2px 8px', display: 'inline-block', width: 'fit-content', border: '1px solid var(--border)' }}>{r.sector}</div>
            </div>
          ))}
        </div>

        {/* CTA for companies */}
        <div className="cta-banner" style={{ background: 'var(--blue)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '6px' }}>Partner with GCE Keonjhar</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', maxWidth: '520px', lineHeight: 1.7 }}>
              We invite organisations to collaborate with our Placement Cell for campus recruitment drives, internship programmes, and industry-institute partnerships.
            </div>
          </div>
          <a href="mailto:tpo@gcekjr.ac.in"
            style={{ background: 'white', color: 'var(--blue)', fontSize: '12px', fontWeight: 600, padding: '12px 24px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
            Contact TPO →
          </a>
        </div>

      </div>

      <Footer />
    </div>
  )
}
