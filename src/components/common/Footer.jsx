import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="brand">
          <img
            src="/images/iteration-2-images/footer/logo-footer.svg"
            alt="Teknolojik Yemekler"
          />
          <p className="tag">Lezzet, hiz ve teknoloji.</p>
        </div>

        <nav className="links" aria-label="Alt menü">
          <Link to="/">Anasayfa</Link>
          <Link to="/form">Siparis Ver</Link>
        </nav>

        <div className="icons" aria-hidden>
          <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="" />
          <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="" />
          <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="" />
        </div>
      </div>

      <div className="footer-insta">
        <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="insta-0" />
        <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="insta-1" />
        <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="insta-2" />
        <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="insta-3" />
        <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="insta-4" />
        <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="insta-5" />
      </div>

      <div className="copy">© 2025 Teknolojik Yemekler</div>
    </footer>
  )
}

