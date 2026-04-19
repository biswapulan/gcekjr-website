'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { num: 30, suffix: '+', label: 'Years of Excellence' },
  { num: 7,  suffix: '',  label: 'UG Departments' },
  { num: 2500, suffix: '+', label: 'Alumni Network' },
  { num: 50, suffix: '+', label: 'Recruiting Companies' },
  { num: 85, suffix: '%', label: 'Placement Rate' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let n = 0
        const step = Math.ceil(target / 40)
        const t = setInterval(() => { n += step; if (n >= target) { setCount(target); clearInterval(t) } else setCount(n) }, 30)
      }
    })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <div ref={ref} className="stat-num">{count}{suffix}</div>
}

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      {stats.map((s, i) => (
        <div key={i} className="stat-item">
          <Counter target={s.num} suffix={s.suffix} />
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
