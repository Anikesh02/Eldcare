import React, {useState} from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import avatar1 from '../../assets/images/people1.png'
import { formateDate } from '../../utils/formateDate'
import {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'

const Feedback = () => {

        const [showFeedbackForm, setShowFeedbackForm] = useState(false)

  return (
     <div>
    <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] ">
            All reviews (272)
            </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
                <figure className='w-10 h-10 rounded-full'>
                    <img className='w-full' src={avatar} alt="" />
                </figure>

                <div>
                    <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>Ali ahmed</h5>
                    <p className="text-[14px] leading-6 text-textColor">{formateDate('02-14-2023')}</p>
                    <p className="text__para mt-3 font-medium text-[15px]">Good services, highly recommended 👍❤️</p>
                    </div>
            </div>
            <div className="flex gap-1">
                {[ ...Array(5).keys()].map((_,index)=><AiFillStar key={index} color='#0067FF' />)}
            </div>

        </div>

        <div className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
                <figure className='w-10 h-10 rounded-full'>
                    <img className='w-full' src={avatar1} alt="" />
                </figure>

                <div>
                    <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>Abhishek Murugan</h5>
                    <p className="text-[14px] leading-6 text-textColor">{formateDate('02-14-2023')}</p>
                    <p className="text__para mt-3 font-medium text-[15px]">Jhakaas👍❤️</p>
                    </div>
            </div>
            <div className="flex gap-1">
                {[ ...Array(4).keys()].map((_,index)=><AiFillStar key={index} color='#0067FF' />)}
            </div>

        </div>


    </div>

    {!showFeedbackForm && <div className="text-center"><button className="btn" onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button></div>}

    {showFeedbackForm && <FeedbackForm/>}

  </div>
  )
}

export default Feedback