'use client'
import { useEffect, useState } from 'react'

interface Slide { Tag: string; Title: string; Description: string; ImageUrl: string }

const defaultSlides: Slide[] = [
  { Tag: 'Silver Jubilee · 1995 – 2026', Title: 'Shaping Engineers\nfor North Odisha', Description: 'A premier government engineering institution offering 7 UG programmes, affiliated to BPUT and approved by AICTE — committed to technical excellence since 1995.', ImageUrl: '' },
  { Tag: 'Admissions Open · 2026-27', Title: 'Begin Your\nEngineering Journey', Description: 'Applications are now open for B.Tech programmes. Apply via OJEE portal for Civil, Mechanical, Electrical, CSE, Mining, Metallurgical & Mineral Engineering.', ImageUrl: '' },
  { Tag: 'Placements · 2024-25', Title: '85%+ Placement\nRate Achieved', Description: 'Our students are placed across top companies like Vedanta, Tata Steel, IMFA, NMDC and more with packages up to ₹18 LPA.', ImageUrl: '' },
]

export default function HeroSlider() {
  const [slides, setSlides] = useState<Slide[]>(defaultSlides)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    fetch('/api/slider').then(r => r.json()).then(data => {
      if (Array.isArray(data) && data.length > 0) setSlides(data)
    }).catch(() => {})
  }, [])

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [slides.length])

  const s = slides[current]

  return (
    <div className="hero">
      <div className="hero-bg">
        <svg viewBox="0 0 1200 340" style={{ width: '100%', height: '100%', opacity: 0.25 }} preserveAspectRatio="xMidYMid slice">
          <rect x="350" y="80" width="120" height="220" fill="#2a4f8a"/>
          <rect x="390" y="55" width="40" height="245" fill="#1e3d6f"/>
          <polygon points="350,80 470,80 430,40 390,40" fill="#3a6ab0"/>
          <rect x="500" y="120" width="80" height="180" fill="#2a4f8a"/>
          <rect x="620" y="100" width="200" height="200" fill="#2a4f8a" opacity="0.6"/>
          <rect x="660" y="80" width="80" height="220" fill="#1e3d6f" opacity="0.7"/>
          <rect x="300" y="318" width="900" height="22" fill="#0a1e38"/>
          <ellipse cx="320" cy="250" rx="18" ry="28" fill="#0d3320" opacity="0.8"/>
          <ellipse cx="850" cy="255" rx="16" ry="24" fill="#0d3320" opacity="0.7"/>
        </svg>
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-tag animate-fade-in">{s.Tag}</div>
        <h1 className="hero-title animate-fade-up anim-delay-1">{s.Title}</h1>
        <p className="hero-desc animate-fade-up anim-delay-2">{s.Description}</p>
        <div className="hero-btns animate-fade-up anim-delay-3">
          <a href="/academics" className="hero-btn-primary">Explore Programmes</a>
          <a href="/notices" className="hero-btn-secondary">View Notices</a>
        </div>
      </div>
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button key={i} className={`hero-dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </div>
  )
}
