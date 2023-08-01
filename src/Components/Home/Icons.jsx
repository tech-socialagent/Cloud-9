import React from 'react';
import styles from '@/styles/Home/Icon.module.css';
import Image from 'next/image';

function Icons() {

    const iconData = [
        {
            img: '/Assets/icons/icon1.webp',
            title: 'Project Status',
            desc: 'Ready to occupy',
        },
        {
            img: '/Assets/icons/icon2.webp',
            title: 'Location',
            desc: 'Near Electronic city',
        },
        {
            img: '/Assets/icons/icon3.webp',
            title: 'Villa Type',
            desc: '5 BHK',
        },
        {
            img: '/Assets/icons/icon4.webp',
            title: 'Plot Sizes',
            desc: '2250 sq.ft.',
        },
        {
            img: '/Assets/icons/icon5.webp',
            title: 'Built Up Area',
            desc: '3337 sq.ft. to 3368 sq.ft.',
        },
    ]

    return (
        <div className={styles.IconsContainer}>
            {iconData.map((item) => (
                <div className={styles.EachIcon}>
                    <Image src={item.img} alt='Icons' width={500} height={500} className={styles.IconImage}/>
                    <h5>{item.title}</h5>
                    <h6>{item.desc}</h6>
                </div>
            ))}
        </div>
    );
}

export default Icons;