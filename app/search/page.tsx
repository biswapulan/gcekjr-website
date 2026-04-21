'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

// ─── Static page index ───────────────────────────────────────────────────────
const PAGES = [
  { title: 'About GCE Keonjhar', href: '/about', category: 'Pages', keywords: 'about history established 1995 institution overview autonomous' },
  { title: 'Discover GCE Keonjhar', href: '/about/discover-gce', category: 'Pages', keywords: 'discover gce keonjhar campus life infrastructure' },
  { title: 'Mission & Vision', href: '/about/mission-vision', category: 'Pages', keywords: 'mission vision values goals objectives' },
  { title: "Principal's Message", href: '/about/principals-message', category: 'Pages', keywords: 'principal message saroj kumar sarangi' },
  { title: 'Alumni Association', href: '/about/alumni-association', category: 'Pages', keywords: 'alumni association old students network batch' },
  { title: 'Board of Governors', href: '/about/board-of-governors', category: 'Pages', keywords: 'board governors management committee trust' },
  { title: 'UG Programmes (Academics)', href: '/academics', category: 'Pages', keywords: 'academics programmes btech undergraduate courses engineering degree' },
  { title: 'Time Table', href: '/academics/timetable', category: 'Pages', keywords: 'timetable schedule class timing lecture period routine' },
  { title: 'Syllabus', href: '/academics/syllabus', category: 'Pages', keywords: 'syllabus curriculum bput subjects course structure' },
  { title: 'Semester Results', href: '/academics/results', category: 'Pages', keywords: 'results exam semester marks cgpa grade scorecard' },
  { title: 'Lecture Notes', href: '/academics/lecture-notes', category: 'Pages', keywords: 'lecture notes study material pdf download resource' },
  { title: 'UG Admission', href: '/admission', category: 'Pages', keywords: 'admission ojee apply eligibility fee seats lateral entry' },
  { title: 'Scholarships', href: '/admission/scholarship', category: 'Pages', keywords: 'scholarship financial aid sc st obc aicte pragati merit' },
  { title: 'Anti-Ragging Cell', href: '/admission/anti-ragging', category: 'Pages', keywords: 'anti ragging cell committee helpline grievance' },
  { title: 'AICTE Anti-Ragging Guidelines', href: '/admission/aicte-guidelines', category: 'Pages', keywords: 'aicte guidelines anti ragging rules regulations' },
  { title: 'Mining Engineering', href: '/departments/mining', category: 'Pages', keywords: 'mining engineering mne department hod labs mine blasting rock' },
  { title: 'Civil Engineering', href: '/departments/civil', category: 'Pages', keywords: 'civil engineering ce department hod labs structural transportation' },
  { title: 'Mechanical Engineering', href: '/departments/mechanical', category: 'Pages', keywords: 'mechanical engineering me department hod labs thermal manufacturing' },
  { title: 'Electrical Engineering', href: '/departments/electrical', category: 'Pages', keywords: 'electrical engineering ee department hod labs power control' },
  { title: 'Computer Science & Engineering', href: '/departments/cse', category: 'Pages', keywords: 'computer science cse it department hod labs coding ai ml' },
  { title: 'Metallurgical & Materials Engineering', href: '/departments/metallurgy', category: 'Pages', keywords: 'metallurgy mme materials department hod labs heat treatment' },
  { title: 'Mineral Engineering', href: '/departments/mineral', category: 'Pages', keywords: 'mineral engineering mie department hod labs ore dressing flotation' },
  { title: 'Our Faculty', href: '/faculty', category: 'Pages', keywords: 'faculty staff teachers professors hod department all' },
  { title: 'Placement Cell', href: '/placement', category: 'Pages', keywords: 'placement tpo training recruiter ctc package job campus offer letter' },
  { title: 'Photo Gallery', href: '/gallery', category: 'Pages', keywords: 'gallery photos images events campus fest sports' },
  { title: 'All Notices', href: '/notices', category: 'Pages', keywords: 'notices announcements circular exam admission all list' },
  { title: 'Contact Us', href: '/contact', category: 'Pages', keywords: 'contact address phone email location map directions reach' },
  { title: 'Student Activity Center', href: '/campus-life/student-activity-center', category: 'Pages', keywords: 'student activity center sac cultural events celebration' },
  { title: 'Clubs & Societies', href: '/campus-life/clubs', category: 'Pages', keywords: 'clubs societies coding literary cultural eco ncc nss robotics' },
  { title: 'NCC', href: '/campus-life/ncc', category: 'Pages', keywords: 'ncc national cadet corps army navy air force training parade' },
  { title: 'Halls of Residence (Hostel)', href: '/campus-life/halls-of-residence', category: 'Pages', keywords: 'hostel residence boys girls rooms mess warden accommodation' },
  { title: 'Campus Facilities', href: '/campus-life/facilities', category: 'Pages', keywords: 'facilities library wifi sports medical dispensary canteen lab' },
  { title: 'Conferences & Workshops', href: '/extension/conferences', category: 'Pages', keywords: 'conference seminar workshop research faculty event invited talk' },
  { title: 'Internships', href: '/extension/internships', category: 'Pages', keywords: 'internship industry training summer project work experience' },
  { title: 'Center for Competitive Exams', href: '/extension/competitive-exams', category: 'Pages', keywords: 'gate upsc competitive exam coaching preparation civil services' },
  { title: 'Research Works', href: '/extension/research', category: 'Pages', keywords: 'research publication project phd thesis journal paper' },
  { title: 'RTI — Right to Information', href: '/rti', category: 'Pages', keywords: 'rti right information act pio application disclosure transparency' },
  { title: 'NIRF Ranking', href: '/nirf', category: 'Pages', keywords: 'nirf ranking national institutional framework ministry education' },
  { title: 'Downloads', href: '/downloads', category: 'Pages', keywords: 'downloads brochure forms pdf documents prospectus' },
]

