import React, { useContext, useState } from 'react';
import styles from '@/styles/popup.module.css';
import { AiFillCloseCircle } from 'react-icons/ai'
import { PopupContext } from '@/Context';
import emailjs from 'emailjs-com';

function Popup() {

    const { setPopupOpen } = useContext(PopupContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message:'',
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.send("service_pker1vg", "template_b0e6cwb", formData, "5rfKZaLJ19e--qaGr")
        .then(() => {
          console.log('Email sent successfully.');
          // Clear the form after successful submission
          setFormData({
            name:'',
            email: '',
            phone: '',
            message:'',
        })
        })
        .catch((error) => {
          console.error('Email failed to send : ', error);
        });
    }

    return (
        <div className={styles.popupWrap}>
            <div className={styles.formContainer}>
                <div className={styles.formHeader}>
                    <p></p>
                    <h1>Contact Form</h1>
                    <span className={styles.closeIcon} onClick={() => setPopupOpen(false)}><AiFillCloseCircle /></span>
                </div>
                <form className={styles.popupForm} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' value={formData.name} name='name' onChange={handleInputChange}/>
                    <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleInputChange}/>
                    <input type="tel" placeholder='Phone Number' name='phone' value={formData.phone} onChange={handleInputChange}/>
                    <textarea type="text" placeholder='Message' name='message' value={formData.message} onChange={handleInputChange}/>
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default Popup;