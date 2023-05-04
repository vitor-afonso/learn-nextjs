// globals is the styling applyed to all pages
import '/styles/globals.css';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
