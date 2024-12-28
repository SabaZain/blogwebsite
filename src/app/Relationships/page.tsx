import React from 'react'
import Image from 'next/image';
import CommentSection from '../components/CommentSection';

const Relationships = () => {
  return (
    <div className='bg-red-300 p-4'>
    <h1 className='text-3xl text-center font-bold mt-8'>Lifestyle-Relationships</h1>
    <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center align items-center gap-6'>
      <div className='mt-6'>
      <Image src="/Image/friendship.jpg" alt="Friendship Image" width={700} height={700} />
      <p className='text-center text-[14px] font-normal'>Friendship is a deep and meaningful connection between individuals built on trust, support, and 
      <br/>shared experiences.It plays a vital role in emotional well-being by offering companionship,
      <br/> encouragement, and a sense of belonging. In life, strong friendships help navigate challenges,
      <br/> foster personal growth, and contribute to happiness and resilience.</p>
      </div>
      <div>
        <Image src="/Image/marriage.jpg" alt="Marriage Image" width={300} height={300} className='mt-10' />
        <p className='text-center text-[14px] font-normal'>Marriage is a union of two individuals that 
        <br/>fosters emotional, social, and financial
        <br/> stability. It plays a crucial role in shaping 
        <br/> lifestyles by providing companionship,
        <br/>support, and shared responsibilities.</p>
        <Image src="/Image/familyrelationship.jpg" alt="Family Image" width={300} height={300} className='mt-4'/>
        <p className='text-center text-[14px] font-normal'>Family relationships provide a strong 
        <br/>foundation of love, trust, and support,
        <br/> crucial for personal well-being. They 
        <br/>significantly influence one's lifestyle by 
        <br/> offering emotional stability, guidance,
        <br/> and a sense of belonging.</p>
      </div>
      </div>
      <CommentSection />
    </div>
  )
}

export default Relationships;


