import React, { useRef } from 'react';
import styles from '@/styles/Home/Features.module.css';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import SectionHeader from '../SectionHeader';
import Image from 'next/image';

function Amenities() {

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
            img: '/Assets/amenitie/amenities1.webp',
            title: 'Gym',
        },
        {
            img: '/Assets/amenitie/amenities2.webp',
            title: 'Sloped Roof',
        },
        {
            img: '/Assets/amenitie/amenities3.webp',
            title: 'Children’s playing Area',
        },
        {
            img: '/Assets/amenitie/amenities4.webp',
            title: 'Tennis court',
        },
        {
            img: '/Assets/amenitie/amenities5.webp',
            title: 'Club House',
        },
        {
            img: '/Assets/amenitie/amenities6.webp',
            title: 'Pool Table',
        },
        {
            img: '/Assets/amenitie/amenities7.webp',
            title: 'Library',
        },
        {
            img: '/Assets/amenitie/amenities8.webp',
            title: 'Coffee Shop',
        },
        {
            img: '/Assets/amenitie/amenities9.webp',
            title: 'Skating Rink For children',
        },
        {
            img: '/Assets/amenitie/amenities10.webp',
            title: 'Provision For Grocery Shopping',
        },
        {
            img: '/Assets/amenitie/amenities11.webp',
            title: 'Party Hall',
        },
        {
            img: '/Assets/amenitie/amenities12.webp',
            title: 'Pets Park',
        },
    ]

    return (
        <div className={styles.FeaturesWrap} id='amenities'>
            <SectionHeader title='Amenities' desc="Amenities." para="Prasiddhi luxury residences, embedded in greenery, surround you with class, comfort and an aura of abundance and autocracy." />
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

export default Amenities;