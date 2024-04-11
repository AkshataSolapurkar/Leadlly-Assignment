import React from 'react'
import Image from 'next/image'
import Buttoncomp from './Buttoncomp'
const HeroHead = () => {
  return (
    <div className='relative'>
      <div className='relative container overflow-hidden lg:max-w-[970x]'>
        <div className='pt-[100px] custom-background'>
            <div className='relative z-20 flex justify-center flex-wrap mx-[15px]'>

              <div className='relative flex lg:pt-[50px] pt-[15px] px-[25px] text-text-hero lg:max-w-[54%]'>
                <div className='flex text-center lg:text-left lg:items-start items-center justify-center pb-[100px] flex-col'>
                  <Image src="/herotext.png" alt='ohk' fill className='z-10 bg-center'/>
                  <h1 className='lg:text-[42px] md:text-[26px] text-[22px] font-bold'>
                                    Leading Enterprise Ecommerce Platform in India
                                    </h1>
                  <div className='text-[20px] font-bold mt-[25px] ;g:font-semibold '>
                  Build whitelabelled <span className='text-main'>Multi Band Marketplace</span></div>
                  <p className='lg:text-[20px] text-[15px]  mt-[20px] text-text-hero mb-[30px]'>Designed for diverse B2B and B2C business models</p>                  
                  <Buttoncomp title='SCHEDULE A DEMO'/>
                </div>
                
              </div>
              
              <div className='lg:flex hidden max-w-[46%]'>
                <div className='flex items-center justify-end h-[100%]'>
                  <Image alt='pic' width={382} height={553} src="/ecommerce-banner.avif"></Image>
                </div>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHead
