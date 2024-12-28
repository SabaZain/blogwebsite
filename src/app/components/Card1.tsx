import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


interface propsType {
    img: string;
    title: string;
    desc: string;
    link: string;
    
}
    
const Card1 = ({img, title, desc, link}: propsType) => {
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
        <div className='text-center mt-4'>
          <Link href={link}>
          
        <Button>See More</Button>
        
        </Link>
        </div>
    </div>
  )
}

export default Card1;
