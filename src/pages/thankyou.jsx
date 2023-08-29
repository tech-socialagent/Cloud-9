import React from 'react'
import styles from '@/styles/thankyou.module.css';
import { LuMailCheck } from 'react-icons/lu';
import NavbarCopy from '@/Components/Home/Navbar copy';
import Link from 'next/link';

const page = () => {
    return (
        <>
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