import React from 'react'
import styles from '@/styles/Home/Hero.module.css'

const HeroSection = () => {
    return (
        <div className={styles.heroWrap}>
            <div className={styles.HeroSection}>
                <form action="" >
                    <div className={styles.title}>
                        <span>Cloud 9 Nature Unbound</span> -Electronic City, Bangalore
                        5BHK Villas Near E-City Bangalore From 2.5 Cr* Onwards
                    </div>
                    <div className={styles.inputWrap}>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Phone Number' />
                    </div>
                    <button className={styles.heroBtn}>SUBMIT</button>
                </form>
                <div className={styles.enquire}>Enquire Now</div>
            </div>
            <h2 className={styles.headerBottom}><span>Live Community Of  120+ Vibrant Families</span></h2>
        </div>
    )
}

export default HeroSection