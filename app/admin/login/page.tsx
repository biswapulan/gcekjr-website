'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await signIn('credentials', { email, password, redirect: false })

    if (res?.ok) {
      router.push('/admin')
      router.refresh()
    } else {
      setError('Invalid email or password.')
      setLoading(false)
    }
  }

  return (
    <div style={{minHeight:'100vh',background:'var(--blue)',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{background:'white',width:'360px',padding:'40px',boxShadow:'0 8px 40px rgba(0,0,0,0.2)'}}>
        <div style={{textAlign:'center',marginBottom:'28px'}}>
          <div style={{fontFamily:'Source Serif 4, serif',fontSize:'20px',fontWeight:600,color:'var(--blue)'}}>GCEKJR Admin</div>
          <div style={{fontSize:'12px',color:'var(--muted)',marginTop:'4px'}}>Sign in to manage website content</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{marginBottom:'16px'}}>
            <label style={{fontSize:'11px',fontWeight:600,color:'var(--muted)',letterSpacing:'0.5px',textTransform:'uppercase',display:'block',marginBottom:'6px'}}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
              style={{width:'100%',border:'1px solid var(--border)',padding:'9px 12px',fontSize:'13px',outline:'none',fontFamily:'Source Sans 3, sans-serif'}}
              placeholder="principal@gcekjr.ac.in"/>
          </div>
          <div style={{marginBottom:'20px'}}>
            <label style={{fontSize:'11px',fontWeight:600,color:'var(--muted)',letterSpacing:'0.5px',textTransform:'uppercase',display:'block',marginBottom:'6px'}}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
              style={{width:'100%',border:'1px solid var(--border)',padding:'9px 12px',fontSize:'13px',outline:'none',fontFamily:'Source Sans 3, sans-serif'}}
              placeholder="••••••••"/>
          </div>
          {error && <div style={{background:'#fef2f2',border:'1px solid #fecaca',color:'#dc2626',fontSize:'12px',padding:'8px 12px',marginBottom:'16px'}}>{error}</div>}
          <button type="submit" disabled={loading}
            style={{width:'100%',background:'var(--blue)',color:'white',padding:'10px',fontSize:'13px',fontWeight:600,border:'none',cursor:'pointer',letterSpacing:'0.3px',opacity:loading?0.7:1}}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <div style={{textAlign:'center',marginTop:'20px'}}>
          <a href="/" style={{fontSize:'12px',color:'var(--muted)',textDecoration:'none'}}>← Back to website</a>
        </div>
      </div>
    </div>
  )
}