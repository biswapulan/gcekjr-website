import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const milestones = [
  { year: '1962', title: 'Orissa School of Mining Engineering', desc: 'The predecessor institution established to serve the mineral-rich Keonjhar region.' },
  { year: '1995', title: 'College Established', desc: 'Government College of Engineering, Keonjhar established as a constituent college under BPUT.' },
  { year: '1997', title: 'Civil, Electrical & Mechanical', desc: 'Three new B.Tech programmes launched, expanding the academic portfolio.' },
  { year: '2002', title: 'Computer Science Added', desc: 'CSE department introduced to meet the growing demand for IT professionals.' },
  { year: '2015', title: 'NAAC Accreditation', desc: 'College receives NAAC accreditation, affirming quality standards in education.' },
  { year: '2024', title: 'Silver Jubilee Year', desc: 'Celebrating 30 years of engineering excellence in North Odisha.' },
]

const visionMission = [
  {
    label: 'Vision',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    text: 'To be a premier technical institution of North Odisha, fostering innovation, research, and holistic development to produce globally competent engineers.',
  },
  {
    label: 'Mission',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    text: 'To impart quality technical education through innovative pedagogy, industry collaboration, and value-based learning to create engineers who contribute meaningfully to society.',
  },
  {
    label: 'Core Values',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    text: 'Integrity, Excellence, Innovation, Inclusivity, and Social Responsibility — the pillars that guide every academic and administrative decision at GCE Keonjhar.',
  },
]

