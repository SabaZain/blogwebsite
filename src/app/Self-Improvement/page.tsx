import React from 'react'
import Card from '../components/Card';
import CommentSection from '../components/CommentSection';


const data = [
     {
        img: "/Image/goal-setting.jpg",
        title: "Goal Setting",
        desc: "Effective goal setting involves creating clear, measurable objectives using the SMART framework (Specific, Measurable, Achievable, Relevant, Time-bound).Goal setting helps individuals focus their efforts and measure progress, driving personal growth and achievement."
    },
    {
        img: "/Image/self-care.jpg",
        title: "Self Care",
        desc: "Self-care involves prioritizing physical, emotional, and mental well-being through activities like rest, exercise, and mindfulness. It is crucial for a balanced lifestyle, helping individuals maintain health, reduce stress, and enhance overall happiness."
    },
   
    {
        img: "/Image/personal-growth.jpg",
        title: "Personal Growth",
        desc: "Personal growth is the ongoing process of developing skills, knowledge, and emotional intelligence to reach full potential. It involves self-reflection, setting goals, and embracing challenges to improve oneself. Personal growth is important for a fulfilling lifestyle as it fosters resilience, boosts confidence, and enhances overall life satisfaction."
    },
      
]

const SelfImprovement = () => {
  return (
    <div className='bg-teal-300 p-4'>
      <h1 className='text-3xl text-center font-bold mt-8'>Lifestyle-Self Improvement</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-8 w-auto h-auto'>
      {data.map(item => <Card key={item.img} img={item.img} title={item.title} desc={item.desc} />)}
      </div>
      <CommentSection />
    </div>
  
  )
}

export default SelfImprovement;
