import React from 'react'

const Contact = () => {
  return <section>
    <div className="px-4 mx-auto max-w-screen-md">
      <h2 className='heading text-center'>Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text__para">Got a technical issue ? Want to send feedback about a beta feature ? Let us know</p>
      <form action="#" className='space-y-8'>
        <div>
          <label htmlFor="email" className='form__label'>Your Email</label>
          <input type="email" id='email' placeholder='example@gmail.com' className='form__input mt-1' />
        </div>

        <div>
          <label htmlFor="subject" className='form__label'>Subject</label>
          <input type="text" id='subject' placeholder='Let us know how we can help you' className='form__input mt-1' />
        </div>

        <div className='sm:col-span-2'>
          <label htmlFor="message" className='form__label'>Your Message</label>
          <textarea rows={5} type="text" id='message' placeholder='Let a comment....' className='form__input mt-1' />
        </div>
        <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
      </form>
    </div>
  </section>
  
}

export default Contact