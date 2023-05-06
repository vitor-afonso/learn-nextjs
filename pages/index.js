import Head from 'next/head';
import Layout, { name, siteTitle } from 'components/layout';
import utilStyles from 'styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

// STATIC GENERATION WITH DATA
// This page will only be generated once, at runtimme, in the server and will be reused at every request
// here we dont have access to query parameters or HTTP headers
// it would not be possible to send the token to verify authentication for example
// getStaticProps fetches the data that the page need to be rendered.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
