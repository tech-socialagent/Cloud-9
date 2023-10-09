import '@/styles/globals.css'
import Script from 'next/script'
import { PopupContext } from '@/Context'
import { useState } from 'react';

export default function App({ Component, pageProps }) {

  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-G3EVNEVB5T"></Script>
      <Script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8VW5X3W3FR');
        `}
      </Script>

      <Script type="text/javascript" id="zsiqchat" dangerouslySetInnerHTML={{
        __html: `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siqdf87c18f47293a19304fd2265a228b188f6640ebf087851cf8e97de5663443e6", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`
      }} />
      <PopupContext.Provider value={{ popupOpen, setPopupOpen }}> 
        <Component {...pageProps} />
      </PopupContext.Provider>
    </>
  )
}


