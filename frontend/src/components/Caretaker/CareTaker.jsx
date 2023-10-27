import React, { useState } from 'react'
import caretaker from '../../assets/images/caretaker.png'
import { Link } from 'react-router-dom'
import { auth, db } from '../../firebase.js';
import { setDoc, doc } from 'firebase/firestore';
// import { useUser } from '../../UserContext.jsx';
// import Alert from '../../components/Cards/alert';


const CareTaker = () => {

  // const {user} = useUser();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',

    resume: '',
    aadhaar: '',
    gender: '',

  })

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const submitHandler = async e => {
    e.preventDefault();

    try {
      const { name, email, phone, age, gender, resume, aadhaar } = formData;
      console.log(formData);

      const applicationsRef = doc(db, 'caretakerApplications', email);

      await setDoc(applicationsRef, {
          name: name,
          email: email,
          phone: phone,
          age: age,

          gender: gender,
          resume: resume,
          aadhaar: aadhaar,
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          resume: resume,
          aadhaar: aadhaar,
          gender: '',

        });

        console.log('Application data saved successfully!');

        alert('Application Saved Successfully! ');
        window.location.href = '/review';
      

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <section className='px-5 xl:px-0'>
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img box  */}
          <div className="hidden lg:block bg-transparent rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={caretaker} alt="" className='w-full rounded-l-lg' />
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              Apply for <span className='text-primaryColor'>Care Taker📝</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input type="text" placeholder='Full Name' name='name' value={formData.name} onChange={handleInputChange} className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor ' required />
              </div>

              <div className="mb-5">
                <input type="email" placeholder='Enter your Email' name='email' value={formData.email} onChange={handleInputChange} className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor ' required />
              </div>

              <div className="mb-5">
                <input type="phone" length="10" placeholder='Enter your Mobile Number' name='phone' value={formData.phone} onChange={handleInputChange} className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor ' required />
              </div>


              <div className='mb-3'>
                <label className='text-headingColor font-bold text-[16px] leading-7'> Gender:
                  <select name="gender" value={formData.gender} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none cursor-pointer' required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>

                <label className='text-headingColor font-bold text-[16px] leading-7 ml-5'> Age:</label>
                <input type="age" placeholder='Enter your Age' name='age' value={formData.age} onChange={handleInputChange} className=' border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  ml-3' required />

                {/* Select service  */}
                {/* <div className='mb-5 mt-5'>
                  <label className='text-headingColor font-bold text-[16px] leading-7'> Select Treatment Service:
                    <select name="service" value={formData.service} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none cursor-pointer' required>
                      <option value="">Select</option>
                      <option value="cancer">Cancer Care</option>
                      <option value="dialysis">Dialysis</option>
                      <option value="heart">Heart and Vascular</option>
                      <option value="teeth">Dental</option>
                      <option value="mental">Mental Health</option>
                      <option value="brain">Neurology</option>
                      <option value="burn">Burn Treatment</option>
                    </select>
                  </label>
                </div> */}

                {/* Select hospital  */}
                {/* <label className='text-headingColor font-bold text-[16px] leading-7'> Select Hospital:
                  <select name="hospital" value={formData.hospital} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none cursor-pointer' required>
                    <option value="">Select</option>
                    <option value="nair">Nair Hospital, Mumbai Central</option>
                    <option value="lilavati">Lilavati Hospital, Bandra West</option>
                    <option value="kohinoor">Kohinoor Hospital, Marine Lines</option>
                    <option value="global">Global Hospital, Parel East</option>
                    <option value="lotus">Lotus Hospital, Borivali West</option>
                    <option value="yashoda">Yashoda Hospital, Marine Lines</option>

                  </select>
                </label> */}

              </div>
              {/* time slot  */}
              <div className='mb-5'>
                {/* <label className='text-headingColor font-bold text-[16px] leading-7 '>Enter time slot:
                  <select name="time" value={formData.time} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none cursor-pointer' required>
                    <option value="">Select</option>
                    <option value="sunday">Sunday: 9:00 AM to 1:30 PM</option>
                    <option value="tuesday">Tuesday: 4:00 PM to 9:30 PM</option>
                    <option value="friday">Friday: 1:30 PM to 6:30 PM</option>
                  </select>
                </label> */}

                <div className="mb-5">
                  <input type="aadhaar" length="10" placeholder='Enter your Aadhaar Number' name='aadhaar' value={formData.aadhaar} onChange={handleInputChange} className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor ' required />
                </div>

                <div className="mb-5">
                  <input type="resume" length="10" placeholder='Your resume link' name='resume' value={formData.resume} onChange={handleInputChange} className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor ' required />
                </div>

                <div className="mt-7">
                  <div>
                    <button type='submit' className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">Submit</button>
                  </div>
                </div>

              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default CareTaker