import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const clubs = [
  { name: 'Coding Club', dept: 'CSE', desc: 'Regular hackathons, competitive programming contests, and open-source contribution drives.' },
  { name: 'Mining Society', dept: 'MnE', desc: 'Industrial visits to mines, technical paper presentations, and field trips.' },
  { name: 'Tech Innovators Club', dept: 'All Depts', desc: 'Multi-disciplinary team projects, prototype building, and participation in national tech fests.' },
  { name: 'Literary & Debate Society', dept: 'All Depts', desc: 'Essay competitions, elocution, debates, and the college annual magazine — "Jnanajyoti".' },
  { name: 'Cultural Club', dept: 'All Depts', desc: 'Annual cultural fest, music, dance, drama, and participation in inter-college competitions.' },
  { name: 'Eco Club', dept: 'All Depts', desc: 'Campus beautification, tree plantation, waste management awareness, and green energy drives.' },
]

const scholarships = [
  { name: 'Post-Matric Scholarship (SC/ST/OBC)', authority: 'Govt. of Odisha', desc: 'Full tuition fee waiver + maintenance allowance for eligible SC, ST, and OBC students.' },
  { name: 'AICTE Pragati Scholarship', authority: 'AICTE, New Delhi', desc: 'For girl students from economically weaker sections. ₹30,000 per year + contingency.' },
  { name: 'AICTE Saksham Scholarship', authority: 'AICTE, New Delhi', desc: 'For students with Disability (PwD). ₹30,000 per year + contingency.' },
  { name: 'Merit-cum-Means Scholarship', authority: 'BPUT', desc: 'For students maintaining above 7.5 CGPA with annual family income below ₹8 LPA.' },
  { name: 'Inspire Scholarship (DST)', authority: 'Dept. of Science & Technology', desc: 'For top 1% students in Class 12. ₹60,000 per year for the full degree duration.' },
]

const hostelInfo = [
  { label: 'Boys Hostel', capacity: '~400 students', rooms: 'Triple and double-sharing rooms', amenities: 'Mess, reading room, TV room, sports area, 24×7 warden' },
  { label: 'Girls Hostel', capacity: '~120 students', rooms: 'Double-sharing rooms', amenities: 'Mess, common room, CCTV, warden on premises, restricted entry' },
]

