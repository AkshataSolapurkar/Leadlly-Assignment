import React from 'react'
import { Facebook,Twitter,Youtube,Linkedin,Instagram,Dribbble  } from 'lucide-react';
import Link from 'next/link';

const social = () => {
  return (
    <div>
        <div className='mt-[25px]'>
            <div className='text-grey  mb-[10px]'>Socialize With Us:</div>
            <div className='flex justify-evenly'>
            <Link href="#">
            <Facebook className='bg-[#0007bd] text-white p-[3px] rounded-full w-[30px] h-[30px]'/></Link>
            <Link className='' href="#"><Twitter className='bg-[#1fd2ff] w-[30px] h-[30px] text-white p-[3px] rounded-full' /></Link>
            <Link href="#"><Youtube className='bg-[#ff0000] w-[30px] h-[30px] text-white p-[3px] rounded-full'/></Link>
            <Link href="#"><Linkedin className='bg-[#1f86f4] w-[30px] h-[30px] text-white p-[3px] rounded-full'/></Link>
            <Link href="#"><Instagram className='w-[30px] h-[30px] bg-[#db004d] text-white p-[3px] rounded-full'/></Link>
            <Link href="#"><Dribbble className='w-[30px] h-[30px] bg-black text-white p-[3px] rounded-full '/></Link>
            
            </div>
          </div>
      
    </div>
  )
}

export default social
