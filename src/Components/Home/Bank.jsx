import React, { useState } from 'react';
import styles from '@/styles/Home/bank.module.css';
import SectionHeader from '../SectionHeader';
import Image from 'next/image';
import { RiSendPlaneFill } from 'react-icons/ri';
import { IoCall } from 'react-icons/io5';
import { IoLocationSharp } from 'react-icons/io5';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import axios from 'axios';

function BankSection() {

    const [open, setOpen] = useState(false);
    const [sending, setSending] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSending(true);

        const leadData = formData
        axios.post('/api/zohonew', leadData)
            .then((response) => {
                console.log(response);
                setSending(false);
                setOpen(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                })
            })
            .catch((error) => {
                console.error('Error sending data:', error);
            });

        // emailjs.send("service_pker1vg", "template_b0e6cwb", leadData, "5rfKZaLJ19e--qaGr")
        //     .then(() => {
        //         console.log('Email sent successfully.');
        //         // Clear the form after successful submission
        //     })
        //     .catch((error) => {
        //         console.error('Email failed to send : ', error);
        //     });

    }

    const bankImgData = [
        '/Assets/bank/bank1.webp',
        '/Assets/bank/bank2.webp',
        '/Assets/bank/bank3.webp',
        '/Assets/bank/bank4.webp',
        '/Assets/bank/bank5.webp',
        '/Assets/bank/centralBank.webp',
    ];

    const IconText = [
        {
            icon: <RiSendPlaneFill />,
            title: 'Send an email',
            desc: <><u>sales@prasiddhigroup.com</u></>
        },
        {
            icon: <IoCall />,
            title: 'Give us a call',
            desc: <><u>+919900847847</u></>
        },
        {
            icon: <IoLocationSharp />,
            title: 'Corporate Office Location',
            desc: `CLOUD-9 VILLAS, Electronic City, Bengaluru, Bommasandra, Karnataka 560099, India.`
        },
    ]

    return (
        <div className={styles.bankWrap}>
            <div className={styles.titleImages}>
                <SectionHeader title="Bank Partners" desc="Banks" />
                <div className={styles.bankImages}>
                    {bankImgData.map((img) => (<Image src={img} alt="No Image" width={500} height={500} className={styles.bankImage} />))}
                </div>
            </div>
            <div className={styles.formAndTextContainer} id='contact'>
                <form onSubmit={handleSubmit} className={styles.formContainer} id="ContactForm">
                    <div className={styles.menus}>
                        <div className={styles.menu}>
                            <label>Full Name<span>*</span></label>
                            <input type="text" placeholder='Enter full name' name='name' value={formData.name} onChange={handleInputChange} required />
                        </div>
                        <div className={styles.menu}>
                            <label>Phone number<span>*</span></label>
                            <input type="text" placeholder='Enter your phone number' name='phone' value={formData.phone} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <label>Email<span>*</span></label>
                        <input type="text" placeholder='Enter your email' name='email' value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className={styles.menu}>
                        <label>Which is your enquiry about?</label>
                        {/*<select value={formData.enquiry} onChange={(event) => setFormData({ ...formData, enquiry: event.target.value })}>
                            <option value="Select one" selected disabled>Select one</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select> */}
                        <textarea type="text" placeholder='Message' name='message' value={formData.message} onChange={handleInputChange} />
                    </div>
                    <button type="submit" className={styles.formBtn} style={{ cursor: sending ? "not-allowed" : "pointer" }}>{sending === true ? 'Sending...' : 'Send Message'}</button>
                    {open && <p>Thank you for submitting. Our team will get back to you soon.</p>}
                </form>
                <div className={styles.formRight}>
                    <h1>Get in touch to schedule a visit to your new house.</h1>
                    <p>Kindly fill this form with your details about your inquiries and we would respond your inquiry shortly.</p>
                    <div className={styles.iconText}>
                        <div className={styles.iconContainer}><span>{IconText[0].icon}</span></div>
                        <div className={styles.iconRight}>
                            <h4>{IconText[0].title}</h4>
                            <Link href='mailto:sales@prasiddhigroup.com'>
                                <h5>{IconText[0].desc}</h5>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.iconText}>
                        <div className={styles.iconContainer}><span>{IconText[1].icon}</span></div>
                        <div className={styles.iconRight}>
                            <h4>{IconText[1].title}</h4>
                            <Link href='tel:+919900847847'>
                                <h5>{IconText[1].desc}</h5>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.iconText}>
                        <div className={styles.iconContainer}><span>{IconText[2].icon}</span></div>
                        <div className={styles.iconRight}>
                            <h4>{IconText[2].title}</h4>
                            <h5>{IconText[2].desc}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BankSection;