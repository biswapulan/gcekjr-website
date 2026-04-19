'use client'
import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: "GCE Keonjhar graduates consistently demonstrate strong technical fundamentals and a solid work ethic. Our association with the college spans over a decade and we continue to hire from their mining and metallurgy departments every year.",
    name: "Mr. Rajesh Kumar Nair",
    designation: "Head – HR & Talent Acquisition",
    company: "Vedanta Resources",
    initial: "V",
  },
  {
    quote: "The quality of engineering education at GCE Keonjhar is evident in the performance of students we've recruited. They adapt quickly to industrial environments and bring genuine problem-solving abilities to the table.",
    name: "Ms. Priyanka Sahoo",
    designation: "Campus Recruitment Lead",
    company: "Tata Steel Ltd.",
    initial: "T",
  },
  {
    quote: "We have been recruiting from GCE Keonjhar for several years. The students show a remarkable blend of domain knowledge and professional readiness. IMFA is proud to be a long-standing industry partner of this institution.",
    name: "Mr. Suresh Panda",
    designation: "General Manager – HR",
    company: "IMFA (Indian Metals & Ferro Alloys)",
    initial: "I",
  },
  {
    quote: "Civil and Electrical graduates from GCE Keonjhar have consistently performed well in our infrastructure projects. The college produces engineers who are both technically sound and professionally mature.",
    name: "Mr. Anil Sharma",
    designation: "Head – Talent Management",
    company: "L&T Infrastructure",
    initial: "L",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => setCurrent(c => (c + 1) % testimonials.length)
  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(next, 5000)
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, current])

  const t = testimonials[current]

  return (
    <section className="testimonial-section" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="section-heading">
          <h2>What Our Recruiters Say</h2>
          <div className="section-heading-line" />
        </div>

        <div className="testimonial-slider" style={{ position: 'relative' }}>
          <button className="testimonial-nav testimonial-nav-prev" onClick={prev} aria-label="Previous">
            <svg width="14" height="14" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div className="testimonial-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-quote-mark">"</div>
                <p className="testimonial-text">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.designation}</div>
                    <div className="testimonial-company">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="testimonial-nav testimonial-nav-next" onClick={next} aria-label="Next">
            <svg width="14" height="14" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button key={i} className={`testimonial-dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
