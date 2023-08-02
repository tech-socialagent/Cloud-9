import React from 'react';
import styles from '@/styles/SectionHeader.module.css';

function SectionHeader({ title, desc, para, alignCenter }) {
    return (
        <div className={styles.headerContainer} style={{alignItems : alignCenter ? 'center' : 'flex-start'}}>
            <div className={styles.titleContainer}>
                <span></span>
                <h6>{title}</h6>
            </div>
            <h2>{desc}</h2>
            <p>{para}</p>
        </div>
    );
}

export default SectionHeader;