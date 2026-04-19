'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const searchableContent = [
  { title: 'About GCE Keonjhar', href: '/about', category: 'About', keywords: 'about history established 1995 institution overview' },
  { title: 'UG Programmes', href: '/academics', category: 'Academics', keywords: 'academics programmes btech undergraduate courses' },
  { title: 'Time Table', href: '/academics/timetable', category: 'Academics', keywords: 'timetable schedule class timing' },
  { title: 'Syllabus', href: '/academics/syllabus', category: 'Academics', keywords: 'syllabus curriculum bput subjects' },
  { title: 'Semester Results', href: '/academics/results', category: 'Academics', keywords: 'results exam semester marks cgpa' },
  { title: 'Lecture Notes', href: '/academics/lecture-notes', category: 'Academics', keywords: 'lecture notes study material pdf download' },
  { title: 'UG Admission 2026-27', href: '/admission', category: 'Admission', keywords: 'admission ojee apply eligibility fee seats' },
  { title: 'Scholarships', href: '/admission/scholarship', category: 'Admission', keywords: 'scholarship financial aid sc st obc aicte pragati' },
  { title: 'Anti-Ragging Cell', href: '/admission/anti-ragging', category: 'Admission', keywords: 'anti ragging cell committee helpline' },
  { title: 'Mining Engineering', href: '/departments/mining', category: 'Department', keywords: 'mining engineering mne department hod labs' },
  { title: 'Civil Engineering', href: '/departments/civil', category: 'Department', keywords: 'civil engineering ce department hod labs' },
  { title: 'Mechanical Engineering', href: '/departments/mechanical', category: 'Department', keywords: 'mechanical engineering me department hod labs' },
  { title: 'Electrical Engineering', href: '/departments/electrical', category: 'Department', keywords: 'electrical engineering ee department hod labs' },
  { title: 'Computer Science & Engineering', href: '/departments/cse', category: 'Department', keywords: 'computer science cse it department hod labs coding' },
  { title: 'Metallurgical & Materials Engineering', href: '/departments/metallurgy', category: 'Department', keywords: 'metallurgy mme materials department hod labs' },
  { title: 'Mineral Engineering', href: '/departments/mineral', category: 'Department', keywords: 'mineral engineering mie department hod labs' },
  { title: 'Our Faculty', href: '/faculty', category: 'Faculty', keywords: 'faculty staff teachers professors hod department' },
  { title: 'Placement Cell', href: '/placement', category: 'Placement', keywords: 'placement tpo training recruiter ctc package job campus' },
  { title: 'Photo Gallery', href: '/gallery', category: 'Gallery', keywords: 'gallery photos images events campus' },
  { title: 'Notices & Announcements', href: '/notices', category: 'Notices', keywords: 'notices announcements circular exam admission' },
  { title: 'Events & Activities', href: '/events', category: 'Events', keywords: 'events activities fest technical cultural sports' },
  { title: 'Contact Us', href: '/contact', category: 'Contact', keywords: 'contact address phone email location map directions' },
  { title: 'Student Activity Center', href: '/campus-life/student-activity-center', category: 'Campus Life', keywords: 'student activity center sac cultural events' },
  { title: 'Clubs & Societies', href: '/campus-life/clubs', category: 'Campus Life', keywords: 'clubs societies coding literary cultural eco ncc nss' },
  { title: 'NCC', href: '/campus-life/ncc', category: 'Campus Life', keywords: 'ncc national cadet corps army navy air force' },
  { title: 'Halls of Residence (Hostel)', href: '/campus-life/halls-of-residence', category: 'Campus Life', keywords: 'hostel residence boys girls rooms mess warden' },
  { title: 'Campus Facilities', href: '/campus-life/facilities', category: 'Campus Life', keywords: 'facilities library wifi sports medical dispensary' },
  { title: 'Conferences & Workshops', href: '/extension/conferences', category: 'Extension', keywords: 'conference seminar workshop research faculty' },
  { title: 'Internships', href: '/extension/internships', category: 'Extension', keywords: 'internship industry training summer project' },
  { title: 'Center for Competitive Exams', href: '/extension/competitive-exams', category: 'Extension', keywords: 'gate upsc competitive exam coaching preparation' },
  { title: 'Research Works', href: '/extension/research', category: 'Extension', keywords: 'research publication project phd thesis journal' },
  { title: 'RTI — Right to Information', href: '/rti', category: 'Regulatory', keywords: 'rti right information act pio application disclosure' },
  { title: 'NIRF Ranking', href: '/nirf', category: 'Regulatory', keywords: 'nirf ranking national institutional framework ministry' },
  { title: 'Mission & Vision', href: '/about/mission-vision', category: 'About', keywords: 'mission vision values goals objectives' },
  { title: "Principal's Message", href: '/about/principals-message', category: 'About', keywords: 'principal message saroj kumar sarangi' },
  { title: 'Alumni Association', href: '/about/alumni-association', category: 'About', keywords: 'alumni association old students network' },
  { title: 'Board of Governors', href: '/about/board-of-governors', category: 'About', keywords: 'board governors management committee' },
]

function SearchResults() {
  const params = useSearchParams()
  const query = params.get('q') || ''
  const [results, setResults] = useState<typeof searchableContent>([])

  useEffect(() => {
    if (!query.trim()) { setResults([]); return }
    const q = query.toLowerCase()
    const filtered = searchableContent.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    )
    setResults(filtered)
  }, [query])

  const categories = [...new Set(results.map(r => r.category))]

  return (
    <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>
      {query && (
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '28px' }}>
          {results.length > 0
            ? <>Showing <strong style={{ color: 'var(--text)' }}>{results.length} result{results.length !== 1 ? 's' : ''}</strong> for "<strong style={{ color: 'var(--text)' }}>{query}</strong>"</>
            : <>No results found for "<strong style={{ color: 'var(--text)' }}>{query}</strong>". Try a different keyword.</>}
        </p>
      )}

      {!query && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--muted)', fontSize: '13px' }}>
          Use the search bar above to find pages, departments, faculty, and more.
        </div>
      )}

      {categories.map(cat => (
        <div key={cat} style={{ marginBottom: '28px' }}>
          <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--blue)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', paddingBottom: '6px', borderBottom: '2px solid var(--blue-light)' }}>
            {cat}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
            {results.filter(r => r.category === cat).map((r, i) => (
              <Link key={i} href={r.href} style={{ background: 'var(--white)', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--blue)' }}>{r.title}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{r.href}</div>
                </div>
                <span style={{ color: 'var(--light-text)', fontSize: '16px' }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function SearchPage() {
  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Search</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Search Results</h1>
      </div>
      <Suspense fallback={<div style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)' }}>Searching...</div>}>
        <SearchResults />
      </Suspense>
      <Footer />
    </div>
  )
}
