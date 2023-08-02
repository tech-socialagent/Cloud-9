import React, { useContext } from 'react';
import styles from '@/styles/Home/Overview.module.css';
import homeImg from '../../../public/Assets/homeImg.webp';
import SectionHeader from '../SectionHeader';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { PopupContext } from '@/Context';

function Overview() {

    const { setPopupOpen } = useContext(PopupContext);

    return ( 
        <div className={styles.OverviewWrap} id='aboutUs'>
            <div className={styles.OverviewLeft}>
                <SectionHeader title='Overview' desc='Discover Sustainable Resort Style Luxury Living with Cloud 9 Villas.' para="Nestled in 17 acres of lush greenery, Ready to Occupy, Cloud 9 widely spaced out villas offer plenteous space and serenity. Colonial style villas at Cloud 9 with arches and sloping roofs render a feeling of pride to their inhabitants, while state of the art amenities such as a well-equipped gym, swimming pool, children’s play area, etc take care of your health and well-being. Conveniently located near the Metro, Cloud 9 has good connectivity to educational institutes, commercial complexes and health facilities, making for your living a dream come true."/>
                <button onClick={() => setPopupOpen(true)}>Visit Now <span><FiArrowUpRight /></span></button>    
            </div>
            <div className={styles.OverviewRight}>
                <Image src={homeImg} width={1000} height={1000} alt='Home Image' className={styles.OverviewRightImage}/>
            </div>
        </div>
     );
}

export default Overview;