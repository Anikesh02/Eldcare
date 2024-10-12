import React, { useState } from 'react'
import appointmentImg from '../../assets/images/appointment.jpg'
import { Link } from 'react-router-dom'
import { auth, db } from '../../firebase.js';
import { setDoc, doc } from 'firebase/firestore';
import { useUser } from '../../UserContext.jsx';
import Alert from '../../components/Cards/alert';


const Appointment = () => {

  const user = JSON.parse(localStorage.getItem('user'));


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    time: '',
    hospital: '',
    service: '',
    gender: '',
    role: 'patient'
  })

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const submitHandler = async e => {
    e.preventDefault();

    try {
      const { name, email, phone, age, time, hospital, service, gender, role } = formData;
      console.log(formData);

      const appointmentRef = doc(db, 'appointments', user.uid + time);

      await setDoc(appointmentRef, {
        name: name,
        email: email,
        phone: phone,
        age: age,
        time: time,
        hospital: hospital,
        service: service,
        gender: gender,
        role: role,
        user: user.uid
      }).then(() => {
        console.log('Appointment data saved successfully!');

        //show success message and redirect to home page
        alert('Appointment Saved Successfully!  Proceed for payment ?');
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          time: '',
          hospital: '',
          service: '',
          gender: '',
          role: 'patient',
        });
        window.location.href = 'https://buy.stripe.com/test_6oE29d91y3X4e0o144';
      });

      // Clear the form after submission




    } catch (error) {
      console.log(error);
    }
  }


  return (
    <section className='px-5 xl:px-0'>
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* img box  */}
          <div className="hidden lg:block bg-transparent rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={appointmentImg} alt="" className='w-full rounded-l-lg' />
            </figure>
          </div>

          <div className="rounded-l-lg">
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              Book an <span className='text-primaryColor'>Appointment 📝</span>
            </h3>

            <form onSubmit={submitHandler} className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <div className="col-span-2">
                <input type="text" placeholder='Your Full Name' name='name' value={formData.name} onChange={handleInputChange} className='w-full relative py-3 px-4 border border-solid peer border-gray-300 bg-gray-50 focus:bg-white focus:outline-none outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor/90 dark:bg-generalBackgroundColorDark/90 rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg dark:border-gray-600 cursor-pointer' required />
              </div>

              <div className="col-span-2">
                <input type="email" placeholder='Your Email' name='email' value={formData.email} onChange={handleInputChange} className='w-full relative py-3 px-4 border border-solid peer border-gray-300 bg-gray-50 focus:bg-white focus:outline-none outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor/90 dark:bg-generalBackgroundColorDark/90 rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg dark:border-gray-600 cursor-pointer' required />
              </div>

              <div className="col-span-2">
                <input type="phone" length="10" placeholder='Your Mobile Number' name='phone' value={formData.phone} onChange={handleInputChange} className='w-full relative py-3 px-4 border border-solid peer border-gray-300 bg-gray-50 focus:bg-white focus:outline-none outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor/90 dark:bg-generalBackgroundColorDark/90 rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg dark:border-gray-600 cursor-pointer' required />
              </div>


              <div className='col-span-1 flex items-center justify-between flex-wrap'>
                {/* <label className='text-headingColor font-bold text-[16px] leading-7'> Gender: */}
                <h6 className='text-headingColor text-[16px] inline-block font-bold leading-7'>Gender : </h6>
                <div>
                  <label className='pr-4 text-textColor text-sm'>
                    <input
                      defaultChecked={formData.gender === "male"} type='radio' name="gender" value={"male"} className='mr-3' />Male
                  </label>
                  <label className='pr-4 text-textColor text-sm '>
                    <input
                      defaultChecked={formData.gender === "female"} type='radio' name="gender" value={"female"} className='mr-3' />Female
                  </label>
                </div>
              </div>

              <div className="col-span-1">
                <input type="number" placeholder='Your Age' name='age' value={formData.age} onChange={handleInputChange} className='w-full relative py-3 px-4 border border-solid peer border-gray-300 bg-gray-50 focus:bg-white focus:outline-none outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor/90 dark:bg-generalBackgroundColorDark/90 rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg dark:border-gray-600 cursor-pointer' required />
              </div>

              {/* Select service  */}
              <div className="col-span-1">
                <label className='text-headingColor font-bold text-[16px] leading-7'> Select Treatment Service:
                  <select name="service" value={formData.service} onChange={handleInputChange} placeholder='sele' className='w-full relative py-3 px-4 border border-solid peer border-gray-300 bg-gray-50 focus:bg-white focus:outline-none outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor/90 dark:bg-generalBackgroundColorDark/90 rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg dark:border-gray-600 cursor-pointer' required>
                    <option value="" hidden></option>
                    <option value="cancer">Cancer Care</option>
                    <option value="dialysis">Dialysis</option>
                    <option value="heart">Heart and Vascular</option>
                    <option value="teeth">Dental</option>
                    <option value="mental">Mental Health</option>
                    <option value="brain">Neurology</option>
                    <option value="burn">Burn Treatment</option>
                  </select>
                </label>
              </div>


              {/* time slot  */}
              <div className='col-span-1'>
                <label className='text-headingColor font-bold text-[16px] leading-7 '>Select time slot:
                  <select name="time" value={formData.time} onChange={handleInputChange} className='w-full relative py-3 px-4 border border-solid peer border-gray-300 bg-gray-50 focus:bg-white focus:outline-none outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor/90 dark:bg-generalBackgroundColorDark/90 rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg dark:border-gray-600 cursor-pointer' required>
                    <option value="" hidden selected></option>
                    <option value="sunday">Sunday: 9:00 AM to 1:30 PM</option>
                    <option value="tuesday">Tuesday: 4:00 PM to 9:30 PM</option>
                    <option value="friday">Friday: 1:30 PM to 6:30 PM</option>
                  </select>
                </label>
              </div>

              {/* Select hospital  */}
              <div className="col-span-2">
                <label className='text-headingColor font-bold text-[16px] leading-7'> Select Hospital:
                  <select name="hospital" value={formData.hospital} onChange={handleInputChange} className='w-full relative py-3 px-4 border border-solid peer border-gray-300 bg-gray-50 focus:bg-white focus:outline-none outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor/90 dark:bg-generalBackgroundColorDark/90 rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg dark:border-gray-600 cursor-pointer' required>
                    <option value="" hidden selected></option>
                    <option value="nair">Nair Hospital, Mumbai Central</option>
                    <option value="lilavati">Lilavati Hospital, Bandra West</option>
                    <option value="kohinoor">Kohinoor Hospital, Marine Lines</option>
                    <option value="global">Global Hospital, Parel East</option>
                    <option value="lotus">Lotus Hospital, Borivali West</option>
                    <option value="yashoda">Yashoda Hospital, Marine Lines</option>
                  </select>
                </label>
              </div>
              <div className="col-span-2">
                <button type='submit' className='w-full relative py-3 px-4 border border-solid peer border-gray-300  focus:outline-none outline-none bg-primaryColor hover:bg-transparent hover:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor/90  rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg dark:border-gray-600 active:scale-95 disabled:active:scale-100 '>Proceed</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Appointment