'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in'
  delay?: number
  className?: string
}

export default function AnimateOnScroll({ children, animation = 'fade-up', delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`

    const map: Record<string, string> = {
      'fade-up': 'translateY(28px)',
      'fade-in': 'translateY(0)',
      'slide-left': 'translateX(-28px)',
      'slide-right': 'translateX(28px)',
      'scale-in': 'scale(0.94)',
    }
    el.style.transform = map[animation] || 'translateY(28px)'

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = animation === 'scale-in' ? 'scale(1)' : 'translateY(0) translateX(0)'
        obs.disconnect()
      }
    }, { threshold: 0.1 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [animation, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
