import React, { useContext, useState } from 'react'
import styles from '@/styles/Home/Hero.module.css'
import { PopupContext } from '@/Context';
import emailjs from 'emailjs-com';
import axios from 'axios';

const HeroSection = () => {
    
    const { setPopupOpen } = useContext(PopupContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const leadData = {
            data: [
              {
                Last_Name: formData.name,
                Email: formData.email,
                Phone: formData.phone,
              },
            ],
          };

        axios.post('/api/zohoapi',leadData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error sending data:', error);
        });

        // emailjs.send("service_pker1vg", "template_b0e6cwb", formData, "5rfKZaLJ19e--qaGr")
        // .then(() => {
        //   console.log('Email sent successfully.');
        //   // Clear the form after successful submission
        //   setFormData({
        //     name:'',
        //     email: '',
        //     phone: '',
        // })
        // })
        // .catch((error) => {
        //   console.error('Email failed to send : ', error);
        // });
    }

    return (
        <div className={styles.heroWrap} id="home">
            <div className={styles.HeroSection}>
                <form onSubmit={handleSubmit} >
                    <div className={styles.titleMobile}>
                        <span>Cloud 9 Villa <br /> Nature Unbound<br /></span>

                        5BHK Villas<br /> Near Electronic City Bengaluru<br /> From 2.69 Cr* Onwards
                    </div>
                    <div className={styles.title}>
                        <span>Cloud 9 Villas Nature Unbound</span><br />
                        5BHK Villas Near Electronic City Bengaluru From 2.69 Cr* Onwards
                    </div>
                    <div className={styles.inputWrap}>
                        <input type="text" placeholder='Name' value={formData.name} name='name' onChange={handleInputChange} required/>
                        <input type="email" placeholder='Email' value={formData.email} name='email' onChange={handleInputChange} required/>
                        <input type="tel" placeholder='Phone Number' value={formData.phone} name='phone' onChange={handleInputChange} required/>
                    </div>
                    <button className={styles.heroBtn} type='submit'>SUBMIT</button>
                </form>
                <div className={styles.enquire} onClick={() => setPopupOpen(true)}>Enquire Now</div>
            </div>
            <h2 className={styles.headerBottom}><span>Live Community Of  120+ Vibrant Families</span></h2>
        </div>
    )
}

export default HeroSection