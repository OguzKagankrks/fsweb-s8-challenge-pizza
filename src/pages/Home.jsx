import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <main className='home'>
      <div className='container'>
        {/* HERO BANNER */}
        <section className='hero-banner'>
          <div className='hero-inner'>
            <h1 className='site-brand'>Teknolojik Yemekler</h1>
            <p className='hero-sub'>firsati kacirma</p>
            <h2 className='hero-title'>KOD ACIKTIRIR<br/>PIZZA, DOYURUR</h2>
            <Link className='btn-primary' to='/form'>ACIKTIM</Link>
            <img className='hero-pizza' src='/images/iteration-2-images/pictures/food-1.png' alt='Pizza' />
          </div>
          <div className='categories-bar'>
            <ul>
              <li><img src='/images/iteration-2-images/icons/1.svg' alt=''/> YENI! Kore</li>
              <li><img src='/images/iteration-2-images/icons/2.svg' alt=''/> Pizza</li>
              <li><img src='/images/iteration-2-images/icons/3.svg' alt=''/> Burger</li>
              <li><img src='/images/iteration-2-images/icons/4.svg' alt=''/> Kizartmalar</li>
              <li><img src='/images/iteration-2-images/icons/5.svg' alt=''/> Fast food</li>
              <li><img src='/images/iteration-2-images/icons/6.svg' alt=''/> Gazi icecek</li>
            </ul>
          </div>
        </section>

        {/* PROMOS */}
        <section className='promos'>
          <article className='promo promo-large'>
            <div className='promo-content'>
              <h3>Ozel Lezzetus</h3>
              <p>Position Absolute Aci Burger</p>
              <Link to='/form' className='btn-ghost'>siparis ver</Link>
            </div>
            <img src='/images/iteration-2-images/pictures/food-2.png' alt='' />
          </article>
          <article className='promo promo-dark'>
            <div className='promo-content'>
              <h4>Hackathlon Burger Menu</h4>
              <Link to='/form' className='btn-ghost'>siparis ver</Link>
            </div>
            <img src='/images/iteration-2-images/cta/kart-3.png' alt='' />
          </article>
          <article className='promo promo-warm'>
            <div className='promo-content'>
              <h4>Çoooook hizli npm gibi kurye</h4>
              <Link to='/form' className='btn-ghost'>siparis ver</Link>
            </div>
            <img src='/images/iteration-2-images/cta/kart-2.png' alt='' />
          </article>
        </section>

        {/* POPULAR */}
        <section className='popular'>
          <p className='section-kicker'>en cok paketlenen menuler</p>
          <h3 className='section-title'>Aciktiran Kodlara Doyuran Lezzetler</h3>

          <div className='chips'>
            <span className='chip'>Ramen</span>
            <span className='chip active'>Pizza</span>
            <span className='chip'>Burger</span>
            <span className='chip'>French fries</span>
            <span className='chip'>Fast food</span>
            <span className='chip'>Soft drinks</span>
          </div>

          <div className='products'>
            <article className='product'>
              <img src='/images/iteration-2-images/pictures/food-1.png' alt='Terminal Pizza' />
              <h4>Terminal Pizza</h4>
              <div className='meta'><span>4.9</span><span>(200)</span><strong>60₺</strong></div>
            </article>
            <article className='product'>
              <img src='/images/iteration-2-images/pictures/food-2.png' alt='Position Absolute Aci Pizza' />
              <h4>Position Absolute Aci Pizza</h4>
              <div className='meta'><span>4.9</span><span>(829)</span><strong>85₺</strong></div>
            </article>
            <article className='product'>
              <img src='/images/iteration-2-images/pictures/food-3.png' alt='useEffect Tavuklu Burger' />
              <h4>useEffect Tavuklu Burger</h4>
              <div className='meta'><span>4.9</span><span>(462)</span><strong>75₺</strong></div>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
