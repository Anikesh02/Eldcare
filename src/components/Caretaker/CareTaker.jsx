import React, { useState } from 'react';
import caretaker from '../../assets/images/caretaker.png';
import { Link } from 'react-router-dom';
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
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
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
      alert('Application Saved Successfully!');
      window.location.href = '/review';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img box */}
          <div className="hidden lg:block bg-transparent rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={caretaker} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Apply for <span className="text-primaryColor">Care Taker📝</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0048a1] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-black placeholder:text-gray-700 dark:placeholder-gray-500"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0048a1] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-black placeholder:text-gray-700 dark:placeholder-gray-500"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="phone"
                  placeholder="Enter your Mobile Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0048a1] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-black placeholder:text-gray-700 dark:placeholder-gray-500"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-black font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none cursor-pointer dark:bg-gray-700 dark:text-gray-300"
                    required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>

                <label className="text-headingColor font-bold text-[16px] leading-7 ml-5">
                  Age:
                </label>
                <input
                  type="age"
                  placeholder="Enter your Age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="border-b border-solid border-[#0048a1] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-black placeholder:text-gray-700 dark:placeholder-gray-500 ml-3"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="aadhaar"
                  placeholder="Enter your Aadhaar Number"
                  name="aadhaar"
                  value={formData.aadhaar}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0048a1] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-black placeholder:text-gray-700 dark:placeholder-gray-500"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="resume"
                  placeholder="Your resume link"
                  name="resume"
                  value={formData.resume}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0048a1] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-black placeholder:text-gray-700 dark:placeholder-gray-500"
                  required
                />
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareTaker;
