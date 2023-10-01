import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { logInUser } from '../firebase.js';




function Login() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const handleInputChange = e=> {
    setFormData({...formData, [e.target.name]:e.target.value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      console.log(email, password);
      const loggedInUser = await logInUser(email, password);
      console.log("logged in as:", loggedInUser);
      navigate('/home')

    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  


  return  <section className="px-5 lg:px-0">
    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
      <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>Hello <span className='text-primaryColor'>Welcome</span> Back 🙋</h3>
      <form className='py-4 md:py-0' onSubmit={handleSubmit}>
        <div className="mb-5">
          <input type="email" placeholder='Enter Your Email' name='email' value={formData.email} onChange={handleInputChange} className='w-full py-3 border-b bprder-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer' required />
        </div>

        <div className="mb-5">
          <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleInputChange} className='w-full py-3 border-b bprder-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer' required />
        </div>

        <div className="mt-7">
          <button type='submit' className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3" >Login</button>
        </div>

        <p className="mt-5 text-textColor text-center">Don't have an account ? <Link to='/register' className='text-primaryColor font-medium ml-1'>Register</Link></p>

      </form>
    </div>
  </section>
  
}

export default Login