import React, { useContext, useState } from 'react';
import styles from '@/styles/popup.module.css';
import { AiFillCloseCircle } from 'react-icons/ai'
import { PopupContext } from '@/Context';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';

function Popup() {
  const { setPopupOpen } = useContext(PopupContext);
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    form: 'Popup Form'
  });
  const [phoneError, setPhoneError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePhone = (phone) => {
    // You can add your phone number validation logic here.
    // For example, check if it's a 10-digit number.
    const isValid = /^\d{10}$/.test(phone);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSending(true)
    const leadData = formData;

    if (!validatePhone(leadData.phone)) {
      setPhoneError('Invalid phone number. Please enter a 10-digit number.');
      setSending(false)
      return;
    }

    // Clear the phone error message
    setPhoneError('');

    // Rest of your code for posting data and sending the email
    emailjs.send('service_wfwycll', 'template_ozdcqkh', formData, 'YTFsXtnQP6iiQDlD8');

    // Clear the form after successful submission
    setSending(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setPopupOpen(false);
    router.push('/thankyou');
  }

  return (
    <div className={styles.popupWrap}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <p></p>
          <h1>Contact Form</h1>
          <span className={styles.closeIcon} onClick={() => setPopupOpen(false)}>
            <AiFillCloseCircle />
          </span>
        </div>
        <form className={styles.popupForm} onSubmit={handleSubmit} id="PopupForm">
          <input type="text" placeholder='Name' value={formData.name} name='name' onChange={handleInputChange} required />
          <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleInputChange} required />
          <input type="tel" placeholder='Phone Number' name='phone' value={formData.phone} onChange={handleInputChange} required />
          {phoneError && <div className={styles.error}>{phoneError}</div>}
          <textarea type="text" placeholder='Message' name='message' value={formData.message} onChange={handleInputChange} />
          <button
            disabled={sending}
            type='submit'>{sending ? 'Sending' : 'SUBMIT'}</button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
