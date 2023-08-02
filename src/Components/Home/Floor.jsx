import React, { useContext } from 'react';
import styles from '@/styles/Home/Floor.module.css';
import SectionHeader from '../SectionHeader';
import Image from 'next/image';
import floorLeft from "../../../public/Assets/floor/floorleft.webp"
import floorRight from "../../../public/Assets/floor/floorRight.webp"
import North from "../../../public/Assets/floor/North.webp";
import { FiArrowUpRight } from 'react-icons/fi';
import { PopupContext } from '@/Context';

function FloorPlan() {

    const { popupOpen, setPopupOpen } = useContext(PopupContext);

    return (
        <div className={styles.FloorWrap} id='floorPlan'>
            <SectionHeader title="Floor Plan" desc="Floor Plan." para="At Cloud9, you never have to leave home for the basics. That means, you have more time with your family to enjoy its exclusive amenities." />
            <div className={styles.FloorContainer}>
                <div>
                    <Image src={floorLeft} alt="No Image" width={1000} height={1000} className={styles.LeftImage} />
                </div>
                <div className={styles.FloorCenter}>
                    <Image src={North} alt="No Image" width={1000} height={1000} className={styles.NorhtImage} />
                    <table border={1}>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Plot Area<br />Sq.ft</td>
                                <td>SBUA<br />Sq.ft</td>
                            </tr>
                            <tr>
                                <td>Unit-1</td>
                                <td>2250</td>
                                <td>3368</td>
                            </tr>
                            <tr>
                                <td>Unit-1</td>
                                <td>2250</td>
                                <td>3368</td>
                            </tr>
                            <tr>
                                <td>Unit-2</td>
                                <td>2250</td>
                                <td>3337</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3>3337 – 3368 Sq.ft <span>₹2.69 cr</span> onwards</h3>
                    <button onClick={() => setPopupOpen(true)}>Visit Now <span><FiArrowUpRight /></span></button>
                </div>
                <div>
                    <Image src={floorRight} alt="No Image" width={1000} height={1000} className={styles.RightImage} />
                </div>
            </div>
        </div>
    );
}

export default FloorPlan;