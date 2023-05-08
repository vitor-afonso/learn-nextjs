import { NextApiRequest, NextApiResponse } from 'next';

// Next.js has support for API Routes, which let you easily create an API endpoint as a Node.js serverless function.

// This endpoint would be: http://localhost:3000/api/hello

// You should not fetch an API Route from getStaticProps or getStaticPaths.
//Instead, write your server-side code directly in getStaticProps or getStaticPaths

// To handle different HTTP methods in an API route, you can use req.method in your request handler, like so:

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.status(200).json({ text: 'This is a POST' });
  } else {
    res.status(200).json({ text: 'This is a GET' });
  }
}
