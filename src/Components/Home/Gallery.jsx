import React, { useContext } from 'react';
import styles from "@/styles/Home/Gallery.module.css";
import SectionHeader from '../SectionHeader';
import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import { PopupContext } from '@/Context';
import Link from 'next/link';

function Gallery() {

    // const { setPopupOpen } = useContext(PopupContext);

    const galleryData = [
        {
            title: 'Gallery',
            desc: 'Gallery.',
            para: 'Experience exquisite living amidst nature’s abundance.',
            img: '/Assets/Gallery/gallery1.webp',
        },
        {
            title: 'Ready to move in',
            desc: 'Ready to move in.',
            para: 'Move-in ready twin villas, your dream homes await!',
            img: '/Assets/Gallery/gallery2.webp',
        },
    ]

    return (
        <div className={styles.GalleryContaier}>
            {galleryData.map((item) => (
                <div className={styles.EachGallery}>
                    <SectionHeader title={item.title} desc={item.desc} para={item.para} />
                    <Image src={item.img} alt="Not found" width={1000} height={1000} className={styles.galleryImage}/>
                    <Link href="/gallery" style={{textDecoration:'none',color:'#fff'}}>
                        <button>View More<span><FiArrowUpRight /></span></button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Gallery;