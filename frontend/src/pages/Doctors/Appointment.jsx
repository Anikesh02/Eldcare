import React, { useState } from 'react'
import appointmentImg from '../../assets/images/appointment.jpg'
import { Link } from 'react-router-dom'


const Appointment = () => {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        age:'',
        time:'',
        hospital:'',
        service:'',
        gender:'',
        role:'patient'
      })
    
      const handleInputChange = e=> {
        setFormData({...formData, [e.target.name]:e.target.value})
      }
    
    //   const handleFileInputChange = async event=>{
    //     const file = event.target.files[0]
    
    //     console.log(file)
    //   }
    
      const submitHandler = async event=>{
        event.preventDefault()
      }


  return (
    <section className='px-5 xl:px-0'>
    <div className="max-w-[1170px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* img box  */}
        <div className="hidden lg:block bg-transparent rounded-l-lg">
          <figure className="rounded-l-lg">
            <img src={appointmentImg} alt="" className='w-full rounded-l-lg' />
          </figure>
        </div>

        <div className="rounded-l-lg lg:pl-16 py-10">
          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
            Book an <span className='text-primaryColor'>Appointment</span>
            </h3>

        <form onSubmit={submitHandler}>
        <div className="mb-5">
          <input type="text" placeholder='Full Name' name='name' value={formData.name} onChange={handleInputChange} className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor ' required />
        </div>

        <div className="mb-5">
          <input type="email" placeholder='Enter your Email' name='email' value={formData.email} onChange={handleInputChange}  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor ' required />
        </div>

        <div className="mb-5">
          <input type="phone" maxlength="10" placeholder='Enter your Mobile Number' name='phone' value={formData.phone} onChange={handleInputChange}  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor ' required />
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
    <input type="age" placeholder='Enter your Age' name='age' value={formData.age} onChange={handleInputChange}  className=' border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  ml-3' required />

        {/* Select service  */}
<div className='mb-5 mt-5'>
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
    </div>

    {/* Select hospital  */}
    <label className='text-headingColor font-bold text-[16px] leading-7'> Select Hospital: 
    <select name="hospital" value={formData.hospital} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none cursor-pointer' required>
      <option value="">Select</option>
      <option value="nair">Nair Hospital, Mumbai Central</option>
      <option value="lilavati">Lilavati Hospital, Bandra West</option>
      <option value="heart">Hospital 3</option>
      <option value="teeth">Hospital 4</option>
      <option value="mental">Hospital 5</option>
      <option value="brain">Hospital 6</option>
      
    </select>
    </label>
    
</div>
    {/* time slot  */}
    <div className='mb-5'>
    <label className='text-headingColor font-bold text-[16px] leading-7 '>Enter time slot:
    <select name="time" value={formData.time} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none cursor-pointer' required>
      <option value="">Select</option>
      <option value="sunday">Sunday: 9:00 AM to 1:30 PM</option>
      <option value="tuesday">Tuesday: 4:00 PM to 9:30 PM</option>
      <option value="friday">Friday: 1:30 PM to 6:30 PM</option>
    </select>
    </label>
  </div>


      <div className="mt-7">
          <button type='submit' className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">Proceed</button>
        </div>

        </form>

        </div>
      </div>
    </div>
  </section>
  )
}

export default Appointment