import React from 'react'
import { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const FaqItem = ({item}) => {

  const [isOpen,setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='p-3 lg:p-5 rounded-[17px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer'>
        <div className="flex items-center justify-between gap-5" onClick={toggleAccordion}>
            <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor'>{item.question}</h4>
            <div className={`${isOpen && 'bg-primaryColor text-white border-none'}w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}>{isOpen ? <AiOutlineMinus/>:<AiOutlinePlus/>}
            </div>
        </div>

        {isOpen && <div className='mt-4'>
          <p className='text-[14px] leading-6 lg:text-{16px} lg:leading-7 font-[400] text-textColor'>{item.content}</p>
          </div>}
    </div>
  )
}

export default FaqItem