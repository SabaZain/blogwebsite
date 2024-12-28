import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black'>
      <h1 className='text-red-800 text-2xl font-bold p-2 pl-6'>About Us</h1>
      <p className='text-white text-sm p-2 pl-6'>Welcome to LifeStyle, your ultimate destination for lifestyle inspiration, practical advice, and a journey toward a more fulfilling life!
        At LifeStyle, we believe that life is an adventure, and its all about finding balance, embracing new experiences, and nurturing the best version of ourselves. Our blog covers a wide array of topics, 
        including wellness, health, travel, fashion, personal growth,
        and much more.</p>
        <div className='text-white pl-5 mt-2'>
        <div><MdEmail size={20} color='green'/>saba_punjwani@yahoo.com</div>
        <div><FaFacebook size={20} color='blue'/>Saba Zain</div>
        <div><FaPhoneAlt size={20} color='red'/>0332-3319007</div>
        </div>
        <div>
          <p className='text-white text-center'>&copy; Copyright LifeStyle 2024 | All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer;