import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="col brand">
            <img src="/images/iteration-2-images/footer/logo-footer.svg" alt="Teknolojik Yemekler" />
            <ul className="contact">
              <li>
                <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="" />
                <span>341 Londonderry Road, Istanbul Türkiye</span>
              </li>
              <li>
                <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="" />
                <span>aciktim@teknolojikyemekler.com</span>
              </li>
              <li>
                <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="" />
                <span>+90 216 123 45 67</span>
              </li>
            </ul>
          </div>

          <div className="col menu">
            <h5>Sicacik Menuler</h5>
            <ul>
              <li>Terminal Pizza</li>
              <li>5 Kisilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Tester Cesitli Mutlu Burger</li>
              <li>Position Absolute Aci Burger</li>
            </ul>
          </div>

          <div className="col insta">
            <h5>Instagram</h5>
            <div className="grid">
              <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="insta-0" />
              <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="insta-1" />
              <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="insta-2" />
              <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="insta-3" />
              <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="insta-4" />
              <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="insta-5" />
            </div>
          </div>
        </div>

        <div className="copy">© 2025 Teknolojik Yemekler.</div>
      </div>
    </footer>
  )
}
