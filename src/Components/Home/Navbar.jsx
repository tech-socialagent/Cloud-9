import React from 'react';
import styles from '@/styles/Home/navbar.module.css';
import Image from 'next/image';
import logo from "../../../public/Assets/logo.webp";
import { BsTelephoneFill } from 'react-icons/bs'

function Navbar() {
    return ( 
        <div className={styles.NavbarWrap}>
            <Image src={logo} className={styles.NavbarLogo} width={500} height={500}/>
            <div className={styles.NavbarMenu}>
                <div className={styles.MenuItem}>Home</div>
                <div className={styles.MenuItem}>About us</div>
                <div className={styles.MenuItem}>Specifications</div>
                <div className={styles.MenuItem}>Amenities</div>
                <div className={styles.MenuItem}>Floorplan</div>
                <div className={styles.MenuItem}>Masterplan</div>
                <div className={styles.MenuItem}>Conatct</div>
            </div>
            <div className={styles.NavbarContacts}>
                <span><BsTelephoneFill/></span>
                <p>9900 847 847</p>
            </div>
        </div>
     );
}

export default Navbar;