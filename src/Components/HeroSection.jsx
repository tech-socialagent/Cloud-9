import React from 'react'
import styles from '@/styles/Hero.module.css'

const HeroSection = () => {
    return (
        <div className={styles.HeroSection}>
            <form action="" >
                <div className={styles.title}>
                    Cloud 9 Nature Unbound -Electronic City, Bangalore
                    5BHK Villas Near E-City Bangalore From 2.5 Cr* Onwards
                </div>
                <div className={styles.inputWrap}>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="text" placeholder='phone Number' />
                </div>
                <button className={styles.btn}>SUBMIT</button>
            </form>
        </div>
    )
}

export default HeroSection