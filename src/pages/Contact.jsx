import React from 'react'
import { useState } from 'react';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const Contact = () => {

  const user = JSON.parse(localStorage.getItem('user'));

  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  
  const submitHandler = async e => {
    e.preventDefault();

    try {
      const { email, subject, message } = formData;
      console.log(formData);

      const appointmentRef = doc(db, 'contactUs', user.uid);

      await setDoc(appointmentRef, {
        email: email,
        subject: subject,
        message: message
      }).then(() => {
        console.log('Appointment data saved successfully!');

        //show success message and redirect to home page
        alert('Message sent Successfully!');
        setFormData({
          email: '',
          subject: '',
          message: ''
        });
      });

      // Clear the form after submission




    } catch (error) {
      console.log(error);
    }
  }


  return <section>
    <div className="px-4 mx-auto max-w-screen-md">
      <h2 className='heading text-center'>Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text__para">Got a technical issue ? Want to send feedback about a beta feature ? Let us know</p>
      <form action="#" onSubmit={submitHandler} className='space-y-8'>
        <div>
          <label htmlFor="email" className='form__label'>Your Email</label>
          <input type="email" id='email' placeholder='example@gmail.com' onChange={handleInputChange} className='form__input mt-1 dark:text-gray-800 dark:placeholder-gray-400' />
        </div>

        <div>
          <label htmlFor="subject" className='form__label' >Subject</label>
          <input type="text" id='subject' onChange={handleInputChange} placeholder='Let us know how we can help you' className='form__input mt-1 dark:text-gray-800 dark:placeholder-gray-400' />
        </div>

        <div className='sm:col-span-2'>
          <label htmlFor="message" className='form__label '>Your Message</label>
          <textarea rows={5} type="text" id='message' onChange={handleInputChange} placeholder='Let a comment....' className='form__input mt-1 dark:text-gray-800 dark:placeholder-gray-400' />
        </div>
        <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
      </form>
    </div>
  </section>
  
}

export default Contact