import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const contacts = [
  {
    dept: 'Principal\'s Office',
    name: 'Prof. Saroj Kumar Sarangi',
    role: 'Principal',
    phone: '06766-255002',
    email: 'principal@gcekjr.ac.in',
  },
  {
    dept: 'Establishment Section',
    name: 'Administrative Officer',
    role: 'Administration',
    phone: '06766-255002',
    email: 'establishment@gcekjr.ac.in',
  },
  {
    dept: 'Training & Placement Cell',
    name: 'Dr. Priya Ranjan Sahu',
    role: 'Training & Placement Officer',
    phone: '06766-255002',
    email: 'tpo@gcekjr.ac.in',
  },
  {
    dept: 'Admission Office',
    name: 'Admission Coordinator',
    role: 'Admissions',
    phone: '06766-255002',
    email: 'admissions@gcekjr.ac.in',
  },
  {
    dept: 'Examination Cell',
    name: 'Er. Subhashree Mishra',
    role: 'Controller of Examinations',
    phone: '06766-255002',
    email: 'exam@gcekjr.ac.in',
  },
  {
    dept: 'Library',
    name: 'Chief Librarian',
    role: 'Library Services',
    phone: '06766-255002',
    email: 'library@gcekjr.ac.in',
  },
]

const deptContacts = [
  { code: 'MnE', name: 'Mining Engineering', email: 'hod.mne@gcekjr.ac.in' },
  { code: 'CE', name: 'Civil Engineering', email: 'hod.ce@gcekjr.ac.in' },
  { code: 'ME', name: 'Mechanical Engineering', email: 'hod.me@gcekjr.ac.in' },
  { code: 'EE', name: 'Electrical Engineering', email: 'hod.ee@gcekjr.ac.in' },
  { code: 'CSE', name: 'Computer Science & Engg.', email: 'hod.cse@gcekjr.ac.in' },
  { code: 'MME', name: 'Metallurgical & Materials Engg.', email: 'hod.mme@gcekjr.ac.in' },
  { code: 'MiE', name: 'Mineral Engineering', email: 'hod.mie@gcekjr.ac.in' },
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

export default function ContactPage() {
  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />

      {/* Banner */}
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>
          Home → Contact
        </p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>
          Contact Us
        </h1>
      </div>

      <div className="page-wrap">

        {/* Address + Map */}
        <div className="grid-2" style={{ marginBottom: '48px' }}>
          {/* Address Block */}
          <div>
            <SectionHeading title="Address & General Info" />
            <div style={{ border: '1px solid var(--border)', padding: '24px', background: 'var(--off)' }}>
              <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '15px', fontWeight: 600, color: 'var(--blue)', marginBottom: '16px' }}>
                Government College of Engineering, Keonjhar
              </div>
              {[
                ['Address', 'Jamunalia, Old Town, Keonjhar – 758002, Odisha, India'],
                ['Phone', '06766-255002'],
                ['General Email', 'principal@gcekjr.ac.in'],
                ['Establishment', 'establishment@gcekjr.ac.in'],
                ['Office Hours', 'Mon – Sat: 10:00 AM – 5:00 PM'],
                ['College Timings', 'Mon – Sat: 8:30 AM – 5:00 PM'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', gap: '12px', padding: '9px 0', borderBottom: '1px dashed var(--border)', fontSize: '13px' }}>
                  <span style={{ color: 'var(--muted)', minWidth: '110px', flexShrink: 0 }}>{k}</span>
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Embed */}
          <div>
            <SectionHeading title="Location" />
            <div style={{ border: '1px solid var(--border)', overflow: 'hidden', height: '260px', background: 'var(--blue-light)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <iframe
                title="GCE Keonjhar Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.494009654941!2d85.57475607462548!3d21.64463208016332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1f02f2f558f05b%3A0x3406cba4b2bdd1b!2sGovernment%20College%20of%20Engineering%20Keonjhar!5e0!3m2!1sen!2sin!4v1776589384344!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href="https://maps.google.com/?q=21.64463,85.57476" target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', background: 'var(--blue)', color: 'white', fontSize: '12px', fontWeight: 600, padding: '10px 16px', textDecoration: 'none', textAlign: 'center', marginTop: '1px' }}>
              Open in Google Maps →
            </a>
          </div>
        </div>

        {/* How to reach */}
        <SectionHeading title="How to Reach" />
        <div className="grid-3" style={{ marginBottom: '48px' }}>
          {[
            {
              mode: 'By Train',
              icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
              desc: 'Keonjhar Road Railway Station (KJR) is approximately 4 km from the college. Auto-rickshaws and taxis are available at the station. The station is on the Howrah–Mumbai main line via Bhubaneswar.',
            },
            {
              mode: 'By Bus',
              icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
              desc: 'State-run OSRTC and private buses connect Keonjhar with Bhubaneswar (5 hrs), Cuttack, Rourkela, and Jamshedpur. The main bus stand is about 2 km from the college.',
            },
            {
              mode: 'By Air',
              icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
              desc: 'The nearest airport is Bhubaneswar (Biju Patnaik International Airport), approximately 240 km away. Rourkela Airport (200 km) is another option. Taxis and buses connect both airports to Keonjhar.',
            },
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '20px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '36px', height: '36px', background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2">
                    <path d={item.icon} />
                  </svg>
                </div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--blue)' }}>{item.mode}</div>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.8 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Office Contacts */}
        <SectionHeading title="Office & Administrative Contacts" />
        <div className="grid-3" style={{ marginBottom: '48px' }}>
          {contacts.map((c, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '16px 18px' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--red)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '6px' }}>{c.dept}</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '1px' }}>{c.name}</div>
              <div style={{ fontSize: '11px', color: 'var(--muted)', marginBottom: '10px' }}>{c.role}</div>
              <div style={{ fontSize: '12px', color: 'var(--text)' }}>📞 {c.phone}</div>
              <a href={`mailto:${c.email}`} style={{ fontSize: '12px', color: 'var(--blue-mid)', textDecoration: 'none', display: 'block', marginTop: '2px' }}>✉ {c.email}</a>
            </div>
          ))}
        </div>

        {/* Department HOD Contacts */}
        <SectionHeading title="Department HOD Contacts" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', marginBottom: '48px' }}>
          {deptContacts.map((d, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'var(--blue)', color: 'white', fontSize: '11px', fontWeight: 700, width: '44px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {d.code}
              </div>
              <div style={{ flex: 1, fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>{d.name}</div>
              <a href={`mailto:${d.email}`} style={{ fontSize: '12px', color: 'var(--blue-mid)', textDecoration: 'none' }}>{d.email}</a>
            </div>
          ))}
        </div>

        {/* RTI */}
        <div style={{ background: 'var(--off)', border: '1px solid var(--border)', borderLeft: '4px solid var(--blue)', padding: '18px 20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8 }}>
          <strong style={{ color: 'var(--blue)' }}>Right to Information (RTI):</strong> For RTI requests, address correspondence to the Public Information Officer (PIO), Government College of Engineering, Keonjhar – 758002, Odisha. Email: <a href="mailto:pio@gcekjr.ac.in" style={{ color: 'var(--blue-mid)' }}>pio@gcekjr.ac.in</a>
        </div>

      </div>

      <Footer />
    </div>
  )
}
