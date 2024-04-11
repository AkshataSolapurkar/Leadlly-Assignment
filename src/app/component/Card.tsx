"use client"
import React from 'react'
import { carprops } from '../../../types'
import { calculateCarRent } from '../../../types'
import Image from 'next/image'
import CardButton from './CardButton'

import CarDetails from './CarDetails'
interface CarCardProps{
  cars: carprops
}

const CarCard = ({cars}:CarCardProps) => {
  const [isOpen , setIsOpen] =React.useState(false)
  const  {city_mpg, year ,make ,model,transmission, drive} = cars;
  const carent = calculateCarRent(year,city_mpg)
  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>{make} {model}</h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
      <span className='self-start text-[14px] font-semibold'>
       Rs
      </span>
      {carent}
      <span className='self-end text-[14px] font-medium'>
       Rs
      </span>
      </p>
      <div className='relative w-full h-20 my-3 object-contain'>
        <Image
        src="/hero.png"
        alt='hero'
        fill
        priority
        className=' object-contain'/>
      </div>

      <div className='relative w-full mt-10'>
        <div className='flex group-hover:invisible w-full justify-between text-gray-600'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src="/steering-wheel.svg"
            alt='streeing'
            width={20}
            height={20}/>
            <p className='text-[14px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src="/tire.svg"
            alt='streeing'
            width={20}
            height={20}/>
            <p className='text-[14px]'>
              {drive.toUpperCase()}
            </p>
          </div>

          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src="/gas.svg"
            alt='streeing'
            width={20}
            height={20}/>
            <p className='text-[14px]'>
              {city_mpg} MPG
            </p>
          </div>
          </div>
          <div className="car-card__btn-container">
          <CardButton
            title='View More'
            containerstyles='py-[16px] px-[15px] flex gap-2 rounded-full bg-greenHover w-full'
            textstyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handlebtn={() => setIsOpen(true)}
          />
        </div>
          
      </div>
      <CarDetails isOpen={isOpen} classmodel={()=> setIsOpen(false)} car={cars}/>
      
    </div>
  )
}

export default CarCard
