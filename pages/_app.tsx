// globals is the styling applyed to all pages
import '/styles/globals.css';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
