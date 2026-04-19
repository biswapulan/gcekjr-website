'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Weather {
  temp: number; feels: number; humidity: number; wind: number
  aqi: number; desc: string; icon: string; loaded: boolean
}

function WeatherWidget() {
  const [w, setW] = useState<Weather>({ temp: 0, feels: 0, humidity: 0, wind: 0, aqi: 0, desc: '', icon: '', loaded: false })
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    const lat = 21.6446, lon = 85.5748
    Promise.all([
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code`),
      fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=european_aqi,pm2_5`)
    ]).then(([wRes, aRes]) => Promise.all([wRes.json(), aRes.json()]))
      .then(([wd, ad]) => {
        const code = wd.current.weather_code
        const icon = code <= 1 ? '☀️' : code <= 3 ? '⛅' : code <= 48 ? '🌫️' : code <= 67 ? '🌧️' : code <= 77 ? '❄️' : code <= 82 ? '🌦️' : '⛈️'
        const desc = code <= 1 ? 'Clear Sky' : code <= 3 ? 'Partly Cloudy' : code <= 48 ? 'Foggy' : code <= 67 ? 'Rainy' : code <= 77 ? 'Snowy' : code <= 82 ? 'Showers' : 'Thunderstorm'
        setW({
          temp: Math.round(wd.current.temperature_2m),
          feels: Math.round(wd.current.apparent_temperature),
          humidity: wd.current.relative_humidity_2m,
          wind: Math.round(wd.current.wind_speed_10m),
          aqi: ad.current?.european_aqi ?? 0,
          desc, icon, loaded: true
        })
      }).catch(() => {})
  }, [])

  useEffect(() => {
    setTime(new Date())
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const aqiInfo = (v: number): { label: string; color: string; bg: string } => {
    if (v <= 20) return { label: 'Good', color: '#4ade80', bg: 'rgba(74,222,128,0.12)' }
    if (v <= 40) return { label: 'Fair', color: '#a3e635', bg: 'rgba(163,230,53,0.12)' }
    if (v <= 60) return { label: 'Moderate', color: '#facc15', bg: 'rgba(250,204,21,0.12)' }
    if (v <= 80) return { label: 'Poor', color: '#fb923c', bg: 'rgba(251,146,60,0.12)' }
    return { label: 'Very Poor', color: '#f87171', bg: 'rgba(248,113,113,0.12)' }
  }
  const aqi = aqiInfo(w.aqi)
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

  return (
    <div style={{
      background: 'linear-gradient(145deg, rgba(26,58,107,0.6) 0%, rgba(10,22,40,0.8) 100%)',
      border: '1px solid rgba(255,255,255,0.1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      {/* Top bar — clock + location */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '12px 16px',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(0,0,0,0.2)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
          </svg>
          <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Live Weather · Keonjhar</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'white', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.5px' }}>
            {time ? time.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).toUpperCase() : '--:--:-- --'}
          </div>
          <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', marginTop: '1px' }}>
            {time ? `${days[time.getDay()]}, ${time.getDate()} ${months[time.getMonth()]} ${time.getFullYear()}` : ''}
          </div>
        </div>
      </div>

      {w.loaded ? (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '14px 16px', gap: '12px', overflow: 'hidden' }}>
          {/* Main temp row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ fontSize: '44px', lineHeight: 1, filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.4))', flexShrink: 0 }}>{w.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                <span style={{ fontFamily: 'Source Serif 4, serif', fontSize: '42px', fontWeight: 600, color: 'white', lineHeight: 1 }}>{w.temp}</span>
                <span style={{ fontSize: '20px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>°C</span>
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginTop: '1px', fontWeight: 500 }}>{w.desc}</div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>Feels like {w.feels}°C</div>
            </div>
          </div>

          {/* Stats row — 3 cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', flexShrink: 0 }}>
            {/* Humidity */}
            <div style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)', padding: '8px 10px', borderRadius: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="rgba(96,165,250,0.9)" stroke="none"><path d="M12 2C6 2 2 9 2 13a10 10 0 0020 0c0-4-4-11-10-11z"/></svg>
                <span style={{ fontSize: '9px', color: 'rgba(96,165,250,0.8)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>Humidity</span>
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'white', lineHeight: 1 }}>{w.humidity}<span style={{ fontSize: '11px', opacity: 0.6 }}>%</span></div>
            </div>

            {/* Wind */}
            <div style={{ background: 'rgba(167,243,208,0.08)', border: '1px solid rgba(167,243,208,0.15)', padding: '8px 10px', borderRadius: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(167,243,208,0.8)" strokeWidth="2.5"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>
                <span style={{ fontSize: '9px', color: 'rgba(167,243,208,0.8)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>Wind Speed</span>
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'white', lineHeight: 1 }}>{w.wind}<span style={{ fontSize: '11px', opacity: 0.6 }}> km/h</span></div>
            </div>

            {/* AQI */}
            <div style={{ background: aqi.bg, border: `1px solid ${aqi.color}30`, padding: '8px 10px', borderRadius: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={aqi.color} strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span style={{ fontSize: '9px', color: aqi.color, textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>Air Quality</span>
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: aqi.color, lineHeight: 1 }}>{w.aqi}<span style={{ fontSize: '9px', opacity: 0.7, marginLeft: '2px' }}>AQI</span></div>
              <div style={{ fontSize: '9px', color: aqi.color, opacity: 0.8, marginTop: '2px', fontWeight: 600 }}>{aqi.label}</div>
            </div>
          </div>

          <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.2)', textAlign: 'right', marginTop: 'auto', flexShrink: 0 }}>
            Source: Open-Meteo · Refreshes on page load
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '32px', animation: 'fadeIn 1s ease infinite alternate' }}>🌤️</div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.5px' }}>Fetching weather data…</div>
        </div>
      )}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <div style={{ width: '52px', height: '52px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px', flexShrink: 0 }}>
              <img src="/gcekjr-logo.png" alt="GCE Keonjhar" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            </div>
            <div style={{ fontFamily: 'Source Serif 4, serif', lineHeight: 1.4 }}>
              <div style={{ fontSize: '13px', color: 'white' }}>Govt. College of Engineering</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Keonjhar, Odisha</div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>ସରକାରୀ ଯାନ୍ତ୍ରୀକ ମହାବିଦ୍ୟାଳୟ, କେନ୍ଦୁଝରଗଡ଼</div>
            </div>
          </div>
          <p style={{ fontSize: '12px', lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
            North Odisha's premier government engineering institution, imparting quality technical education since 1995. Affiliated to BPUT and approved by AICTE, New Delhi.
          </p>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 2 }}>
            <strong style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Address</strong>&nbsp; Jamunalia, Old Town, Keonjhar – 758002, Odisha<br/>
            <strong style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Email</strong>&nbsp; principal@gcekjr.ac.in &nbsp;|&nbsp; establishment@gcekjr.ac.in<br/>
            <strong style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Phone</strong>&nbsp; 06766-255002
          </div>
        </div>

        <div>
          <div className="footer-col-title">Academics</div>
          {[['UG Programmes','/academics'],['Time Table','/academics/timetable'],['Syllabus (BPUT)','https://bput.ac.in'],['Lecture Notes','/academics/lecture-notes'],['Our Faculty','/faculty'],['Semester Results','/academics/results']].map(([label,href])=>(
            <a key={label} href={href} className="footer-link" target={href.startsWith('http')?'_blank':undefined} rel={href.startsWith('http')?'noopener noreferrer':undefined}>{label}</a>
          ))}
        </div>

        <div>
          <div className="footer-col-title">Campus Life</div>
          {[['Student Activity Center','/campus-life/student-activity-center'],['Clubs & Societies','/campus-life/clubs'],['NCC','/campus-life/ncc'],['Halls of Residence','/campus-life/halls-of-residence'],['Facilities','/campus-life/facilities'],['Placement Cell','/placement']].map(([label,href])=>(
            <a key={label} href={href} className="footer-link">{label}</a>
          ))}
        </div>

        <div>
          <div className="footer-col-title">Regulatory</div>
          {[['AICTE','https://aicte-india.org'],['BPUT','https://bput.ac.in'],['OJEE','https://ojee.nic.in'],['SDTE Odisha','https://sdte.odisha.gov.in'],['Govt. of Odisha','https://odisha.gov.in'],['NIRF Ranking','/nirf'],['RTI','/rti']].map(([label,href])=>(
            <a key={label} href={href} className="footer-link" target={href.startsWith('http')?'_blank':undefined} rel={href.startsWith('http')?'noopener noreferrer':undefined}>{label}</a>
          ))}
        </div>
      </div>

      {/* Map + Weather split row */}
      <div className="footer-map-row">
        <div className="footer-map-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" style={{ flexShrink: 0 }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Find Us &amp; Local Weather</span>
          <a href="https://maps.google.com/?q=21.6281,85.5817" target="_blank" rel="noopener noreferrer" className="footer-map-directions">
            Get Directions →
          </a>
        </div>
        <div className="footer-map-split">
          <div className="footer-map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.494009654941!2d85.57475607462548!3d21.64463208016332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1f02f2f558f05b%3A0x3406cba4b2bdd1b!2sGovernment%20College%20of%20Engineering%20Keonjhar!5e0!3m2!1sen!2sin!4v1776589384344!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GCE Keonjhar Location"
            />
          </div>
          <div className="footer-weather">
            <WeatherWidget />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Government College of Engineering, Keonjhar. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <Link href="/rti" className="footer-bottom-link">RTI</Link>
          <Link href="/nirf" className="footer-bottom-link">NIRF</Link>
          <span>Privacy Policy</span>
          <span>Sitemap</span>
        </div>
      </div>
    </footer>
  )
}
