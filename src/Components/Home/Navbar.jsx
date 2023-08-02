import React, { useState } from 'react';
import styles from '@/styles/Home/navbar.module.css';
import Image from 'next/image';
import logo from "../../../public/Assets/logo.webp";
import { BsTelephoneFill } from 'react-icons/bs'
import { BiMenuAltLeft } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import Link from 'next/link';

function Navbar() {

    const [open, setOpen] = useState(false);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        setOpen(false);
        var element = document.getElementById(id);
        var headerOffset = 70;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    return (
        <div className={styles.NavbarWrap}>
            <Image src={logo} className={styles.NavbarLogo} width={500} height={500} />
            <div className={styles.NavbarMenu}>
                <div className={styles.MenuItem} onClick={(e) => scrollToSection(e, "home")}>Home</div>
                <div className={styles.MenuItem} onClick={(e) => scrollToSection(e, "aboutUs")}>About us</div>
                <div className={styles.MenuItem} onClick={(e) => scrollToSection(e, "features")}>Specifications</div>
                <div className={styles.MenuItem} onClick={(e) => scrollToSection(e, "amenities")}>Amenities</div>
                <div className={styles.MenuItem} onClick={(e) => scrollToSection(e, "floorPlan")}>Floorplan</div>
                <div className={styles.MenuItem} onClick={(e) => scrollToSection(e, "masterPlan")}>Masterplan</div>
                <div className={styles.MenuItem} onClick={(e) => scrollToSection(e, "contact")}>Contact</div>
            </div>
            <div className={styles.NavbarContacts}>
                <span><BsTelephoneFill /></span>
                <Link href='tel:+919900847847' style={{textDecoration:'none',color:'#fff'}}>
                    <p>9900 847 847</p>
                </Link>
            </div>
            <div className={styles.menuIcon}>
                <span onClick={() => setOpen(true)}><BiMenuAltLeft /></span>
            </div>
            <div className={styles.phneMenu} style={{ right: open ? '0' : '-30vh' }}>
                <span onClick={() => setOpen(false)}><AiFillCloseCircle /></span>
                <div className={styles.MenuItem} onClick={(e) => scrollToSection(e, "home")}>Home</div>
                <div className={styles.MenuItem} onClick={(e) => scrollToSection(e, "aboutUs")}>About us</div>
                <div className={styles.MenuItem} onClick={(e) => scrollToSection(e, "features")}>Specifications</div>
                <div className={styles.MenuItem} onClick={(e) => scrollToSection(e, "amenities")}>Amenities</div>
                <div className={styles.MenuItem} onClick={(e) => scrollToSection(e, "floorPlan")}>Floorplan</div>
                <div className={styles.MenuItem} onClick={(e) => scrollToSection(e, "masterPlan")}>Masterplan</div>
                <div className={styles.MenuItem} onClick={(e) => scrollToSection(e, "contact")}>Contact</div>
            </div>
        </div>
    );
}

export default Navbar;