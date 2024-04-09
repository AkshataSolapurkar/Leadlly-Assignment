import React from 'react'
import { Buttonprop } from '../../../types'

const Buttoncomp = ({title}:Buttonprop) => {
  return (
    <div className=''>
       <button className='w-full flex items-center bg-main text-white text-[15px] font-semibold justify-center rounded-2xl mt-[10px] px-[25px] p-[5px]'>{title}</button>
    </div>
  )
}

export default Buttoncomp
