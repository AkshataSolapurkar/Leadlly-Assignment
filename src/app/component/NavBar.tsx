"use client"
import Image from 'next/image'
import React from 'react'
import Sidebar from "./Sidebar"
import { useState,useEffect } from 'react'
import data from './solutiondata'
import Link from 'next/link'
import Buttoncomp from './Buttoncomp'
import { Menu,ChevronDown  } from 'lucide-react'
import OrignalNavbar from './OrignalNavbar'

const NavBar = () => {
   const[dataprop,setdataprop] =useState(data)

   const [isSmallScreen, setIsSmallScreen] = useState(false);

   const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1023); // 768px is the breakpoint for md screen size
    };
  
    // Listen for resize events to update screen size state
    useEffect(() => {
      handleResize(); // Call it once to set initial state
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    

  return (
    <div className='mx-[15px] my-[15px] container z-[-1] relativeS'>
      <div className='flex items-center justify-between'>
      <div className=''>
        <Image src="/logo.png" alt='logo' width={150} className='z-10' height={42}/>
      </div>
        {isSmallScreen ? 
          <Sidebar/>
            :
            <OrignalNavbar/>
        }
      <div className='flex justify-evenly gap-5 items-center'>
      <Buttoncomp title='CONTACT US'/>
      <Menu className='mt-[12px]'/>
      </div>
      
      </div>
      
      
    </div>
  )
}

export default NavBar
