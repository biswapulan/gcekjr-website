'use client'
import { useEffect, useState } from 'react'
import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getDriveImageUrl } from '@/lib/driveImage'

interface Faculty { Name: string; Designation: string; Department: string; Qualification: string; PhotoUrl: string }

export default function FacultyPage() {
  const [faculty, setFaculty] = useState<Faculty[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/faculty').then(r => r.json()).then(d => {
      setFaculty(Array.isArray(d) ? d : [])
    }).finally(() => setLoading(false))
  }, [])

  const depts = [...new Set(faculty.map(f => f.Department).filter(Boolean))]

  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />
      <div className="faculty-page-wrap" style={{padding:"32px"}}>
        <div style={{display:'flex',alignItems:'center',marginBottom:'28px'}}>
          <h1 style={{fontFamily:'Source Serif 4, serif',fontSize:'20px',fontWeight:600,color:'white',background:'var(--blue)',padding:'8px 16px'}}>Our Faculty</h1>
          <div style={{flex:1,height:'2px',background:'var(--border)',alignSelf:'flex-end'}}></div>
        </div>
        {loading ? <div style={{textAlign:'center',color:'var(--muted)',padding:'40px'}}>Loading...</div> :
         faculty.length === 0 ? <div style={{textAlign:'center',color:'var(--muted)',padding:'40px'}}>Faculty list coming soon.</div> :
         depts.map(dept => (
          <div key={dept} style={{marginBottom:'32px'}}>
            <h2 style={{fontSize:'14px',fontWeight:600,color:'var(--blue)',marginBottom:'16px',paddingBottom:'6px',borderBottom:'2px solid var(--blue-light)'}}>{dept}</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:'16px'}}>
              {faculty.filter(f => f.Department === dept).map((f, i) => (
                <div key={i} style={{border:'1px solid var(--border)',background:'white',padding:'16px',textAlign:'center'}}>
                  <div style={{width:'72px',height:'88px',background:'var(--blue-light)',margin:'0 auto 12px',display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--border)'}}>
                    {f.PhotoUrl ? (
                      <img src={getDriveImageUrl(f.PhotoUrl)} alt={f.Name} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    ) : (
                      <svg width="32" height="32" viewBox="0 0 36 36">
                        <circle cx="18" cy="13" r="7" fill="#1a3a6b" opacity="0.3"/>
                        <path d="M4 34c0-8 28-8 28 0" fill="#1a3a6b" opacity="0.2"/>
                      </svg>
                    )}
                  </div>
                  <div style={{fontFamily:'Source Serif 4, serif',fontSize:'13px',fontWeight:600,color:'var(--blue)'}}>{f.Name}</div>
                  <div style={{fontSize:'11px',color:'var(--muted)',marginTop:'2px'}}>{f.Designation}</div>
                  <div style={{fontSize:'11px',color:'var(--light-text)',marginTop:'2px'}}>{f.Qualification}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
