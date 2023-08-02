import React from 'react';
import styles from '@/styles/Home/Location.module.css';
import SectionHeader from '../SectionHeader';
import Image from 'next/image';

function Location() {

    const LocationData = [
        {
            img: '/Assets/location/img1.png',
            title: 'Hotels',
        },
        {
            img: '/Assets/location/img2.png',
            title: 'Hospitals',
        },
        {
            img: '/Assets/location/img3.png',
            title: 'it parks',
        },
        {
            img: '/Assets/location/img4.png',
            title: 'restaurant',
        },
        {
            img: '/Assets/location/img5.png',
            title: 'Educational',
        },
        {
            img: '/Assets/location/img6.png',
            title: 'Shopping mall',
        },
        {
            img: '/Assets/location/img7.png',
            title: 'Metro',
        },
    ]

    return (
        <div className={styles.LocationWrap}>
            <SectionHeader title="Location" desc="Location." para="A 5-minute drive from Cloud 9 will take you to the IT hub, Electronic City, Koramangala, JP Nagar, HSR layout and Narayana Hrudayalaya. It is well-connected to educational institutions, shopping centres and MG Road is just 20 km away." />
            <div className={styles.LocationContainer}>
                <div className={styles.LocationMap}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.124263659162!2d77.57142287418425!3d13.027757887292763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c4b2ec4fb1%3A0xbd97287df0b88f9e!2sPRASIDDHI%20GROUP!5e0!3m2!1sen!2sin!4v1690890946176!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={styles.LocationRight}>
                    <p>Phone: 099008 47847</p>
                    <h3>5-Minute Drive From Electronic City.</h3>
                </div>
            </div>
            <div className={styles.flexContainer}>
                {LocationData.map((item) => (
                    <div className={styles.flexItem}>
                        <Image src={item.img} alt='Not found' width={300} height={300} className={styles.flexItemImage} />
                        <h6>{item.title}</h6>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Location;