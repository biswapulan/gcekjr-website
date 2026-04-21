'use client'

export default function Sidebar() {

  const quickLinks = [
    { label: 'UG Admission 2026-27', sub: 'Apply via OJEE Portal', href: 'https://ojee.nic.in', icon: 'M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5' },
    { label: 'Pay Fee Online', sub: 'via SBI Collect', href: 'https://www.onlinesbi.sbi/sbicollect/', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
    { label: 'Semester Results', sub: 'BPUT Exam Portal', href: 'https://bput.ac.in', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { label: 'Lecturer Notes', sub: 'Study Materials', href: '#', icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6' },
    { label: 'Alumni Network', sub: 'gcekjralumni.org', href: 'https://gcekjralumni.org', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8z' },
    { label: 'Grievance Portal', sub: 'edugrievance.com', href: 'https://edugrievance.com', icon: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' },
    { label: 'SHe-BOX', sub: 'Workplace Harassment Complaints', href: 'https://shebox.wcd.gov.in', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  ]

  const importantLinks = [
    { label: 'AICTE India', href: 'https://aicte-india.org' },
    { label: 'BPUT Official Website', href: 'https://bput.ac.in' },
    { label: 'OJEE Odisha', href: 'https://ojee.nic.in' },
    { label: 'SDTE Odisha', href: 'https://sdte.odisha.gov.in' },
    { label: 'NIRF Report 2024', href: 'https://nirfindia.org' },
    { label: 'NPTEL Courses', href: 'https://nptel.ac.in' },
    { label: 'Govt. of Odisha', href: 'https://odisha.gov.in' },
  ]

  return (
    <div style={{padding:'24px 20px',background:'var(--white)'}}>

      {/* Quick Links */}
      <div style={{marginBottom:'24px'}}>
        <div style={{fontFamily:'Source Serif 4, serif',fontSize:'13px',fontWeight:600,color:'white',background:'var(--blue)',padding:'7px 12px',letterSpacing:'0.2px'}}>Quick Links</div>
        <div style={{border:'1px solid var(--border)',borderTop:'none'}}>
          {quickLinks.map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{display:'flex',alignItems:'center',gap:'10px',padding:'9px 12px',borderBottom:i<quickLinks.length-1?'1px solid var(--border)':'none',cursor:'pointer',textDecoration:'none'}}>
              <div style={{width:'28px',height:'28px',background:'var(--blue)',borderRadius:'2px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <svg width="13" height="13" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2">
                  <path d={link.icon}/>
                </svg>
              </div>
              <div style={{fontSize:'12px',color:'var(--text)'}}>
                {link.label}
                <span style={{display:'block',fontSize:'10px',color:'var(--light-text)'}}>{link.sub}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Important Links */}
      <div>
        <div style={{fontFamily:'Source Serif 4, serif',fontSize:'13px',fontWeight:600,color:'white',background:'var(--blue)',padding:'7px 12px'}}>Important Links</div>
        <div style={{border:'1px solid var(--border)',borderTop:'none',padding:'12px'}}>
          {importantLinks.map((link, i) => (
            <div key={i} style={{marginBottom:'6px'}}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" style={{fontSize:'12px',color:'var(--blue-mid)'}}>
                → {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}