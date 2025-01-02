"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };
  return (
    <div className=" bg-first">
    <div className='flex justify-around align items-center'>
      <div className='flex'>
      <Image src="/Image/lifestylelogo.jpg" alt="logo" width={60} height={60} className='rounded-full p-2' />
      <h1 className='p-4 text-xl text-second font-bold '>LifeStyle</h1>
      </div>
      <div className='md:hidden lg:hidden cursor-pointer' onClick={toggleMenu} aria-label='Toggle menu' aria-expanded={isOpen}>
      <GiHamburgerMenu size={30}/>
      </div>
      
    <ul className='hidden md:flex lg:flex gap-6 cursor-pointer'>
        <li className='text-xl font-semibold hover:text-second'><Link href='/'>Home</Link></li>
        <li className='text-xl font-semibold hover:text-second'><Link href='About'>About</Link></li>
        <li className='text-xl font-semibold hover:text-second'><Link href='Blog-Category'>Blogs</Link></li>
        <li className='text-xl font-semibold hover:text-second'><Link href='Contact'>Contact</Link></li>
      </ul>
      </div>
   

    {isOpen && (
        <div className='md:hidden lg:hidden'> 
        <ul className='bg-second flex flex-col gap-4'>
        <li className='font-semibold hover:text-first'><Link href='/' onClick={() => setIsOpen(false)}>Home</Link></li>
        <li className='font-semibold hover:text-first'><Link href='About' onClick={() => setIsOpen(false)}>About</Link></li>
        <li className='font-semibold hover:text-first'><Link href='Blog-Category' onClick={() => setIsOpen(false)}>Blogs Category</Link></li>
        <li className='font-semibold hover:text-first'><Link href='Contact' onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
        </div>
        
    )}
     </div>
    
  );
};

export default Navbar;
