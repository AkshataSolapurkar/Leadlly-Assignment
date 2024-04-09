import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Buttoncomp from './Buttoncomp'
import { ChevronDown } from 'lucide-react'
import data from './solutiondata'
import Image from 'next/image'

const OrignalNavbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [developer,setdeveloper] =useState(false)
    const [Resource,setResource]= useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
      };
    
      const togglesolutionLink = () => {
        
        setIsOpen(!isOpen); // Open sidebar when link is clicked
      };
      const toggledeveloperLink = () => {
        
        setdeveloper(!developer); // Open sidebar when link is clicked
      };
    
      const toggleresourceLink = () => {
        
        setResource(!Resource); // Open sidebar when link is clicked
      };  
  return (
    <div className='flex justify-evenly gap-10 text-grey mt-[10px] text-[15px]'>
  
            <div className='relative'>
              <button className='flex relative'>Solution <ChevronDown onClick={toggleDropdown} className='text-grey w-[30px]'/></button>
              {/* Dropdown content */}
              {showDropdown && (
                <div className='absolute w-[616px] h-[552px] grid grid-cols-2 grid-rows-7 gap-4 py-[35px] flex-wrap min-w-[160px] max-h-[647px] min-h-[400px] z-[1000] top-full left-0 mt-1 bg-white shadow-lg rounded-md'>
                  {data.map((item) => (
                    <div className='px-[15px] py-[15px]'>
                     <div className='flex items-center gap-2'>
                     <Image width={32} height={32} alt='pic' src={item.img}/>
                     <div className='flex flex-col'>
                     <Link className='text-grey text-[16px]' key={item.id} href="#">{item.name}</Link>
                     <span className='text-descgrey font-normal'>{item.desc}</span>
                     </div>
                     </div>
                    
                    </div>
                    
                  ))}
                </div>
              )}
            </div>

            <div className='relative'>
              <button className='flex relative' >Devloper <ChevronDown onClick={toggledeveloperLink} className='text-grey w-[30px]'/></button>
              {/* Dropdown content */}
              {developer && (
                <div className='absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md'>
                  {data.map((item) => (
                    <Link key={item.id} href="#">{item.name}</Link>
                  ))}
                </div>
              )}
            </div>
          
            <Link className='flex relative' href="#">Example </Link>
            <Link className='flex relative' href="#">Pricing</Link>
            
            <div className='relative'>
              <button onClick={toggleresourceLink} className='flex relative'>Devloper <ChevronDown className='text-grey w-[30px]'/></button>
              {/* Dropdown content */}
              {Resource && (
                <div className='absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md'>
                  {data.map((item) => (
                    <Link key={item.id} href="#">{item.name}</Link>
                  ))}
                </div>
              )}
            </div>
        </div>
        
  )
}

export default OrignalNavbar
