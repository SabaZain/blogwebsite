import React from 'react'
import Image from 'next/image';
import CommentSection from '../components/CommentSection';

const PersonalFinance = () => {
  return (
    <div className='bg-lime-300 p-4'>
    <h1 className='text-3xl text-center font-bold mt-8'>Lifestyle-Personal Finance</h1>
    <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center align items-center gap-6'>
      <div className='mt-6'>
      <Image src="/Image/budgeting.jpg" alt="Budget Image" width={700} height={700} />
      <p className='text-[14px] text-center font-normal'>Budgeting is crucial for managing finances, ensuring that income aligns with expenses 
      <br />and savings goals. It promotes financial stability, reduces stress, and encourages 
      <br /> responsible spending. By budgeting, individuals can prioritize needs, plan for the future,
      <br />and achieve financial independence.</p>
      </div>
      <div>
        <Image src="/Image/savings.jpg" alt="Savings" width={300} height={300} className='mt-10' />
        <p className='text-[14px] text-center font-normal'>Savings are vital for financial security,
        <br />allowing individuals to handle emergencies 
        <br />and plan for future goals. It fosters long-term 
        <br /> stability, reduces financial stress, and supports
        <br /> a comfortable lifestyle.</p>
        <Image src="/Image/investing.jpg" alt="Investing" width={300} height={300} className='mt-4'/>
        <p className='text-[14px] text-center font-normal'>Investing is key to growing wealth over time,
        <br /> helping individuals achieve financial goals
        <br /> and secure a stable future. It allows for passive 
        <br />income generation and can outpace inflation.
        <br /> By investing wisely, individuals can  enhance 
        <br/> their lifestyle and build long-term financial 
        <br />independence.</p>
      </div>
      </div>
      <CommentSection />
    </div>
  )
}

export default PersonalFinance;
