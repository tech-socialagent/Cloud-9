import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/ns.html?id=GTM-MLR264PQ"></Script>
      <Script>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'GTM-MLR264PQ');
            `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
