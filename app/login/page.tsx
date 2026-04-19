'use client'
import Link from 'next/link'

export default function LoginPortal() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a1628',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Top bar */}
      <div style={{
        background: '#b5261e',
        padding: '7px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
      }}>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.5px' }}>
          Government College of Engineering, Keonjhar — Official Portal
        </span>
        <div className="login-topbar-badges" style={{ display: 'flex', gap: '20px' }}>
          {['AICTE Approved', 'BPUT Affiliated', 'NAAC Accredited'].map(b => (
            <span key={b} style={{ fontSize: '10px', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.5px' }}>{b}</span>
          ))}
        </div>
      </div>

      {/* Main area */}
      <div className="login-main" style={{
        flex: 1,
        display: 'flex',
        alignItems: 'stretch',
      }}>

        {/* Left panel — college identity */}
        <div className="login-left" style={{
          flex: 1,
          background: 'linear-gradient(160deg, #0d2240 0%, #1a3a6b 60%, #0a1628 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 48px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative background pattern */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
          {/* Accent rings */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '500px', height: '500px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }}/>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '340px', height: '340px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }}/>

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '380px' }}>
            {/* Logo */}
            <div style={{
              width: '110px', height: '110px',
              borderRadius: '50%',
              background: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
              padding: '10px',
            }}>
              <img
                src="/gcekjr-logo.png"
                alt="GCE Keonjhar"
                style={{ width: '88px', height: '88px', objectFit: 'contain' }}
              />
            </div>

            {/* College name */}
            <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '22px', fontWeight: 700, color: 'white', lineHeight: 1.3, marginBottom: '6px' }}>
              Government College of<br/>Engineering, Keonjhar
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '4px', letterSpacing: '0.3px' }}>
              ସରକାରୀ ଯାନ୍ତ୍ରୀକ ମହାବିଦ୍ୟାଳୟ, କେନ୍ଦୁଝରଗଡ଼
            </div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '36px', letterSpacing: '0.5px' }}>
              Jamunalia, Old Town, Keonjhar – 758002, Odisha
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {['Estd. 1995', 'AICTE Approved', 'BPUT Affiliated'].map(b => (
                <span key={b} style={{
                  fontSize: '10px', fontWeight: 600,
                  color: 'rgba(255,255,255,0.55)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '4px 10px',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}>
                  {b}
                </span>
              ))}
            </div>

            {/* Divider line */}
            <div style={{ width: '60px', height: '3px', background: '#b5261e', margin: '32px auto 0' }}/>
          </div>
        </div>

        {/* Right panel — portal selection */}
        <div className="login-right" style={{
          width: '420px',
          flexShrink: 0,
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '52px 44px',
        }}>
          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#b5261e', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
              Secure Access
            </div>
            <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '26px', fontWeight: 700, color: '#0a1628', lineHeight: 1.2, marginBottom: '8px' }}>
              Select Your Portal
            </h1>
            <p style={{ fontSize: '13px', color: '#5a6478', lineHeight: 1.6 }}>
              Choose the portal you want to access. Each portal is secured and restricted to authorised users only.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>

            {/* Admin Portal */}
            <Link href="/admin/login" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '18px 20px',
              border: '1.5px solid #d6dce8',
              textDecoration: 'none',
              transition: 'all 0.2s',
              background: '#f8f9fb',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#1a3a6b'
                e.currentTarget.style.background = '#f0f4fb'
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,58,107,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#d6dce8'
                e.currentTarget.style.background = '#f8f9fb'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: '46px', height: '46px', background: '#1a3a6b',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="1.8">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0a1628', marginBottom: '2px' }}>Admin Portal</div>
                <div style={{ fontSize: '11px', color: '#5a6478' }}>For college administrators and authorised staff</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" stroke="#1a3a6b" fill="none" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </Link>

            {/* Campus Desk */}
            <a href="https://campus-desk-new.vercel.app/login" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '18px 20px',
              border: '1.5px solid #d6dce8',
              textDecoration: 'none',
              transition: 'all 0.2s',
              background: '#f8f9fb',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#b5261e'
                e.currentTarget.style.background = '#fdf5f5'
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(181,38,30,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#d6dce8'
                e.currentTarget.style.background = '#f8f9fb'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: '46px', height: '46px', background: '#b5261e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="1.8">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0a1628', marginBottom: '2px' }}>Campus Desk</div>
                <div style={{ fontSize: '11px', color: '#5a6478' }}>Student & faculty academic portal</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" stroke="#b5261e" fill="none" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </a>
          </div>

          {/* Help text */}
          <div style={{
            padding: '14px 16px',
            background: '#f5f6f8',
            borderLeft: '3px solid #d6dce8',
            marginBottom: '24px',
          }}>
            <div style={{ fontSize: '11px', color: '#5a6478', lineHeight: 1.7 }}>
              <strong style={{ color: '#0a1628' }}>Need help?</strong> Contact the college office at{' '}
              <a href="mailto:principal@gcekjr.ac.in" style={{ color: '#1a3a6b', textDecoration: 'none', fontWeight: 500 }}>
                principal@gcekjr.ac.in
              </a>{' '}
              or call <strong style={{ color: '#0a1628' }}>06766-255002</strong>
            </div>
          </div>

          <Link href="/" style={{ fontSize: '12px', color: '#5a6478', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" stroke="#5a6478" fill="none" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
            Back to Main Website
          </Link>
        </div>
      </div>

      {/* Footer strip */}
      <div style={{
        background: '#060e1a',
        padding: '10px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        flexWrap: 'wrap',
        gap: '8px',
      }}>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>
          © 2026 Government College of Engineering, Keonjhar. All Rights Reserved.
        </span>
        <div style={{ display: 'flex', gap: '16px' }}>
          {[['RTI', '/rti'], ['NIRF', '/nirf']].map(([label, href]) => (
            <Link key={label} href={href} style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