const leadership = [
  { name: 'Prof. Saroj Kumar Sarangi', role: 'Principal', dept: 'Administration' },
  { name: 'Dr. Rajesh Kumar Patra', role: 'Dean (Academic)', dept: 'Academics' },
  { name: 'Dr. Priya Ranjan Sahu', role: 'Dean (Student Welfare)', dept: 'Student Affairs' },
  { name: 'Er. Subhashree Mishra', role: 'Controller of Examinations', dept: 'Examinations' },
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

export default function AboutPage() {
  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />

      {/* Page Banner */}
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>
          Home → About
        </p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>
          About the Institution
        </h1>
      </div>

      <div className="page-wrap">

        {/* Overview */}
        <SectionHeading title="Overview" />
        <div className="grid-aside" style={{ marginBottom: '48px' }}>
          <div>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '14px' }}>
              <strong style={{ color: 'var(--text)' }}>Government College of Engineering, Keonjhar (GCEKJR)</strong> was established in 1995 as a constituent college of Biju Patnaik University of Technology (BPUT), Odisha. Rising from the legacy of the historic Orissa School of Mining Engineering (1962), the college is the only government institution providing engineering education in North Odisha.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '14px' }}>
              Approved by the All India Council for Technical Education (AICTE) and accredited by NAAC, the college offers seven B.Tech programmes — Mining Engineering, Civil Engineering, Mechanical Engineering, Electrical Engineering, Computer Science & Engineering, Metallurgical & Materials Engineering, and Mineral Engineering.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9 }}>
              Nestled in the mineral-rich district of Keonjhar, the institution holds a unique position at the intersection of industrial relevance and academic rigour. Its graduates are employed across leading public sector undertakings and private industries including Vedanta, IMFA, Tata Steel, NMDC, and L&T.
            </p>
          </div>
          <div style={{ background: 'var(--off)', border: '1px solid var(--border)', padding: '20px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--blue)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid var(--border)' }}>
              At a Glance
            </div>
            {[
              ['Founded', '1995'],
              ['Predecessor', 'OSME, 1962'],
              ['Affiliated to', 'BPUT, Odisha'],
              ['Approved by', 'AICTE, New Delhi'],
              ['Accreditation', 'NAAC'],
              ['UG Programmes', '7 B.Tech'],
              ['Location', 'Keonjhar, Odisha'],
              ['Campus Area', '~25 Acres'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px dashed var(--border)', fontSize: '12px' }}>
                <span style={{ color: 'var(--muted)' }}>{k}</span>
                <span style={{ color: 'var(--text)', fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Principal's Message */}
        <SectionHeading title="Principal's Message" />
        <div style={{ display: 'flex', gap: '20px', background: 'var(--off)', border: '1px solid var(--border)', padding: '24px', marginBottom: '48px' }}>
          <div style={{ width: '90px', height: '110px', background: 'var(--blue-light)', border: '1px solid var(--border)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="40" height="40" viewBox="0 0 36 36">
              <circle cx="18" cy="13" r="7" fill="#1a3a6b" opacity="0.3" />
              <path d="M4 34c0-8 28-8 28 0" fill="#1a3a6b" opacity="0.2" />
            </svg>
          </div>
          <div>
            <h3 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '15px', fontWeight: 600, color: 'var(--blue)', marginBottom: '2px' }}>Prof. Saroj Kumar Sarangi</h3>
            <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>Principal, Government College of Engineering, Keonjhar</p>
            <blockquote style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.8, borderLeft: '3px solid var(--blue)', paddingLeft: '14px', fontStyle: 'italic' }}>
              "GCE Keonjhar remains committed to nurturing technically competent, ethically strong engineers who contribute meaningfully to society and industry alike. Our institution stands on three decades of excellence, and we continue to invest in infrastructure, research, and student development to remain relevant in a rapidly evolving world. We welcome students with curiosity, ambition, and the will to make a difference."
            </blockquote>
          </div>
        </div>

        {/* Vision Mission Values */}
        <SectionHeading title="Vision, Mission & Values" />
        <div className="grid-3" style={{ marginBottom: '48px' }}>
          {visionMission.map(item => (
            <div key={item.label} style={{ background: 'var(--white)', padding: '24px 20px' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--blue-light)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="var(--blue)" fill="none" strokeWidth="1.8">
                  <path d={item.icon} />
                </svg>
              </div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--blue)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>{item.label}</div>
              <p style={{ fontSize: '12.5px', color: 'var(--muted)', lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Historical Milestones */}
        <SectionHeading title="Historical Milestones" />
        <div style={{ position: 'relative', marginBottom: '48px' }}>
          <div style={{ position: 'absolute', left: '52px', top: 0, bottom: 0, width: '2px', background: 'var(--border)' }} />
          {milestones.map((m, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--blue)', color: 'white', fontFamily: 'Source Serif 4, serif', fontSize: '12px', fontWeight: 600, padding: '6px 8px', textAlign: 'center', minWidth: '52px', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                {m.year}
              </div>
              <div style={{ paddingTop: '4px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>{m.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7 }}>{m.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <SectionHeading title="Leadership & Administration" />
        <div className="grid-4" style={{ marginBottom: '48px' }}>
          {leadership.map((l, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '78px', background: 'var(--blue-light)', border: '1px solid var(--border)', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="28" height="28" viewBox="0 0 36 36">
                  <circle cx="18" cy="13" r="7" fill="#1a3a6b" opacity="0.3" />
                  <path d="M4 34c0-8 28-8 28 0" fill="#1a3a6b" opacity="0.2" />
                </svg>
              </div>
              <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '13px', fontWeight: 600, color: 'var(--blue)', lineHeight: 1.3, marginBottom: '4px' }}>{l.name}</div>
              <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{l.role}</div>
              <div style={{ fontSize: '10px', color: 'var(--light-text)', marginTop: '2px' }}>{l.dept}</div>
            </div>
          ))}
        </div>

        {/* Facilities */}
        <SectionHeading title="Campus & Facilities" />
        <div className="grid-3" style={{ gap: '16px', background: 'transparent' }}>
          {[
            { title: 'Central Library', desc: 'A well-stocked library with over 20,000 volumes, e-journal subscriptions, and digital reading facilities.' },
            { title: 'Laboratories', desc: 'Department-wise labs equipped with modern instruments for practical learning across all 7 disciplines.' },
            { title: 'Boys & Girls Hostel', desc: 'On-campus residential facilities with mess, recreational spaces, and 24×7 security.' },
            { title: 'Sports Complex', desc: 'Outdoor grounds for cricket, football, volleyball, and indoor facilities for table tennis and chess.' },
            { title: 'Internet & Wi-Fi', desc: 'High-speed broadband connectivity across campus with a dedicated National Knowledge Network (NKN) link.' },
            { title: 'Medical Facility', desc: 'An on-campus dispensary with a visiting doctor and first-aid services available during college hours.' },
          ].map((f, i) => (
            <div key={i} style={{ border: '1px solid var(--border)', padding: '18px', background: 'var(--off)' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--blue)', marginBottom: '6px' }}>{f.title}</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
