import React, { useEffect } from 'react';
import styles from '@/styles/Home/footer.module.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import logo from '../../../public/Assets/logo.webp';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Footer() {

    const router = useRouter();

    const scrollToSection = (e, id) => {
        e.preventDefault();
        var element = document.getElementById(id);
        var headerOffset = 70;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.lintrk = window.lintrk || function () {
                (window.lintrk.q = window.lintrk.q || []).push(arguments);
            };
            // Initialize the tracking code, if needed
            window.lintrk('track', { conversion_id: '15736121' });

            // LinkedIn tracking script
            _linkedin_partner_id = "6153921";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);

            (function (l) {
                if (!l) {
                    window.lintrk = function (a, b) {
                        window.lintrk.q.push([a, b])
                    };
                    window.lintrk.q = []
                }
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";
                b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
            })(window.lintrk);

            // LinkedIn noscript tracking pixel
            const img = document.createElement("img");
            img.height = 1;
            img.width = 1;
            img.style.display = "none";
            img.alt = "";
            img.src = "https://px.ads.linkedin.com/collect/?pid=6153921&fmt=gif";
            document.getElementsByTagName("noscript")[0].appendChild(img);
        }
    }, []);

    return (
        <>
            <div className={styles.footerWrap}>
                <div className={styles.logoContaier}>
                    <Image src={logo} alt="Not found" width={500} height={500} className={styles.footerLogo} />
                    <div className={styles.socialIconsMobile}>
                        <Link href='https://www.facebook.com/Prasiddhigroup/' target='_blank' style={{ color: '#fff', textDecoration: 'none' }}>
                            <li><FaFacebookSquare /></li>
                        </Link>
                        <Link href='https://twitter.com/groupprasiddhi' target='_blank' style={{ color: '#fff', textDecoration: 'none' }}>
                            <li><FaTwitterSquare /></li>
                        </Link>
                        <Link href='https://www.instagram.com/prasiddhigroup/' target='_blank' style={{ color: '#fff', textDecoration: 'none' }}>
                            <li><FaInstagramSquare /></li>
                        </Link>
                        <Link href='https://www.linkedin.com/in/prasiddhi-group-702163158/' target='_blank' style={{ color: '#fff', textDecoration: 'none' }}>
                            <li><FaLinkedin /></li>
                        </Link>
                    </div>
                </div>
                <div className={styles.footerCenter}>
                    <div className={styles.footerMenu}>
                        <div className={styles.footerMenuItem} onClick={(e) => scrollToSection(e, "home")}>Home</div>
                        <div className={styles.footerMenuItem} onClick={(e) => scrollToSection(e, "aboutUs")}>About us</div>
                        <div className={styles.footerMenuItem} onClick={(e) => scrollToSection(e, "features")}>Features</div>
                        <div className={styles.footerMenuItem} onClick={(e) => scrollToSection(e, "amenities")}>Amenities</div>
                        <div className={styles.footerMenuItem} onClick={(e) => scrollToSection(e, "floorPlan")}>Floorplan</div>
                        <div className={styles.footerMenuItem} onClick={(e) => scrollToSection(e, "masterPlan")}>Masterplan</div>
                        <div className={styles.footerMenuItem} onClick={(e) => scrollToSection(e, "contact")}>Contact</div>
                    </div>
                    <div className={styles.copyRight}>
                        <p>COPYRIGHT PRASIDDHI GROUP. ALL RIGHTS RESERVED.<u style={{ cursor: 'pointer' }} onClick={() => router.push('/terms&Conditions')}>| TERMS & CONDITIONS | DESIGN: DNM</u></p>
                    </div>
                </div>
                <div className={styles.socialIcons}>
                    <Link href='https://www.facebook.com/Prasiddhigroup/' target='_blank' style={{ color: '#fff', textDecoration: 'none' }}>
                        <li><FaFacebookSquare /></li>
                    </Link>
                    <Link href='https://twitter.com/groupprasiddhi' target='_blank' style={{ color: '#fff', textDecoration: 'none' }}>
                        <li><FaTwitterSquare /></li>
                    </Link>
                    <Link href='https://www.instagram.com/prasiddhigroup/' target='_blank' style={{ color: '#fff', textDecoration: 'none' }}>
                        <li><FaInstagramSquare /></li>
                    </Link>
                    <Link href='https://www.linkedin.com/in/prasiddhi-group-702163158/' target='_blank' style={{ color: '#fff', textDecoration: 'none' }}>
                        <li><FaLinkedin /></li>
                    </Link>
                </div>
            </div>
            <p className={styles.copyRightContent}>COPYRIGHT PRASIDDHI GROUP. ALL RIGHTS RESERVED.<u style={{ cursor: 'pointer' }} onClick={() => router.push('/terms&Conditions')}>| TERMS & CONDITIONS | DESIGN: DNM</u></p>
        </>
    );
}

export default Footer;