const rules = [
  'Attendance of at least 75% is mandatory in each subject to be eligible for End Semester Examinations.',
  'Students must carry their ID card on campus at all times.',
  'Use of mobile phones is restricted inside classrooms and labs during academic hours.',
  'Ragging in any form is strictly prohibited and punishable under the Anti-Ragging Act.',
  'Students are expected to maintain decorum in the library, labs, and classrooms.',
  'Grievances can be filed through the official Grievance Portal or with the Student Welfare Dean.',
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

export default function StudentsPage() {
  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />

      {/* Banner */}
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>
          Home → Students
        </p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>
          Student Corner
        </h1>
      </div>

      <div className="page-wrap">

        {/* Quick Links for students */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)', marginBottom: '48px' }}>
          {[
            { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', label: 'Semester Results', sub: 'BPUT Portal', href: 'https://bput.ac.in' },
            { icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', label: 'Study Materials', sub: 'Lecturer Notes', href: '#materials' },
            { icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', label: 'Pay Fee Online', sub: 'SBI Collect', href: 'https://www.onlinesbi.sbi/sbicollect/' },
            { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', label: 'Grievance Portal', sub: 'File a Complaint', href: 'https://edugrievance.com' },
          ].map((item, i) => (
            <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{ background: 'var(--white)', padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none', gap: '10px' }}>
              <div style={{ width: '44px', height: '44px', background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="1.8">
                  <path d={item.icon} />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>{item.label}</div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{item.sub}</div>
              </div>
            </a>
          ))}
        </div>

        {/* NCC & NSS */}
        <SectionHeading title="NCC & NSS" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '48px' }}>
          <div style={{ border: '1px solid var(--border)', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ background: 'var(--blue)', color: 'white', fontSize: '13px', fontWeight: 700, width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>NCC</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--blue)' }}>National Cadet Corps</div>
                <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Unit active since 2000</div>
              </div>
            </div>
            <p style={{ fontSize: '12.5px', color: 'var(--muted)', lineHeight: 1.8 }}>
              The college has an active NCC unit under the Odisha Directorate. Cadets participate in Annual Training Camps, Republic Day parades, social service activities, and have opportunities to attend national-level camps. NCC 'B' and 'C' certificate holders receive preference in government jobs.
            </p>
          </div>
          <div style={{ border: '1px solid var(--border)', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ background: 'var(--red)', color: 'white', fontSize: '13px', fontWeight: 700, width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>NSS</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--blue)' }}>National Service Scheme</div>
                <div style={{ fontSize: '11px', color: 'var(--muted)' }}>100+ volunteers enrolled</div>
              </div>
            </div>
            <p style={{ fontSize: '12.5px', color: 'var(--muted)', lineHeight: 1.8 }}>
              The NSS unit conducts regular blood donation camps, village adoption programmes, cleanliness drives, and health awareness campaigns. NSS volunteers participate in the annual 7-day special camp and earn credits for their service hours as part of the BPUT curriculum.
            </p>
          </div>
        </div>

        {/* Clubs */}
        <SectionHeading title="Student Clubs & Activities" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)', marginBottom: '48px' }}>
          {clubs.map((club, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '18px 16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--blue)', marginBottom: '3px' }}>{club.name}</div>
              <div style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '8px' }}>{club.dept}</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7 }}>{club.desc}</div>
            </div>
          ))}
        </div>

        {/* Hostel */}
        <SectionHeading title="Hostel & Accommodation" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '48px' }}>
          {hostelInfo.map((h, i) => (
            <div key={i} style={{ border: '1px solid var(--border)', overflow: 'hidden' }}>
              <div style={{ background: 'var(--blue)', padding: '12px 16px', color: 'white', fontSize: '13px', fontWeight: 600 }}>{h.label}</div>
              <div style={{ padding: '16px' }}>
                {[['Capacity', h.capacity], ['Room Type', h.rooms], ['Amenities', h.amenities]].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', gap: '12px', marginBottom: '10px', fontSize: '12px' }}>
                    <span style={{ color: 'var(--muted)', minWidth: '80px', flexShrink: 0 }}>{k}</span>
                    <span style={{ color: 'var(--text)' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scholarships */}
        <SectionHeading title="Scholarships & Financial Aid" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', marginBottom: '48px' }}>
          {scholarships.map((s, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '14px 20px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{s.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
              <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--blue)', background: 'var(--blue-light)', border: '1px solid var(--border)', padding: '4px 10px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                {s.authority}
              </span>
            </div>
          ))}
        </div>

        {/* Student Rules */}
        <SectionHeading title="Rules & Code of Conduct" />
        <div style={{ border: '1px solid var(--border)', background: 'var(--off)', padding: '20px 24px', marginBottom: '32px' }}>
          {rules.map((rule, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', padding: '10px 0', borderBottom: i < rules.length - 1 ? '1px dashed var(--border)' : 'none', fontSize: '13px', color: 'var(--text)', lineHeight: 1.7 }}>
              <span style={{ color: 'var(--blue)', fontWeight: 700, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}.</span>
              {rule}
            </div>
          ))}
        </div>

        {/* Anti-Ragging notice */}
        <div style={{ background: 'var(--red)', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '15px', fontWeight: 600, color: 'white', marginBottom: '3px' }}>Anti-Ragging Policy</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>Ragging is a criminal offence. Report incidents immediately to the Anti-Ragging Helpline: <strong style={{ color: 'white' }}>1800-180-5522</strong></div>
          </div>
          <a href="https://antiragging.in" target="_blank" rel="noopener noreferrer"
            style={{ background: 'white', color: 'var(--red)', fontSize: '12px', fontWeight: 600, padding: '10px 20px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Report Ragging →
          </a>
        </div>

      </div>

      <Footer />
    </div>
  )
}
