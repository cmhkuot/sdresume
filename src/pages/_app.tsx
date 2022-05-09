import Head from 'next/head';
import { appName } from '@config';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { IApp } from '@interfaces/App';
import { CssBaseline } from '@mui/material';
import AppThemeProvider from '@util/appThemeProvider';

const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

export default function App(props: IApp) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  return (
    <CacheProvider value={emotionCache}>
      <AppThemeProvider>
        <Title />
        <CssBaseline />
        <Component {...pageProps} />
      </AppThemeProvider>
    </CacheProvider>
  );
}

function Title() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>{`${appName}`}</title>
    </Head>
  );
}
