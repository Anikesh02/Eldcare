import React from 'react'
import { services } from '../assets/data/services'
import ServiceCard from '../components/Services/ServiceCard'

const Services = () => {
  return <section>
    <div className="container">
    <div className="xl:w-[470px] mx-auto leading-9">
            <h2 className="heading text-center ">Our Services</h2>
          </div>
         
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]'>
    {services.map((item,index)=>(
    <ServiceCard item={item} index={index} key={index}/>
))}
</div>
    </div>
  </section>
  
}

export default Services