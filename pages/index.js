import Head from 'next/head';
import Navigation from '../components/navigation';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import componentStyles from '../styles/component.module.css';
import Link from 'next/link';
import Footer from '../components/footer';

const infoCard = (
    <section className={utilStyles.headingMd}>
      <h2>Based In <em className={componentStyles.em}>Melbourne</em></h2>
      <h2>Fontend Developer</h2>
      <p>About me: 我喜欢吃小鱼干，我还喜欢晚上不睡觉</p>

      
      <Link href='/projects'>
        <a>Go to projects</a>
      </Link>
    <section>
      <Link href="/projects/weather-app">
        <a>
        检查一下Melbourne天气，看看能不能晒小鱼干吧!
        </a>
      </Link>
    </section>
  </section>
  )

export default function Home() {
  return (
    <>
      <Head>
          <title>{siteTitle}</title>
      </Head>
      <Navigation/>
      <Layout children={infoCard} home/>

      <Footer/>
    </>
  )
}