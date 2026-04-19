import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a1628 0%, #1a3a6b 60%, #0d2240 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '32px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="g" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)' }} />
      <div style={{ position: 'absolute', bottom: '-100px', left: '-60px', width: '280px', height: '280px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)' }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Logo */}
        <img src="/gcekjr-logo.png" alt="GCE Keonjhar" style={{ width: '72px', height: '72px', objectFit: 'contain', marginBottom: '20px', opacity: 0.85 }} />

        {/* 404 */}
        <div style={{
          fontFamily: 'Source Serif 4, serif',
          fontSize: '120px',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.08)',
          lineHeight: 1,
          letterSpacing: '-4px',
          marginBottom: '-20px',
          userSelect: 'none',
        }}>404</div>

        <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '22px', fontWeight: 600, color: 'white', marginBottom: '10px' }}>
          Page Not Found
        </div>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '400px', marginBottom: '32px' }}>
          The page you're looking for doesn't exist or may have been moved. Please use the navigation or return to the homepage.
        </p>

        {/* Quick links */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'Notices', href: '/notices' },
            { label: 'Departments', href: '/departments' },
            { label: 'Contact', href: '/contact' },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '12px',
              fontWeight: 600,
              padding: '8px 18px',
              textDecoration: 'none',
            }}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'white',
          color: 'var(--blue)',
          fontSize: '13px',
          fontWeight: 600,
          padding: '12px 28px',
          textDecoration: 'none',
        }}>
          ← Return to Homepage
        </Link>
      </div>
    </div>
  )
}
