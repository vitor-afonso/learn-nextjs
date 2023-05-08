import Head from 'next/head';
import Layout, { name, siteTitle } from 'components/layout';
import utilStyles from 'styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from 'components/date';
import { GetStaticProps } from 'next';

// STATIC GENERATION WITH DATA
// This page will only be generated once, at runtimme, in the server and will be reused at every request
// here we dont have access to query parameters or HTTP headers
// it would not be possible to send the token to verify authentication for example
// getStaticProps fetches the data that the page need to be rendered.

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* Example on how to introduce a script on a specific page */}
      {/* <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() => {
          console.log(`script loaded correctly, window.FB has been populated`, window.FB);
        }}
      /> */}
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
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
