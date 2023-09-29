import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCarding from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'


const About = () => {
  return <section>
    <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap[130px] xl:gap-0 flex-col lg:flex-row">
            {/* About img  */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={aboutImg} alt="" />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                    <img src={aboutCarding} alt="" />
                </div>
            </div>

        {/* About Content  */}
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestias adipisci dolor deleniti recusandae possimus, deserunt repudiandae maiores placeat, magni quod qui et minus. Est, illum repudiandae? Culpa esse, vero earum porro tenetur consequuntur doloribus dolore?</p>
            <p className="text__para mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestias adipisci dolor deleniti recusandae possimus, deserunt repudiandae maiores placeat, magni quod qui et minus. Est, illum repudiandae? Culpa esse, vero earum porro tenetur consequuntur doloribus dolore?</p>

            <Link to='/'><button className="btn">Learn More</button></Link>
        </div>

        </div>
    </div>
  </section>
  
}

export default About