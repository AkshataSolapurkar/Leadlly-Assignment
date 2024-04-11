
"use client"
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import data from './solutiondata';
import developerData from './developdata';
import Resources from './resourcesdata';
import Social from './social';
import Buttoncomp from './Buttoncomp';
import { Menu } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[solution,setsolution] = useState(false)
  const [developer,setdeveloper] =useState(false)
  const [Resource,setResource]= useState(false)
  const [activeresourceLink, setActiveresourceLink] = useState(false);
  const [activedeveloperLink, setActivedeveloperLink] = useState(false);
  const [activesolutionLink, setActivesolutionLink] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const togglesolutionLink = () => {
    setsolution(!solution);
    setdeveloper(false)
    setResource(false)
     // Open sidebar when link is clicked
  };
  const toggledeveloperLink = () => {
    setdeveloper(!developer);
     setsolution(false)
     setResource(false)// Open sidebar when link is clicked
  };

  const toggleresourceLink = () => {
    setResource(!Resource);
    setsolution(false)
    setdeveloper(false)
     // Open sidebar when link is clicked
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className='p-[15px] relative w-full h-full z-[9999] bg-white'>
        <div className='m-0 pl-0 flex flex-col text-left'>
          <div className='flex justify-between items-center mb-[15px]'>
          <a onClick={togglesolutionLink} className='relative w-full py-[3px] text-[15px] text-grey' href="#">Solution</a>
          <button className='relative py-[3px] text-[15px] text-grey' onClick={togglesolutionLink}>v</button>
          </div>
          {data.map((items) => {
            const {id,img,name} = items;
            return <div className='flex flex-co h-auto p-0'>
            {solution ? 
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
          

          <div className='flex justify-between mb-[15px] items-center'>
          <a onClick={toggledeveloperLink} className='relative w-full py-[3px] text-[15px] text-grey' href="#">Developer</a>
          <button className='relative py-[3px] text-[15px] text-grey' onClick={toggledeveloperLink}>v</button>
          </div>
          {developerData.map((items) => {
            const {id,img,name} = items;
            return <div className='flex flex-co h-auto p-0'>
            {developer ? 
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
          
        <a className='relative w-full mb-[15px] py-[3px] text-[15px] text-grey' href="#">Examples</a>
        <a className='relative w-full mb-[15px] py-[3px] text-[15px] text-grey' href="#">Pricing</a>

        <div className='flex justify-between mb-[15px] items-center'>
          <a onClick={toggleresourceLink} className='relative w-full py-[3px] text-[15px] text-grey' href="#">Resources</a>
          <button className='relative py-[3px] text-[15px] text-grey' onClick={toggleresourceLink}>v</button>
          </div>
          {Resources.map((items) => {
            const {id,img,name} = items;
            return <div className='flex flex-co h-auto p-0'>
            {Resource ? 
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
           <Social/>
           <div className='mt-[30px]'>
           <Buttoncomp title=' START YOUR FREE TRIAL '/>
           <Buttoncomp title=' +91-8010-117-117 '/> 
           <Buttoncomp title=' REQUEST A DEMO '/>
           </div>
           
        </div>
        
        </div>
      </div>
      <div className="button-container">
        <button className="text-right" onClick={toggleSidebar}>
          {isOpen ? 
          <div className='bg-gray-300 rounded-full text-center flex w-[30px] h-[30px] items-center justify-center mb-[15px]'>x</div>  : <Menu/>}
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
          background-color:white;
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
