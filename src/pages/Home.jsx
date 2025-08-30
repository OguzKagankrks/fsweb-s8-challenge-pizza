import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <main className='home'>
      <header className='hero'>
        <div className='hero__content'>
          <h1 className='brand'>Teknolojik Yemekler</h1>
          <p className='tagline'>Aç mýsýn? En hýzlýsý burada.</p>
          <a className='cta' href='#!/form'>Sipariþ Oluþtur</a>
        </div>
        <div className='hero__image' aria-hidden>
          <img src='/images/iteration-2-images/pictures/food-1.png' alt='Lezzetli pizza' />
        </div>
      </header>

      <section className='features'>
        <article className='card'>
          <img src='/images/iteration-2-images/cta/kart-1.png' alt='Hýzlý teslimat' />
          <h3>Hýzlý Teslimat</h3>
          <p>Sipariþlerin rekor sürede kapýnda.</p>
        </article>
        <article className='card'>
          <img src='/images/iteration-2-images/cta/kart-2.png' alt='Taptaze malzemeler' />
          <h3>Taptaze</h3>
          <p>Her gün taze malzemelerle hazýrlanýr.</p>
        </article>
        <article className='card'>
          <img src='/images/iteration-2-images/cta/kart-3.png' alt='Zengin seçenek' />
          <h3>Bol Seçenek</h3>
          <p>Her damak tadýna uygun kombinler.</p>
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
    </main>
  )
}

export default Home