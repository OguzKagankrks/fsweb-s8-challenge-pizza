import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <main className='home'>
      <div className='container'>
      <header className='hero'>
        <div className='hero__content'>
          <h1 className='brand'>Teknolojik Yemekler</h1>
          <p className='tagline'>Ac misin? En hizlisi burada.</p>
          <Link className='cta' to='/form'>Siparis Olustur</Link>
        </div>
        <div className='hero__image' aria-hidden>
          <img src='/images/iteration-2-images/pictures/food-1.png' alt='Lezzetli pizza' />
        </div>
      </header>

      <section className='features'>
        <article className='card'>
          <img src='/images/iteration-2-images/cta/kart-1.png' alt='Hizli teslimat' />
          <h3>Hizli Teslimat</h3>
          <p>Siparislerin rekor surede kapinda.</p>
        </article>
        <article className='card'>
          <img src='/images/iteration-2-images/cta/kart-2.png' alt='Taptaze malzemeler' />
          <h3>Taptaze</h3>
          <p>Her gun taze malzemelerle hazirlanir.</p>
        </article>
        <article className='card'>
          <img src='/images/iteration-2-images/cta/kart-3.png' alt='Zengin secenek' />
          <h3>Bol Secenek</h3>
          <p>Her damak tadina uygun kombinler.</p>
        </article>
      </section>

      <section className='gallery'>
        <img src='/images/iteration-2-images/footer/insta/li-0.png' alt='Galeri 1' />
        <img src='/images/iteration-2-images/footer/insta/li-1.png' alt='Galeri 2' />
        <img src='/images/iteration-2-images/footer/insta/li-2.png' alt='Galeri 3' />
        <img src='/images/iteration-2-images/footer/insta/li-3.png' alt='Galeri 4' />
        <img src='/images/iteration-2-images/footer/insta/li-4.png' alt='Galeri 5' />
        <img src='/images/iteration-2-images/footer/insta/li-5.png' alt='Galeri 6' />
      </section>
      </div>
    </main>
  )
}

export default Home
