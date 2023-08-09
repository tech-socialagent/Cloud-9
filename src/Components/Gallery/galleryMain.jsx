import React from 'react';
import styles from "@/styles/Gallery/galleryMain.module.css";
import SectionHeader from '../SectionHeader';
import Image from 'next/image';

function GalleryMain() {

    const galleryImages = [
        {
            img: '/Assets/Gallery/villa1.webp',
        },
        {
            img: '/Assets/Gallery/villa2.webp',
        },
        {
            img: '/Assets/Gallery/villa3.webp',
        },
        {
            img: '/Assets/Gallery/villa4.webp',
        },
        {
            img: '/Assets/Gallery/villa5.webp',
        },
        {
            img: '/Assets/Gallery/villa6.webp',
        },
        {
            img: '/Assets/Gallery/villa7.webp',
        },
        {
            img: '/Assets/Gallery/villa8.webp',
        },
        {
            img: '/Assets/Gallery/villa9.webp',
        },
        {
            img: '/Assets/Gallery/villa10.webp',
        },
        {
            img: '/Assets/Gallery/villa11.webp',
        },
        {
            img: '/Assets/Gallery/img2.webp',
        },
        {
            img: '/Assets/Gallery/img3.webp',
        },
        {
            img: '/Assets/Gallery/img4.webp',
        },
        {
            img: '/Assets/Gallery/img5.webp',
        },
        {
            img: '/Assets/Gallery/img1.webp',
        },
        {
            img: '/Assets/Gallery/img6.webp',
        },
        {
            img: '/Assets/Gallery/img7.webp',
        },
        {
            img: '/Assets/Gallery/img8.webp',
        },
        {
            img: '/Assets/Gallery/img9.webp',
        },
        {
            img: '/Assets/Gallery/img10.webp',
        },
        {
            img: '/Assets/Gallery/img11.webp',
        },
        {
            img: '/Assets/Gallery/img12.webp',
        },
        {
            img: '/Assets/Gallery/img13.webp',
        },
        {
            img: '/Assets/Gallery/img14.webp',
        },
        {
            img: '/Assets/Gallery/img15.webp',
        },
        {
            img: '/Assets/Gallery/img16.webp',
        },
        {
            img: '/Assets/Gallery/img17.webp',
        },
        {
            img: '/Assets/Gallery/img18.webp',
        },
        {
            img: '/Assets/Gallery/img19.webp',
        },
        {
            img: '/Assets/Gallery/img20.webp',
        },
        {
            img: '/Assets/Gallery/img21.webp',
        },
        {
            img: '/Assets/Gallery/img22.webp',
        },
        {
            img: '/Assets/Gallery/img23.webp',
        },
        {
            img: '/Assets/Gallery/img24.webp',
        },
        {
            img: '/Assets/Gallery/img25.webp',
        },
    ]

    return (
        <div className={styles.galleryContainer}>
            <SectionHeader title="Gallery" desc="Gallery." para="Escape to a world of unparalleled luxury and natural splendor. Nestled in the heart of nature, our residences redefine exquisite living, inviting you to indulge in a lifestyle where opulence seamlessly merges with the abundant beauty that surrounds. Immerse yourself in the tranquility of lush landscapes and captivating views, as every detail of our homes reflects a harmonious blend of modern sophistication and the gifts of nature. Discover a haven where elegance meets the wild, and experience a life enriched by both opulent comfort and the serenity of the outdoors." />
            <div className={styles.galleryImageContainer}>
                {galleryImages.map((item) => (
                    <div className={styles.singleImageContainer}>
                        <Image src={item.img} width={1000} height={1000} className={styles.singleImage} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalleryMain;