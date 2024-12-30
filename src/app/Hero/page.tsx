import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row lg:flex-row justify-around align items-center bg-third'>
        <div className='mt-8 mb-8'>
            <h1 className='text-[24px] text-center  font-bold p-3'>Embrace a life well-lived</h1>
            <p className='text-[16px] md:text-[18px] lg:text-[18px] text-center text-second font-semibold p-3'>Discover the perfect balance of health, adventure, and comfort.<br/> Live life to the fullest, every day.</p>
            <div>
            <Button variant="default" className='text-xl text-center mt-4 ml-24 md:ml-52 lg:ml-52 p-3'><Link href="Blog-Category">Blogs Category</Link></Button>
            </div>
        </div>
        <div className='mt-10'>
            <Image src="/Image/healthylifestyle.webp" alt="hero image" width={550} height={550} /> 
        </div>
      
    </section>
  )
}

export default Hero;
