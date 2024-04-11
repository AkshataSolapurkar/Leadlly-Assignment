import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Github } from 'lucide-react'

const Footer = () => {
  return (
    <div>
      <footer className='flex flex-col mt-[50px] pt-[25px] pb-[25px] text-black border-t border-gray-300'>
          <div className='flex justify-center items-center gap-6'>
            <Image src="/logo.png"
            alt='logo'
            width={118}
            height={18}
            className='object-contain pb-[0x]'/>
            <p className='flex gap-5 text-base font-semibold text-green-800 '>
              Leadlly Assignment <br />
            <Link className='flex gap-3' href="https://github.com/AkshataSolapurkar/Leadlly-Assignment">Akshata Solapurkar <span><Github/></span></Link>
            </p>
          </div>
      </footer>
    </div>
  )
}

export default Footer
