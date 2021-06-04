import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
          <title>{siteTitle}</title>
      </Head>
      <Layout home>
        <section className={utilStyles.headingMd}>
          <p>我喜欢吃小鱼干，我还喜欢晚上不睡觉</p>
          <p>
            This is a great start for my personal website!
          </p>
          <section>
            <Link href="./posts/first-post">
              <a>
              检查一下天气，看看能不能晒小鱼干吧!
              </a>
            </Link>
          </section>
        </section>
      </Layout>
    </>
  )
}