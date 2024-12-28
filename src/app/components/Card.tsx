import React from 'react'
import Image from 'next/image';


interface propsType {
    img: string;
    title: string;
    desc: string;
}
    
const Card = ({img, title, desc}: propsType) => {
  return (
    <div className='bg-green-200 hover:bg-green-400 px-12 py-4 border-slate-800 shadow-2xl rounded-md'>
        <Image
        className='border rounded-sm border-slate-500'
        src={img}
        alt="categories"
        width={350}
        height={350}
        />
        <h2 className='text-xl text-center font-semibold font-serif mt-2'>{title}</h2>
        <p className='text-sm text-center font-normal font-serif'>{desc}</p>
        
    </div>
  )
}

export default Card;
