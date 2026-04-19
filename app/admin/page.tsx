'use client'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import dynamic from 'next/dynamic'

// Lazy load each tab
const NoticesTab     = dynamic(() => import('./tabs/NoticesTab'))
const EventsTab      = dynamic(() => import('./tabs/EventsTab'))
const FacultyTab     = dynamic(() => import('./tabs/FacultyTab'))
const GalleryTab     = dynamic(() => import('./tabs/GalleryTab'))
const SliderTab      = dynamic(() => import('./tabs/SliderTab'))
const ContactTab     = dynamic(() => import('./tabs/ContactTab'))
const DownloadsTab   = dynamic(() => import('./tabs/DownloadsTab'))
const NirfTab        = dynamic(() => import('./tabs/NirfTab'))
const RecruitersTab  = dynamic(() => import('./tabs/RecruitersTab'))
const TestimonialsTab= dynamic(() => import('./tabs/TestimonialsTab'))

type Tab = 'notices'|'events'|'faculty'|'gallery'|'slider'|'contact'|'downloads'|'nirf'|'recruiters'|'testimonials'

const tabs: { key: Tab; label: string; icon: string; group: string }[] = [
  { key: 'notices',      label: 'Notices',        icon: '📋', group: 'Content' },
  { key: 'events',       label: 'Events',          icon: '📅', group: 'Content' },
  { key: 'faculty',      label: 'Faculty',         icon: '👩‍🏫', group: 'Content' },
  { key: 'gallery',      label: 'Gallery',         icon: '🖼',  group: 'Content' },
  { key: 'slider',       label: 'Hero Slider',     icon: '🎞',  group: 'Content' },
  { key: 'recruiters',   label: 'Recruiters',      icon: '🏢', group: 'Content' },
  { key: 'testimonials', label: 'Testimonials',    icon: '💬', group: 'Content' },
  { key: 'downloads',    label: 'Downloads',       icon: '⬇',  group: 'Documents' },
  { key: 'nirf',         label: 'NIRF & Reports',  icon: '📄', group: 'Documents' },
  { key: 'contact',      label: 'Contact Info',    icon: '📞', group: 'Settings' },
]

function TabComponent({ tab }: { tab: Tab }) {
  const map: Record<Tab, React.ReactNode> = {
    notices: <NoticesTab />, events: <EventsTab />, faculty: <FacultyTab />,
    gallery: <GalleryTab />, slider: <SliderTab />, contact: <ContactTab />,
    downloads: <DownloadsTab />, nirf: <NirfTab />, recruiters: <RecruitersTab />,
    testimonials: <TestimonialsTab />,
  }
  return <>{map[tab]}</>
}

export default function AdminPage() {
  const { data: session, status } = useSession()
  const [tab, setTab] = useState<Tab>('notices')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (status === 'loading') return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--off)', color: 'var(--muted)', fontSize: '13px' }}>
      Loading...
    </div>
  )
  if (!session) return null

  const groups = [...new Set(tabs.map(t => t.group))]
  const currentTab = tabs.find(t => t.key === tab)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--off)', display: 'flex', flexDirection: 'column' }}>

      {/* Top Bar */}
      <div style={{ background: 'var(--blue)', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '52px', flexShrink: 0, borderBottom: '2px solid var(--red)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Mobile hamburger */}
          <button
            className="admin-hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: 'white', marginRight: '4px' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <div style={{ width: '28px', height: '28px', background: 'rgba(255,255,255,0.15)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>⚙</div>
          <div>
            <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '14px', color: 'white', fontWeight: 600, lineHeight: 1 }}>GCEKJR Admin</div>
            <div className="admin-subtitle" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>Government College of Engineering, Keonjhar</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="admin-user-email" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Signed in as <strong style={{ color: 'rgba(255,255,255,0.8)' }}>{session.user?.email}</strong></div>
          <a href="/" target="_blank" rel="noopener noreferrer" className="admin-view-site" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', textDecoration: 'none', padding: '5px 10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '2px', whiteSpace: 'nowrap' }}>
            View Site ↗
          </a>
          <button onClick={() => signOut()} style={{ background: 'var(--red)', color: 'white', border: 'none', padding: '6px 14px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', borderRadius: '2px', whiteSpace: 'nowrap' }}>
            Sign Out
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 40 }}
          className="admin-overlay"
        />
      )}

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>

        {/* Sidebar */}
        <div
          className={`admin-sidebar ${sidebarOpen ? 'admin-sidebar-open' : ''}`}
          style={{ width: '210px', background: 'var(--white)', borderRight: '1px solid var(--border)', flexShrink: 0, overflowY: 'auto', padding: '16px 0 24px' }}
        >
          {groups.map(group => (
            <div key={group} style={{ marginBottom: '8px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--light-text)', textTransform: 'uppercase', letterSpacing: '1px', padding: '6px 18px 4px' }}>{group}</div>
              {tabs.filter(t => t.group === group).map(t => (
                <button key={t.key} onClick={() => { setTab(t.key); setSidebarOpen(false) }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '9px',
                    width: '100%', textAlign: 'left', padding: '9px 18px',
                    fontSize: '13px', border: 'none', cursor: 'pointer',
                    background: tab === t.key ? 'var(--blue-light)' : 'transparent',
                    color: tab === t.key ? 'var(--blue)' : 'var(--text)',
                    fontWeight: tab === t.key ? 600 : 400,
                    borderLeft: tab === t.key ? '3px solid var(--blue)' : '3px solid transparent',
                    transition: 'all 0.15s',
                  }}>
                  <span style={{ fontSize: '15px', lineHeight: 1 }}>{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </div>
          ))}

          {/* Sheet setup guide */}
          <div style={{ margin: '16px 12px 0', background: 'var(--blue-light)', border: '1px solid var(--border)', borderRadius: '2px', padding: '10px 12px' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Google Sheets Setup</div>
            <div style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: 1.6 }}>
              Required sheet tabs:<br />
              Notices · Events · Faculty<br />
              Gallery · Slider · Contact<br />
              Downloads · Nirf<br />
              Recruiters · Testimonials
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px 20px' }} className="admin-content">
          {/* Mobile breadcrumb */}
          <div className="admin-mobile-breadcrumb" style={{ display: 'none', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <button
              onClick={() => setSidebarOpen(true)}
              style={{ background: 'var(--blue-light)', border: '1px solid var(--border)', color: 'var(--blue)', padding: '5px 10px', fontSize: '11px', fontWeight: 600, cursor: 'pointer', borderRadius: '2px', display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
              Menu
            </button>
            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>
              {currentTab?.icon} {currentTab?.label}
            </span>
          </div>
          <TabComponent tab={tab} />
        </div>
      </div>

    </div>
  )
}
