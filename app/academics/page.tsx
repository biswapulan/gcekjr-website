import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const programmes = [
  {
    code: 'MnE', name: 'Mining Engineering', intake: 60, duration: '4 Years',
    desc: 'The flagship programme of GCEKJR. Covers mine design, blasting, mine safety, mineral economics, and rock mechanics. Strong industry demand from coal, iron ore, and bauxite sectors.',
    electives: ['Underground Mining', 'Mine Ventilation', 'Rock Mechanics', 'Mine Management'],
  },
  {
    code: 'CE', name: 'Civil Engineering', intake: 60, duration: '4 Years',
    desc: 'Covers structural analysis, RCC design, transportation, water resources, geotechnical engineering, and construction management.',
    electives: ['Structural Engineering', 'Transportation', 'Geotechnical Engg', 'Water Resources'],
  },
  {
    code: 'ME', name: 'Mechanical Engineering', intake: 60, duration: '4 Years',
    desc: 'Encompasses thermodynamics, fluid mechanics, manufacturing processes, machine design, and industrial engineering.',
    electives: ['Thermal Engineering', 'Manufacturing', 'CAD/CAM', 'Robotics'],
  },
  {
    code: 'EE', name: 'Electrical Engineering', intake: 60, duration: '4 Years',
    desc: 'Covers power systems, control systems, electrical machines, power electronics, and renewable energy systems.',
    electives: ['Power Systems', 'Control Engineering', 'Power Electronics', 'Renewable Energy'],
  },
  {
    code: 'CSE', name: 'Computer Science & Engineering', intake: 60, duration: '4 Years',
    desc: 'Covers data structures, algorithms, operating systems, databases, networks, AI/ML, and web technologies.',
    electives: ['Artificial Intelligence', 'Cloud Computing', 'Cyber Security', 'Data Science'],
  },
  {
    code: 'MME', name: 'Metallurgical & Materials Engg.', intake: 30, duration: '4 Years',
    desc: 'Focuses on physical metallurgy, material characterization, heat treatment, foundry technology, and corrosion.',
    electives: ['Physical Metallurgy', 'Foundry Technology', 'Composite Materials', 'Corrosion Control'],
  },
  {
    code: 'MiE', name: 'Mineral Engineering', intake: 30, duration: '4 Years',
    desc: 'Covers ore dressing, mineral processing, crushing, grinding, flotation, and hydrometallurgy.',
    electives: ['Ore Dressing', 'Hydrometallurgy', 'Flotation', 'Pyrometallurgy'],
  },
]

const semesterStructure = [
  { sem: 'Semester I & II', label: 'Foundation', desc: 'Common engineering mathematics, physics, chemistry, basic electrical and mechanical, and engineering drawing.' },
  { sem: 'Semester III & IV', label: 'Core Fundamentals', desc: 'Branch-specific core subjects introduced. Lab work intensifies. Communication skills and environmental science.' },
  { sem: 'Semester V & VI', label: 'Advanced Core', desc: 'Advanced branch subjects, elective-I and elective-II. Mini project and industrial visit.' },
  { sem: 'Semester VII & VIII', label: 'Specialisation & Project', desc: 'Elective-III, elective-IV, major project (2 semesters), seminar, and comprehensive viva.' },
]

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <div className="section-heading-line" />
    </div>
  )
}

export default function AcademicsPage() {
  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />

      {/* Banner */}
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>
          Home → Academics
        </p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>
          Academics
        </h1>
      </div>

      <div className="page-wrap">

        {/* Affiliation info */}
        <div style={{ background: 'var(--blue-light)', border: '1px solid var(--border)', borderLeft: '4px solid var(--blue)', padding: '16px 20px', marginBottom: '36px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8 }}>
          All B.Tech programmes are affiliated to <strong style={{ color: 'var(--blue)' }}>Biju Patnaik University of Technology (BPUT)</strong>, Rourkela, Odisha and approved by <strong style={{ color: 'var(--blue)' }}>AICTE, New Delhi</strong>. The curriculum is governed by BPUT regulations and revised periodically in line with industry requirements.
          <br />
          <a href="https://bput.ac.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-mid)', fontWeight: 600, fontSize: '12px', marginTop: '6px', display: 'inline-block' }}>
            Download BPUT Syllabus →
          </a>
        </div>

        {/* UG Programmes */}
        <SectionHeading title="Undergraduate Programmes (B.Tech)" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', marginBottom: '48px' }}>
          {programmes.map((p) => (
            <div key={p.code} className="prog-card" style={{ background: 'var(--white)', padding: '20px 24px', display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--blue)', color: 'white', fontSize: '12px', fontWeight: 700, width: '54px', height: '54px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--blue)', flexShrink: 0 }}>
                {p.code}
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--blue)', marginBottom: '4px' }}>{p.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '10px' }}>{p.desc}</div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {p.electives.map(e => (
                    <span key={e} style={{ fontSize: '10px', background: 'var(--blue-light)', color: 'var(--blue)', padding: '3px 8px', border: '1px solid var(--border)', fontWeight: 500 }}>
                      {e}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>Intake: {p.intake}</div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{p.duration}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Semester Structure */}
        <SectionHeading title="Semester Structure" />
        <div className="sem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)', marginBottom: '48px' }}>
          {semesterStructure.map((s, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '20px 16px' }}>
              <div style={{ background: 'var(--blue)', color: 'white', fontSize: '10px', fontWeight: 600, letterSpacing: '0.5px', padding: '4px 10px', display: 'inline-block', marginBottom: '10px' }}>
                {s.sem}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>{s.label}</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7 }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Evaluation */}
        <SectionHeading title="Evaluation & Examination" />
        <div className="eval-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '48px' }}>
          {[
            { title: 'Internal Assessment', desc: 'Each subject carries 30 marks of internal assessment comprising two mid-semester tests (MST-I and MST-II), assignments, quizzes, and attendance.' },
            { title: 'End Semester Examination', desc: 'BPUT conducts End Semester Examinations (ESE) carrying 70 marks for theory subjects at the end of each semester.' },
            { title: 'Practical Examinations', desc: 'Laboratory-based practicals are assessed internally (60%) and through external BPUT viva-voce (40%).' },
            { title: 'CGPA & Grading', desc: 'BPUT follows a 10-point CGPA system. Grades range from O (Outstanding, 10) to F (Fail, <4). CGPA is calculated at the end of each semester.' },
          ].map((item, i) => (
            <div key={i} style={{ border: '1px solid var(--border)', padding: '18px', background: 'var(--off)' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--blue)', marginBottom: '6px' }}>{item.title}</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Academic Calendar notice */}
        <div className="acad-cta" style={{ background: 'var(--blue)', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', marginBottom: '4px' }}>Academic Calendar & Time Table</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Download the current semester schedule and academic planner from the notices section.</div>
          </div>
          <Link href="/notices" style={{ background: 'white', color: 'var(--blue)', fontSize: '12px', fontWeight: 600, padding: '10px 20px', whiteSpace: 'nowrap', textDecoration: 'none' }}>
            View Notices →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
