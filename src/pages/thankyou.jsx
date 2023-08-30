import React from 'react'
import styles from '@/styles/thankyou.module.css';
import { LuMailCheck } from 'react-icons/lu';
import NavbarCopy from '@/Components/Home/Navbar copy';
import Link from 'next/link';
import Head from 'next/head';

const page = () => {
    return (
        <>
        <Head>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MLR264PQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MLR264PQ');
            `,
          }}
        />
      </Head>
            <NavbarCopy />
            <div className={styles.thankContainer}>
                <div><LuMailCheck /></div>
                <h1>Thanks for submitting!</h1>
                <p>Your message has been sent! <br />
                    Our team will be getting back to you shortly.</p>
                <Link href='/' style={{ textDecoration: 'none', color: 'white' }}>
                    <button>Go Home</button>
                </Link>
            </div>
        </>
    )
}

export default page