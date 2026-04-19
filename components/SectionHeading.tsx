export default function SectionHeading({ title }: { title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
      <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>
        {title}
      </h2>
      <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
    </div>
  )
}
