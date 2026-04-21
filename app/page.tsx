import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import NoticeStrip from '@/components/NoticeStrip'
import HeroSlider from '@/components/HeroSlider'
import NoticeBoard from '@/components/NoticeBoard'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import TestimonialSlider from '@/components/TestimonialSlider'
import RecruiterMarquee from '@/components/RecruiterMarquee'
import GalleryShowcase from '@/components/GalleryShowcase'
import BrochureDownloads from '@/components/BrochureDownloads'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PopupBanner from '@/components/PopupBanner'
import Link from 'next/link'

export const revalidate = 0

const departments = [
  { code: 'CE',  name: 'Civil Engineering',             since: 'Established 1997 · B.Tech 4 Years', href: '/departments/civil' },
  { code: 'CSE', name: 'Computer Science & Engineering', since: 'Established 2002 · B.Tech 4 Years', href: '/departments/cse' },
  { code: 'EE',  name: 'Electrical Engineering',         since: 'Established 1997 · B.Tech 4 Years', href: '/departments/electrical' },
  { code: 'ME',  name: 'Mechanical Engineering',         since: 'Established 1997 · B.Tech 4 Years', href: '/departments/mechanical' },
  { code: 'MME', name: 'Metallurgical & Materials Engg.', since: 'B.Tech 4 Years', href: '/departments/metallurgy' },
  { code: 'MiE', name: 'Mineral Engineering',            since: 'B.Tech 4 Years', href: '/departments/mineral' },
  { code: 'MnE', name: 'Mining Engineering',             since: 'Established 1995 · Flagship Dept.', href: '/departments/mining' },
]

export default function Home() {
  return (
    <div>
      <PopupBanner />
      <UtilBar />
      <Header />
      <Nav />
      <NoticeStrip />
      <HeroSlider />

      {/* Main content + Sidebar */}
      <div className="home-main">
        <div className="home-content">

          <AnimateOnScroll animation="fade-up">
            <NoticeBoard limit={5} />
            <div style={{ marginTop: '10px', textAlign: 'right' }}>
              <Link href="/notices" style={{ fontSize: '12px', color: 'var(--blue-mid)', fontWeight: 600 }}>
                View All Notices →
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <div style={{ marginTop: '36px', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
              <div className="section-heading">
                <h2>About the Institution</h2>
                <div className="section-heading-line" />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'var(--off)', border: '1px solid var(--border)', padding: '16px', marginBottom: '20px' }}>
              <div style={{ width: '72px', height: '90px', background: 'var(--blue-light)', border: '1px solid var(--border)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="36" height="36" viewBox="0 0 36 36">
                  <circle cx="18" cy="13" r="7" fill="#1a3a6b" opacity="0.3"/>
                  <path d="M4 34c0-8 28-8 28 0" fill="#1a3a6b" opacity="0.2"/>
                </svg>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '14px', fontWeight: 600, color: 'var(--blue)' }}>Prof. Saroj Kumar Sarangi</h3>
                <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>Principal, Government College of Engineering, Keonjhar</p>
                <blockquote style={{ fontSize: '12px', color: 'var(--text)', lineHeight: 1.7, marginTop: '8px', borderLeft: '3px solid var(--blue)', paddingLeft: '10px', fontStyle: 'italic' }}>
                  GCE Keonjhar remains committed to nurturing technically competent, ethically strong engineers who contribute meaningfully to society and industry alike.
                </blockquote>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '14px' }}>
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Government College of Engineering, Keonjhar</strong> was established in 1995 as a constituent college of Biju Patnaik University of Technology, Odisha. Rising from the legacy of the historic Orissa School of Mining Engineering (1962), it is the only government college providing engineering education in North Odisha.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px' }}>
              The college offers seven B.Tech programmes across disciplines including Mining, Civil, Mechanical, Electrical, Computer Science, Metallurgical, and Mineral Engineering.
            </p>
            <Link href="/about" style={{ color: 'var(--blue-mid)', fontSize: '12px', fontWeight: 600, borderBottom: '1px solid var(--blue-mid)', paddingBottom: '1px' }}>
              Read More →
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="home-sidebar">
          <Sidebar />
        </div>
      </div>

      {/* Departments */}
      <AnimateOnScroll animation="fade-up">
        <div className="dept-section">
          <div className="dept-section-inner">
            <div className="section-heading">
              <h2>Our Academic Departments</h2>
              <div className="section-heading-line" />
            </div>
            <div className="dept-scroll-row">
              {departments.map((d) => (
                <Link key={d.code} href={d.href} className="dept-card">
                  <div className="dept-code">{d.code}</div>
                  <div className="dept-name">{d.name}</div>
                  <div className="dept-since">{d.since}</div>
                  <span className="dept-arrow">→</span>
                </Link>
              ))}
              <div className="dept-count">
                <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '36px', fontWeight: 600, color: 'white' }}>7</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>UG Programmes</div>
              </div>
            </div>
            <div className="dept-scroll-fade" />
          </div>
        </div>
      </AnimateOnScroll>

      {/* Testimonials */}
      <AnimateOnScroll animation="fade-up">
        <TestimonialSlider />
      </AnimateOnScroll>

      {/* Brochure Downloads */}
      <AnimateOnScroll animation="fade-up">
        <BrochureDownloads />
      </AnimateOnScroll>

      {/* Recruiters Marquee */}
      <RecruiterMarquee />

      {/* Gallery Showcase */}
      <AnimateOnScroll animation="fade-up">
        <GalleryShowcase />
      </AnimateOnScroll>

      <Footer />
    </div>
  )
}