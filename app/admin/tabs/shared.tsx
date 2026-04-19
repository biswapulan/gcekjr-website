// Shared components used across all admin tabs

export function SectionHead({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '18px', fontWeight: 600, color: 'var(--blue)' }}>{title}</h2>
      {subtitle && <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '3px' }}>{subtitle}</p>}
    </div>
  )
}

export function Input({ label, value, onChange, placeholder, type = 'text', hint }: {
  label: string; value: string; onChange: (v: string) => void
  placeholder?: string; type?: string; hint?: string
}) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '4px' }}>{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{ width: '100%', border: '1px solid var(--border)', padding: '8px 10px', fontSize: '13px', outline: 'none', fontFamily: 'Source Sans 3, sans-serif', background: 'var(--input-bg)', color: 'var(--text)', borderRadius: '2px' }} />
      {hint && <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px' }}>{hint}</div>}
    </div>
  )
}

export function Textarea({ label, value, onChange, placeholder, rows = 3 }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number
}) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '4px' }}>{label}</label>
      <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={rows}
        style={{ width: '100%', border: '1px solid var(--border)', padding: '8px 10px', fontSize: '13px', outline: 'none', fontFamily: 'Source Sans 3, sans-serif', background: 'var(--input-bg)', color: 'var(--text)', resize: 'vertical', borderRadius: '2px' }} />
    </div>
  )
}

export function AddCard({ title, children, onSubmit, btnLabel = 'Add' }: {
  title: string; children: React.ReactNode; onSubmit: () => void; btnLabel?: string
}) {
  return (
    <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', padding: '20px', marginBottom: '20px', borderRadius: '2px' }}>
      <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid var(--border)' }}>{title}</div>
      {children}
      <button onClick={onSubmit}
        style={{ background: 'var(--blue)', color: 'white', border: 'none', padding: '9px 22px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', borderRadius: '2px', marginTop: '4px' }}>
        {btnLabel}
      </button>
    </div>
  )
}

export function Flash({ msg, type }: { msg: string; type: 'success' | 'error' | '' }) {
  if (!msg) return null
  const styles = {
    success: { background: '#f0fdf4', border: '1px solid #86efac', color: '#166534' },
    error:   { background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626' },
    '':      {},
  }
  return (
    <div style={{ ...styles[type], padding: '10px 16px', marginBottom: '16px', fontSize: '13px', borderRadius: '2px' }}>
      {type === 'success' ? '✓ ' : '✕ '}{msg}
    </div>
  )
}

export function EmptyState({ msg }: { msg: string }) {
  return (
    <div style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px', background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '2px' }}>
      <div style={{ fontSize: '28px', marginBottom: '8px', opacity: 0.4 }}>📭</div>
      {msg}
    </div>
  )
}

export function LoadingState() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
      Loading...
    </div>
  )
}

export const thStyle = { padding: '9px 12px', fontSize: '11px', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase' as const, letterSpacing: '0.5px', borderBottom: '2px solid var(--border)', background: 'var(--off)', textAlign: 'left' as const }
export const tdStyle = { padding: '10px 12px', fontSize: '13px', borderBottom: '1px solid var(--border)', color: 'var(--text)', verticalAlign: 'middle' as const }

export function DeleteBtn({ onDelete }: { onDelete: () => void }) {
  return (
    <button onClick={onDelete}
      style={{ background: '#fee2e2', color: '#dc2626', border: '1px solid #fecaca', padding: '4px 12px', fontSize: '11px', fontWeight: 600, cursor: 'pointer', borderRadius: '2px' }}>
      Delete
    </button>
  )
}

export function Table({ headers, children }: { headers: string[]; children: React.ReactNode }) {
  return (
    <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '2px', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '480px' }}>
        <thead>
          <tr>
            {headers.map(h => <th key={h} style={thStyle}>{h}</th>)}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
