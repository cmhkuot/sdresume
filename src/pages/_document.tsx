import Document, { Head, Html, Main, NextScript } from 'next/document';
import { appLocale, appName, appUrl, authorImage, authorName, favicon, GAID } from '@config';
import { data } from '@content/Header';

function isValid(value: string | string[]) {
  return typeof value === 'string' && value.length > 0;
}

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang={appLocale}>
        <Head>
          <link rel="icon" href={favicon.default.src} />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content={data.description} />
          <link rel="canonical" href={appUrl} />
          <meta name="keywords" content="resume,development,developer" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="vi_VN" />
          <meta property="og:title" content={appName} />
          <meta property="og:url" content={appUrl} />
          <meta property="og:description" content={data.description} />
          <meta property="og:image" content={authorImage.default.src} />
          <meta name="twitter:creator" content={authorName} />
          <meta name="twitter:title" content={appName} />
          <meta name="twitter:description" content={data.description} />
          <meta name="twitter:image" content={authorImage.default.src} />
          {/* for Google Analytics */}
          {isValid(GAID) && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GAID}`}></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GAID}');`,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
