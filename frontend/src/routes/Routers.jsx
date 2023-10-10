import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Hospitals/Hospitals'
import DoctorDetails from '../pages/Hospitals/HospitalDetails'
import Appointment from '../pages/Hospitals/Appointment'
import {Routes, Route} from 'react-router-dom'

import PricingCard from '../components/Subscription/PricingCard'
import Payment from '../components/Payment/Payment'
import CareTaker from '../components/Caretaker/CareTaker'


const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/doctors' element={<Doctors/>}></Route>
    <Route path='/doctors/:id' element={<DoctorDetails/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Signup/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/pricing' element={<PricingCard/>}></Route>
    <Route path='/appointment' element={<Appointment/>}></Route>
    <Route path='/payment' element={<Payment/>}></Route>
    <Route path='/care' element={<CareTaker/>}></Route>


    

  </Routes>
  
}

export default Routers