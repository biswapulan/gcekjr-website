'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about', dropdown: [
    { label: 'About GCE', href: '/about' },
    { label: 'Discover GCE Keonjhar', href: '/about/discover-gce' },
    { label: 'Mission & Vision', href: '/about/mission-vision' },
    { label: "Principal's Message", href: '/about/principals-message' },
    { label: 'Alumni Association', href: '/about/alumni-association' },
    { label: 'Board of Governors', href: '/about/board-of-governors' },
  ]},
  { label: 'Academics', href: '/academics', dropdown: [
    { label: 'UG Programmes', href: '/academics' },
    { label: 'Time Table', href: '/academics/timetable' },
    { label: 'Syllabus', href: '/academics/syllabus' },
    { label: 'Our Faculty', href: '/faculty' },
    { label: 'Results', href: '/academics/results' },
    { label: 'Lecture Notes', href: '/academics/lecture-notes' },
  ]},
  { label: 'Admission', href: '/admission', dropdown: [
    { label: 'UG Admission', href: '/admission' },
    { label: 'Scholarship', href: '/admission/scholarship' },
    { label: 'Anti-Ragging Cell', href: '/admission/anti-ragging' },
    { label: 'AICTE Anti-Ragging Guidelines', href: '/admission/aicte-guidelines' },
  ]},
  { label: 'Departments', href: '/departments', dropdown: [
    { label: 'Mining Engineering', href: '/departments/mining' },
    { label: 'Civil Engineering', href: '/departments/civil' },
    { label: 'Mechanical Engineering', href: '/departments/mechanical' },
    { label: 'Electrical Engineering', href: '/departments/electrical' },
    { label: 'Computer Science & Engg.', href: '/departments/cse' },
    { label: 'Metallurgical & Materials', href: '/departments/metallurgy' },
    { label: 'Mineral Engineering', href: '/departments/mineral' },
  ]},
  { label: 'Faculty', href: '/faculty' },
  { label: 'Campus Life', href: '/campus-life/student-activity-center', dropdown: [
    { label: 'Student Activity Center', href: '/campus-life/student-activity-center' },
    { label: 'Clubs', href: '/campus-life/clubs' },
    { label: 'NCC', href: '/campus-life/ncc' },
    { label: 'Halls of Residence', href: '/campus-life/halls-of-residence' },
    { label: 'Facilities', href: '/campus-life/facilities' },
  ]},
  { label: 'Extension Activities', href: '/extension/conferences', dropdown: [
    { label: 'Conferences / Seminars / Workshops', href: '/extension/conferences' },
    { label: 'Internships', href: '/extension/internships' },
    { label: 'Center for Competitive Exams', href: '/extension/competitive-exams' },
    { label: 'Research Works', href: '/extension/research' },
  ]},
  { label: 'Placement', href: '/placement' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Notices', href: '/notices' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const path = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const isActive = (href: string) => path === href || (href !== '/' && path.startsWith(href + '/'))

  return (
    <>
      <nav className="main-nav">
        {/* Desktop nav */}
        <div className="nav-desktop">
          {navItems.map(item => (
            <div key={item.href} className="nav-item-wrap">
              <Link
                href={item.href}
                className={`nav-link ${isActive(item.href) ? 'nav-link-active' : ''}`}
              >
                {item.label}
                {item.dropdown && (
                  <svg width="8" height="8" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.7)" fill="none" strokeWidth="3">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                )}
              </Link>
              {item.dropdown && (
                <div className="nav-dropdown">
                  {item.dropdown.map(sub => (
                    <Link key={sub.href} href={sub.href} className="nav-dropdown-link">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="nav-ext-links">
          <a href="https://bput.ac.in" target="_blank" rel="noopener noreferrer" className="nav-ext-link">BPUT</a>
          <a href="https://ojee.nic.in" target="_blank" rel="noopener noreferrer" className="nav-ext-link">OJEE</a>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          <span/><span/><span/>
        </button>
      </nav>

      {/* Overlay */}
      <div className={`nav-overlay ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)} />

      {/* Mobile Drawer */}
      <div className={`nav-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-logo">
            <img src="/gcekjr-logo.jpg" alt="GCE" />
            <div className="drawer-logo-text">GCE Keonjhar<br /><span style={{ fontSize: '10px', opacity: 0.6 }}>Official Website</span></div>
          </div>
          <button className="drawer-close" onClick={() => setDrawerOpen(false)}>✕</button>
        </div>

        <div className="drawer-nav">
          {navItems.map(item => (
            <div key={item.href} className="drawer-item">
              {item.dropdown ? (
                <>
                  <button
                    className={`drawer-link ${isActive(item.href) ? 'drawer-link-active' : ''}`}
                    onClick={() => setOpenAccordion(openAccordion === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg
                      className={`drawer-chevron ${openAccordion === item.label ? 'open' : ''}`}
                      width="14" height="14" viewBox="0 0 24 24"
                      stroke="rgba(255,255,255,0.7)" fill="none" strokeWidth="2.5"
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>
                  <div className={`drawer-sub ${openAccordion === item.label ? 'open' : ''}`}>
                    {item.dropdown.map(sub => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="drawer-sub-link"
                        onClick={() => setDrawerOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`drawer-link ${isActive(item.href) ? 'drawer-link-active' : ''}`}
                  onClick={() => setDrawerOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="drawer-footer">
          <a href="https://bput.ac.in" target="_blank" rel="noopener noreferrer" className="drawer-ext-btn">BPUT</a>
          <a href="https://ojee.nic.in" target="_blank" rel="noopener noreferrer" className="drawer-ext-btn">OJEE</a>
          <a href="/login" className="drawer-ext-btn" onClick={() => setDrawerOpen(false)}>Login</a>
        </div>
      </div>
    </>
  )
}
