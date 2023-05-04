import Head from 'next/head';
import Layout, { name, siteTitle } from 'components/layout';
import utilStyles from 'styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! I'm {name}, a dev with experience in JS and React. I'm excited to share my insights on this blog and inspire others in tech.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
