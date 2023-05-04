import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';
import Layout from 'components/layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* Example on how to introduce a script on a specific page */}
      {/* <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() => {
          console.log(`script loaded correctly, window.FB has been populated`, window.FB);
        }}
      /> */}
      <h1>First Post</h1>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