// ─── Types ────────────────────────────────────────────────────────────────────
interface Notice   { Date: string; Title: string; Category: string; PdfUrl: string; IsNew: string }
interface Faculty  { Name: string; Designation: string; Department: string; Qualification: string; PhotoUrl: string }
interface Download { Title: string; Description: string; DriveUrl: string; Category: string; FileSize: string }

interface Result {
  type: 'page' | 'notice' | 'faculty' | 'download'
  title: string
  subtitle: string
  href: string
  tag?: string
}

function match(q: string, ...fields: string[]) {
  return fields.some(f => f?.toLowerCase().includes(q))
}

function SearchResults() {
  const params = useSearchParams()
  const query  = params.get('q') || ''

  const [loading,   setLoading]   = useState(false)
  const [results,   setResults]   = useState<Result[]>([])
  const [notices,   setNotices]   = useState<Notice[]>([])
  const [faculty,   setFaculty]   = useState<Faculty[]>([])
  const [downloads, setDownloads] = useState<Download[]>([])
  const [dataReady, setDataReady] = useState(false)

  // Fetch live data once on mount
  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const [nRes, fRes, dRes] = await Promise.all([
          fetch('/api/notices'),
          fetch('/api/faculty'),
          fetch('/api/downloads'),
        ])
        const [n, f, d] = await Promise.all([nRes.json(), fRes.json(), dRes.json()])
        if (Array.isArray(n)) setNotices(n)
        if (Array.isArray(f)) setFaculty(f)
        if (Array.isArray(d)) setDownloads(d)
      } catch { /* fail silently */ }
      setDataReady(true)
      setLoading(false)
    }
    load()
  }, [])

  // Re-run search whenever query or data changes
  useEffect(() => {
    if (!query.trim() || !dataReady) { setResults([]); return }
    const q = query.toLowerCase().trim()
    const out: Result[] = []

    // Pages
    PAGES.forEach(p => {
      if (match(q, p.title, p.keywords, p.category))
        out.push({ type: 'page', title: p.title, subtitle: p.href, href: p.href })
    })

    // Notices
    notices.forEach(n => {
      if (match(q, n.Title, n.Category))
        out.push({
          type: 'notice',
          title: n.Title,
          subtitle: `${n.Category}${n.Date ? '  ·  ' + n.Date : ''}`,
          href: n.PdfUrl || '/notices',
          tag: n.IsNew === 'true' ? 'New' : n.Category,
        })
    })

    // Faculty
    faculty.forEach(f => {
      if (match(q, f.Name, f.Designation, f.Department, f.Qualification))
        out.push({
          type: 'faculty',
          title: f.Name,
          subtitle: `${f.Designation}  ·  ${f.Department}`,
          href: '/faculty',
          tag: f.Department,
        })
    })

    // Downloads
    downloads.forEach(d => {
      if (match(q, d.Title, d.Description, d.Category))
        out.push({
          type: 'download',
          title: d.Title,
          subtitle: `${d.Category}${d.FileSize ? '  ·  ' + d.FileSize : ''}`,
          href: d.DriveUrl || '/downloads',
          tag: d.Category,
        })
    })

    setResults(out)
  }, [query, dataReady, notices, faculty, downloads])

  const groups: { label: string; icon: string; type: Result['type'] }[] = [
    { label: 'Notices & Announcements', icon: '📋', type: 'notice' },
    { label: 'Faculty Members',          icon: '👨‍🏫', type: 'faculty' },
    { label: 'Downloads & Documents',    icon: '📄', type: 'download' },
    { label: 'Pages',                    icon: '🔗', type: 'page' },
  ]

  const grouped = groups.map(g => ({
    ...g,
    items: results.filter(r => r.type === g.type),
  })).filter(g => g.items.length > 0)

  return (
    <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>

      {/* Status line */}
      {query && !loading && (
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '28px' }}>
          {results.length > 0
            ? <><strong style={{ color: 'var(--text)' }}>{results.length} result{results.length !== 1 ? 's' : ''}</strong> for &ldquo;<strong style={{ color: 'var(--text)' }}>{query}</strong>&rdquo;</>
            : <>No results found for &ldquo;<strong style={{ color: 'var(--text)' }}>{query}</strong>&rdquo;. Try a different keyword.</>}
        </p>
      )}

      {loading && (
        <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
          <div style={{ marginBottom: '10px', fontSize: '22px' }}>⏳</div>
          Loading data&hellip;
        </div>
      )}

      {!query && !loading && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--muted)', fontSize: '13px' }}>
          <div style={{ fontSize: '32px', marginBottom: '12px', opacity: 0.4 }}>🔍</div>
          Use the search bar above to find notices, faculty, departments, downloads and more.
        </div>
      )}

      {/* Results grouped by type */}
      {grouped.map(g => (
        <div key={g.type} style={{ marginBottom: '32px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '11px', fontWeight: 700, color: 'var(--blue)',
            letterSpacing: '1px', textTransform: 'uppercase',
            marginBottom: '10px', paddingBottom: '8px',
            borderBottom: '2px solid var(--blue-light)',
          }}>
            <span>{g.icon}</span>
            {g.label}
            <span style={{ marginLeft: 'auto', background: 'var(--blue)', color: 'white', fontSize: '10px', padding: '2px 7px', borderRadius: '10px', fontWeight: 600, letterSpacing: 0 }}>
              {g.items.length}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
            {g.items.map((r, i) => (
              <a
                key={i}
                href={r.href}
                target={r.type === 'notice' && r.href.startsWith('http') ? '_blank' : undefined}
                rel={r.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  background: 'var(--white)',
                  padding: '13px 18px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  textDecoration: 'none',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--blue-light)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--white)')}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--blue)', marginBottom: '2px' }}>
                    {r.title}
                    {r.tag && (
                      <span style={{
                        display: 'inline-block', fontSize: '9px', fontWeight: 700,
                        letterSpacing: '0.5px', textTransform: 'uppercase',
                        padding: '2px 6px', marginLeft: '8px', borderRadius: '2px',
                        background: 'var(--blue-light)', color: 'var(--blue)',
                        verticalAlign: 'middle',
                      }}>{r.tag}</span>
                    )}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {r.subtitle}
                  </div>
                </div>
                <span style={{ color: 'var(--light-text)', fontSize: '16px', marginLeft: '12px', flexShrink: 0 }}>→</span>
              </a>
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
      <Suspense fallback={<div style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)' }}>Loading search…</div>}>
        <SearchResults />
      </Suspense>
      <Footer />
    </div>
  )
}
