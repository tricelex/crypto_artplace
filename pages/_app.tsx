import Script from 'next/script';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';
import { Navbar, Footer } from '../components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute='class'>
    <div className='min-h-screen bg-white dark:bg-nft-dark'>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
    <Script src='https://kit.fontawesome.com/ff3c932e87.js' crossOrigin='anonymous' />
  </ThemeProvider>
);

export default MyApp;
