import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import NoticeBoard from '@/components/NoticeBoard'
import Footer from '@/components/Footer'

export default function NoticesPage() {
  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />
      <div className="page-wrap-sm">
        <div style={{display:'flex',alignItems:'center',marginBottom:'24px'}}>
          <h1 style={{fontFamily:'Source Serif 4, serif',fontSize:'20px',fontWeight:600,color:'white',background:'var(--blue)',padding:'8px 16px'}}>
            Notices &amp; Announcements
          </h1>
          <div style={{flex:1,height:'2px',background:'var(--border)',alignSelf:'flex-end'}}></div>
        </div>
        <NoticeBoard limit={50} />
      </div>
      <Footer />
    </div>
  )
}
