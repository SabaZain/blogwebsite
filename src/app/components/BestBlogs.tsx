import React from 'react'
import Card from '../components/Card';


const data = [
     {
        img: "/Image/nutrition.jpg",
        title: "Healthy Diet",
        desc: "25 Aug 2024 - Healthy diet includes a variety of nutrient-rich foods in the right proportions."
    },
    {
        img: "/Image/famtravel.jpg",
        title: "Family Travel",
        desc: "5 Dec 2024 - Family travel is important as it strengthens bonds, creates lasting memories, fosters communication."
    },
    {
        img: "/Image/self-care.jpg",
        title: "Self Care",
        desc: "20 Oct 2024 - Self-care involves prioritizing physical, emotional, and mental well-being through activities."
    },
   
]

const BestBlogs = () => {
  return (
    <div className='bg-green-200 hover:bg-green-400 p-4'>
      <h1 className='text-3xl text-center font-bold mt-8'>Best Blogs For Lifestyle</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-8 w-auto h-auto'>
      {data.map(item => <Card key={item.img} img={item.img} title={item.title} desc={item.desc} />)}
      </div>
    </div>
  
  )
}

export default BestBlogs;
