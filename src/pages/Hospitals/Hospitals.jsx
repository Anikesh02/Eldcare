import React from 'react'
import { useState } from 'react'
import DoctorCard from '../../components/Hospitals/HospitalCard'
import { doctors } from '../../assets/data/hospitals'
import Testimonial from '../../components/Testimonials/Testimonial'

const Doctors = () => {

  const [filteredHospitals, setFilteredHospitals] = useState(doctors)
  console.log("filtered: " + filteredHospitals);
  const search = () => {
    const keyword = document.getElementById('search').value;
    console.log(keyword);
    const filteredHospitals = doctors.filter((doctor) =>
      doctor.hospital.toLowerCase().includes(keyword.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(keyword.toLowerCase()) ||
      doctor.name.toLowerCase().includes(keyword.toLowerCase())
    );
    console.log(filteredHospitals);
    setFilteredHospitals(filteredHospitals);
  }






  return <>
    <section className='bg-[#fff9ea]'>
      <div className="container text-center">
        <h2 className='heading'>Find a Hospital</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
          <input type="search" id='search' className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" placeholder="Search by Location/Hosipital/specialization/service" onChange={search} />
          <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {filteredHospitals.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">What our patient say</h2>
          <p className="text__para text-center">Eldcare saves our Efforts and time by providing the best efficient facilitie.</p>
        </div>

        <Testimonial />
      </div>
    </section>
  </>

}

export default Doctors