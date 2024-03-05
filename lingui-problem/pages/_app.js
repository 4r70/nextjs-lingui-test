import { ThemeProvider } from '../components/ThemeContext';
import '../styles/globals.css';
import { I18nProvider } from "@lingui/react";
import { useLinguiInit } from "../translations/utils";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' })
// https://stackoverflow.com/questions/76478043/next-js-always-fail-at-downloading-fonts-from-google-fonts

export default function App({ Component, pageProps }) {
  const initializedI18n = useLinguiInit(pageProps.i18n);

  return (
    <>
      <I18nProvider i18n={initializedI18n}>
        <div className={inter.className}>
          <ThemeProvider >
            <Component {...pageProps} />
          </ThemeProvider>
        </div>
      </I18nProvider>
    </>
  );
}
