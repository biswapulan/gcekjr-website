export default function PageBanner({ crumb, title }: { crumb: string; title: string }) {
  return (
    <div style={{ background: 'var(--blue)', padding: '28px 32px', borderBottom: '3px solid var(--red)' }}>
      <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>
        {crumb}
      </p>
      <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>
        {title}
      </h1>
    </div>
  )
}
