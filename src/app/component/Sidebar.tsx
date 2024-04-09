
"use client"
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { DataItem } from '../../../types';
import data from './data';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const toggleLink = () => {
    setActiveLink(!activeLink)
    setIsOpen(true); // Open sidebar when link is clicked
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className='p-[15px] relative w-full h-full z-[9999] bg-white'>
        <div className='m-0 pl-0 flex flex-col text-left'>
          <div className='flex justify-between items-center'>
          <a className='relative w-full py-[3px] text-[15px] text-grey' href="#">Solution</a>
          <button className='relative py-[3px] text-[15px] text-grey' onClick={toggleLink}>v</button>
          </div>
          {data.map((items) => {
            const {id,img,name} = items;
            return <div className='flex flex-co h-auto p-0'>
            {activeLink ? 
            <div className='mt-[15px] text-grey '>
              <div className='mb-[10px] '>
               <Link href="/Navbar.tsx" className="flex gap-2 items-center">
                 <span className=''>
                   <Image src={img} width={32} height={32} className="" alt='pic'/>
                 </span>
                 <span><p>{name}</p></span>
               </Link>
              </div>
            </div>
            :
            <></>
            }
            </div>
          })}
          
        
        <a className='relative w-full mb-[15px] py-[3px] text-[15px] text-grey' href="#">Develop</a>
        <a className='relative w-full mb-[15px] py-[3px] text-[15px] text-grey' href="#">Examples</a>
        <a className='relative w-full mb-[15px] py-[3px] text-[15px] text-grey' href="#">Pricing</a>
        <a className='relative w-full mb-[15px] py-[3px] text-[15px] text-grey' href="#">Resources</a>
        </div>
        
        </div>
      </div>
      <div className="button-container">
        <button className="text-right" onClick={toggleSidebar}>
          {isOpen ? 
          <div className='bg-gray-300 rounded-full text-center flex w-[30px] h-[30px] items-center justify-center mb-[15px]'>x</div>  : "Open Sidebar"}
        </button>
      </div>
      <style jsx>{`
        .sidebar {
          height: 100%;
          width: 0;
          max-width:80%;
          position: fixed;
          top: 0;
          box-shadow: 0 -7px 8px 1px #000;
          right: 0;
          overflow-y: auto;
          overflow-x: hidden;
          transition: 0.5s;
          padding-top: 60px;
          z-index: 1000;
        }
        
        .sidebar.open {
          width: 250px;
        }
        
        .sidebar .close-btn {
          position: absolute;
          top: 0;
          right: 25px;
          font-size: 36px;
          margin-left: 50px;
        }
        
        .button-container {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1100;
        }
        
        .open-btn {
          background-color: #111;
          color: white;
          border: none;
          cursor: pointer;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 5px;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
