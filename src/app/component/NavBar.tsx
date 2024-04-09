"use client"
import Image from 'next/image'
import React from 'react'
import Sidebar from "./Sidebar"
import { useState,useEffect } from 'react'
import data from './solutiondata'

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
    <div className='justify-between items-center px-[15px] py-[15px] flex shadow-custom w-full fixed'>
      <div className='mx-[15px] mt-[] container'>
        <Image src="/logo.png" alt='logo' width={150} height={42}/>
      </div>
      <div className='flex items-center justify-between mt-[10px] text-right w-[50%]'>
        {isSmallScreen ? 
        <div>
            <Sidebar/>
        </div>
            :
        <div>The Orignal Navbar</div>
        }
        
      </div>
    </div>
  )
}

export default NavBar
