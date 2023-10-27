import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
// import heroImg02 from '../assets/images/hero-img02.png'
// import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.jpg'
// import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import faqImg from '../assets/images/faq-img.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import DoctorList from '../components/Hospitals/HospitalList'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonials/Testimonial'
import { useEffect } from 'react'
import { useUser } from '../UserContext'
import { auth } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { getParameters } from '../firebase.js';



const Home = () => {

  const { user, updateUser } = useUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, photoURL, email } = user;

        getParameters(user.uid).then((data) => {
          updateUser({ uid, name: displayName, photoURL, email, age: data.age, gender: data.gender, role: data.role });
          localStorage.setItem('user', JSON.stringify(user));
          console.log(localStorage.getItem('user'));
        });
      } else {
        updateUser(null);
      }
    });
    return () => unsubscribe();
  }, [updateUser]);

  console.log(user);
  console.log(user?.name);


  return (
    <>

      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Hero Content  */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px] md:leading-[70px]'>Hello, {user?.name ? user.name : 'User'}.</h1>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px] md:leading-[70px]'>We help our elders live a healthy, longer life.</h1>
                <p className='text__para'>
                EldCare was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.</p>
                <Link to='/appointment'><button className='btn'>Request an Appointment</button></Link>
                <Link to='/care'><button className='btn ml-5'>Apply for Care Taker</button></Link>


              </div>

              {/* Hero Counter  */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Services</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Hospital Location</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Elder's Satisfaction</p>
                </div>
              </div>



            </div>
            {/* Hero Content  */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className='w-full' src={heroImg01} alt="" />
              </div>
              {/* <div className='mt-[30px]'>
                <img src={heroImg02} alt="" className='w-full mb-[30px]' />
                <img src={heroImg03} alt="" className='w-full' />


              </div> */}
            </div>

          </div>
        </div>
      </section>
      {/* Hero Content end*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className='heading text-center'>Providing the best Appointment services</h2>
            <p className='text__para text-center'>World-class care for elders. Our Health Service offers unmatched, expert health care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

            <div className='py-[30px] px-5'>
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Service</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center"> Our Health Service offers unmatched, expert health care in topmost qualified and organized manner</p>

                <Link to='/services' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Hospital</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center"> An organized medical service offering diagnostic, therapeutic, or preventive outpatient services.</p>

                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appointment</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Easily Book appoitnments in nearest possible clinics/hospitals. </p>

                <Link to='/appointment' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <About /> */}


      {/* Feature Section  */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* Feature Content   */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get proper treatment <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Select the type of treatment and search for nearby Hospital.
                </li>
                <li className="text__para">
                  3. Book Appointment for treatment using online scheduling tool.
                </li>
              </ul>
              <Link to='/services'><button className="btn">Learn More</button></Link>
            </div>
            {/* Feature img  */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 items-center">
              <img src={featureImg} className='w-full items-center justify-between' alt="" />
              {/* <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between"> */}
                  {/* <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600] ">Tue, 24</p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400] ">10:00 AM</p> */}
                    {/* <div>
                      <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                        <img src={videoIcon} alt="" />
                      </span>
                    </div> */}
                  {/* </div>
                </div> */}

                {/* <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div> */}

                {/* <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Anikesh Kulal
                  </h4>
                </div> */}


              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
      {/* Feature Section End */}

      {/* Great Doctors  */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Top Hospitals For Best Services</h2>
            <p className="text__para text-center">All the hospitals are known for their service and also are well recognized.</p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* Great Doctors End */}

      {/* FAQ Section  */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className='w-1/2 hidden md:block'><img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className='heading'>Most Questions by our beloved patients</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section End */}

      {/* testimonial  */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our visitor's say</h2>
            <p className="text__para text-center">Eldcare saves our Efforts and time by providing the best efficient facilities.</p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/* testimonial end */}







    </>
  )
}

export default Home