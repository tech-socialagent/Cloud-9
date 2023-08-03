import React, { useRef } from 'react';
import styles from '@/styles/Home/Features.module.css';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import SectionHeader from '../SectionHeader';
import Image from 'next/image';

function Features() {

    let scrl = useRef(null);

    const slide = (shift) => {
        const scrollOptions = {
            left: scrl.current.scrollLeft + shift,
            behavior: 'smooth'
          };
          scrl.current.scrollTo(scrollOptions);
    };

    const Features = [
        {
            img: '/Assets/features/featureimg1.webp',
            title: 'Double Height Ceiling',
        },
        {
            img: '/Assets/features/featureimg2.webp',
            title: 'Sloped Roofs',
        },
        {
            img: '/Assets/features/featureimg3.webp',
            title: 'Customized Design',
        },
        {
            img: '/Assets/features/featureimg4.webp',
            title: 'Portico with 2 Car parks',
        },
        {
            img: '/Assets/features/featureimg5.webp',
            title: '17 Acres of Property, 140+ Villas',
        },
        {
            img: '/Assets/features/featureimg6.webp',
            title: '1500+ Trees',
        },
        {
            img: '/Assets/features/featureimg7.webp',
            title: 'World Class Amenities',
        },
        {
            img: '/Assets/features/featureimg8.webp',
            title: 'Lake View',
        },
    ]

    return (
        <div className={styles.FeaturesWrap} id='features'>
            <SectionHeader title='Features' desc="Features." para="Prasiddhi luxury residences, embedded in greenery, surround you with class, comfort and an aura of abundance and autocracy." />
            <div className={styles.FeaturesContainer}>
                <div className={styles.FeaturesLeft}>
                    <span onClick={() => slide(-300)}><IoIosArrowDropleftCircle /></span>
                </div>
                <div className={styles.FeaturesMain} ref={scrl}>
                    {Features.map((item) => (
                        <div className={styles.Features}>
                            <Image src={item.img} alt="Feature Image" width={1000} height={1000} className={styles.FeatureImage} />
                            <div className={styles.featureText}><li></li><h5>{item.title}</h5></div>
                        </div>
                    ))}
                </div>
                <div className={styles.FeaturesRight}>
                    <span onClick={() => slide(+300)}><IoIosArrowDroprightCircle /></span>
                </div>
            </div>
        </div>
    );
}

export default Features;