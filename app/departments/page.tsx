import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const departments = [
  {
    code: 'MnE',
    name: 'Mining Engineering',
    established: '1995',
    intake: 60,
    hod: 'Dr. Bibhuti Bhusan Panda',
    about: 'The flagship and founding department of GCE Keonjhar, Mining Engineering reflects the industrial heritage of Keonjhar — one of the most mineral-rich districts of India. The department trains students in mine design, mine safety, blasting, mine surveying, mineral economics, rock mechanics, and underground mining technology.',
    labs: ['Mine Ventilation Lab', 'Mine Surveying Lab', 'Rock Mechanics Lab', 'Mine Simulation Lab', 'Blasting & Explosives Lab'],
    recruiters: ['Vedanta', 'IMFA', 'NMDC', 'Tata Steel', 'Thriveni', 'Coal India', 'NALCO'],
    email: 'hod.mne@gcekjr.ac.in',
  },
  {
    code: 'CE',
    name: 'Civil Engineering',
    established: '1997',
    intake: 60,
    hod: 'Prof. Sasmita Kumari Sahu',
    about: 'The Civil Engineering department offers a comprehensive curriculum covering structural analysis, concrete technology, geotechnical engineering, transportation engineering, hydraulics, water supply, and environmental engineering. Students are trained on CAD tools and structural design software.',
    labs: ['Structural Engineering Lab', 'Geotechnical Lab', 'Transportation Lab', 'Fluid Mechanics Lab', 'Surveying Lab'],
    recruiters: ['L&T', 'RITES', 'NHPC', 'NHAI', 'NMDC', 'NALCO', 'Govt. PWD'],
    email: 'hod.ce@gcekjr.ac.in',
  },
  {
    code: 'ME',
    name: 'Mechanical Engineering',
    established: '1997',
    intake: 60,
    hod: 'Dr. Suresh Kumar Pradhan',
    about: 'The Mechanical Engineering department covers thermodynamics, fluid mechanics, machine design, manufacturing processes, metrology, industrial engineering, and CAD/CAM. The department emphasises both analytical and hands-on problem solving through well-equipped workshops and labs.',
    labs: ['Workshop', 'Thermal Engineering Lab', 'Fluid Mechanics Lab', 'Metrology Lab', 'CAD/CAM Lab', 'Dynamics Lab'],
    recruiters: ['Tata Steel', 'JSPL', 'SAIL', 'BHEL', 'L&T', 'Vedanta', 'Monnet'],
    email: 'hod.me@gcekjr.ac.in',
  },
  {
    code: 'EE',
    name: 'Electrical Engineering',
    established: '1997',
    intake: 60,
    hod: 'Prof. Ramakanta Mohanty',
    about: 'The Electrical Engineering department trains students in power generation, transmission, distribution, electrical machines, control systems, power electronics, and renewable energy. Students are exposed to industrial automation and PLC-based systems through practical lab sessions.',
    labs: ['Electrical Machines Lab', 'Power Electronics Lab', 'Control Systems Lab', 'Power Systems Lab', 'Measurement Lab'],
    recruiters: ['NALCO', 'OPGC', 'Vedanta', 'GRIDCO', 'BSNL', 'L&T', 'BHEL'],
    email: 'hod.ee@gcekjr.ac.in',
  },
  {
    code: 'CSE',
    name: 'Computer Science & Engineering',
    established: '2002',
    intake: 60,
    hod: 'Dr. Priyabrata Pattnaik',
    about: 'The CSE department offers training in programming, data structures, algorithms, computer networks, database management, operating systems, web development, cloud computing, and artificial intelligence. The department runs an active coding club and regularly participates in national hackathons.',
    labs: ['Programming Lab', 'Networks Lab', 'AI & ML Lab', 'Cloud Computing Lab', 'Cyber Security Lab'],
    recruiters: ['Infosys', 'TCS', 'Wipro', 'HCL', 'Capgemini', 'L&T Infotech', 'Accenture'],
    email: 'hod.cse@gcekjr.ac.in',
  },
  {
    code: 'MME',
    name: 'Metallurgical & Materials Engineering',
    established: 'N/A',
    intake: 30,
    hod: 'Dr. Sanjay Kumar Sahu',
    about: 'This department focuses on the science of materials — their structure, properties, processing, and performance. The curriculum covers physical metallurgy, iron & steel making, foundry technology, corrosion, heat treatment, and material characterisation techniques.',
    labs: ['Metallography Lab', 'Heat Treatment Lab', 'Foundry Lab', 'Material Testing Lab', 'XRD & SEM Lab'],
    recruiters: ['TISCO', 'SAIL', 'RINL', 'IMFA', 'Vedanta', 'NALCO', 'JSPL'],
    email: 'hod.mme@gcekjr.ac.in',
  },
  {
    code: 'MiE',
    name: 'Mineral Engineering',
    established: 'N/A',
    intake: 30,
    hod: 'Prof. Durga Prasad Mishra',
    about: 'Mineral Engineering deals with the processing of ores and minerals — covering comminution, classification, gravity concentration, flotation, magnetic separation, hydrometallurgy, and pyrometallurgy. Students learn to design mineral processing plants and operate pilot-scale equipment.',
    labs: ['Ore Dressing Lab', 'Flotation Lab', 'Hydrometallurgy Lab', 'Crushing & Grinding Lab', 'Chemical Analysis Lab'],
    recruiters: ['NALCO', 'IMFA', 'Vedanta', 'Hindalco', 'NMDC', 'OMC', 'KIOCL'],
    email: 'hod.mie@gcekjr.ac.in',
  },
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

export default function DepartmentsPage() {
  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />

      {/* Banner */}
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>
          Home → Departments
        </p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>
          Academic Departments
        </h1>
      </div>

      {/* Quick jump */}
      <div style={{ background: 'var(--off)', borderBottom: '1px solid var(--border)', padding: '12px 32px', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 600, marginRight: '4px' }}>Jump to:</span>
        {departments.map(d => (
          <a key={d.code} href={`#${d.code.toLowerCase()}`}
            style={{ fontSize: '11px', background: 'var(--blue)', color: 'white', padding: '4px 12px', fontWeight: 600, textDecoration: 'none' }}>
            {d.code}
          </a>
        ))}
      </div>

      <div className="page-wrap">

        <SectionHeading title="Our Departments" />

        {departments.map((dept, idx) => (
          <div key={dept.code} id={dept.code.toLowerCase()}
            style={{ border: '1px solid var(--border)', marginBottom: '32px', scrollMarginTop: '80px' }}>

            {/* Dept Header */}
            <div style={{ background: 'var(--blue)', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ fontFamily: 'Source Serif 4, serif', fontWeight: 600, color: 'white', border: '2px solid rgba(255,255,255,0.3)', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0 }}>
                  {dept.code}
                </div>
                <div>
                  <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '17px', fontWeight: 600, color: 'white' }}>{dept.name}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>
                    {dept.established !== 'N/A' ? `Established ${dept.established}` : ''} &nbsp;·&nbsp; Intake: {dept.intake} seats/year
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Head of Department</div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'white', marginTop: '2px' }}>{dept.hod}</div>
                <a href={`mailto:${dept.email}`} style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>{dept.email}</a>
              </div>
            </div>

            {/* Dept Body */}
            <div style={{ padding: '20px 24px', display: 'grid', gridTemplateColumns: '1fr 220px', gap: '24px' }}>
              <div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px' }}>{dept.about}</p>

                <div style={{ marginBottom: '4px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--blue)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '8px' }}>Laboratories</div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {dept.labs.map(lab => (
                      <span key={lab} style={{ fontSize: '11px', background: 'var(--blue-light)', color: 'var(--blue)', border: '1px solid var(--border)', padding: '4px 10px' }}>
                        {lab}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div style={{ background: 'var(--off)', border: '1px solid var(--border)', padding: '14px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--blue)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '10px', paddingBottom: '6px', borderBottom: '1px solid var(--border)' }}>
                    Key Recruiters
                  </div>
                  {dept.recruiters.map(r => (
                    <div key={r} style={{ fontSize: '12px', color: 'var(--text)', padding: '4px 0', borderBottom: '1px dashed var(--border)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: 'var(--blue)', fontSize: '8px' }}>▶</span> {r}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}
