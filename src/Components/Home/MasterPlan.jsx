import React from 'react';
import styles from '@/styles/Home/MasterPlan.module.css';
import SectionHeader from '../SectionHeader';
import Image from 'next/image';
import PlanImage from '../../../public/Assets/masterPlan.webp';

function MasterPlan() {
    return ( 
        <div className={styles.MasterWrap} id='masterPlan'>
            <SectionHeader alignCenter={true} title='Master Plan' desc='Master Plan.' para="Every specification at Cloud9 is designed with an eye for detail and keeping you, the end user, at the focal point." />
            <Image src={PlanImage} alt='Not found' widht={1000} height={1000} className={styles.MasterPlanImage}/> 
        </div>
     );
}

export default MasterPlan;