import React from 'react'
import Card1 from '../components/Card1';



const data = [
    {
        img: "/Image/health.jpg",
        title: "Health",
        desc: "Health is a state of complete physical, mental, and social well-being, not just the absence of disease.",
        link: "/Health",
    },
    {
        img: "/Image/travel.jpg",
        title: "Travel",
        desc: "Travel is the act of journeying to new places for exploration, relaxation.Travel is about seeking adventure in the great outdoors.",
        link: "/Travel",
    },
    {
        img: "/Image/fashion.jpg",
        title: "Fashion",
        desc: "Fashion is the popular style or trend in clothing, accessories, and appearance that reflects personal expression.",
        link: "/Fashion",
    },
    {
        img: "/Image/beauty.jpg",
        title: "Beauty",
        desc: "Beauty is the quality of being visually or aesthetically pleasing, often associated with harmony, balance, and appeal.",
        link: "/Beauty",
    },
    {
        img: "/Image/food.jpg",
        title: "Food",
        desc: "Food is any substance consumed to provide nourishment, energy, and sustenance to the body.",
        link: "/Food",
    },
    {
        img: "/Image/personalfinance.jpg",
        title: "Personal Finance",
        desc: "Personal finance is the management of an individual's money, including budgeting, saving, investing, and planning for future.",
        link: "/Personal-Finance",
    },
    {
        img: "/Image/relationship.jpg",
        title: "Relationships",
        desc: "Relationships are connections and interactions between individuals, built on trust, communication, and mutual respect.",
        link: "/Relationships",
    },
    {
        img: "/Image/self-improvement.jpg",
        title: "Self-Improvement",
        desc: "Self-improvement is the ongoing process of enhancing one's skills, knowledge, and mindset to achieve personal growth.",
        link: "/Self-Improvement",
    },
]

const Categories = () => {
  return (
    <div className='bg-third p-4'>
      <h1 className='text-2xl text-center font-bold mt-8'>Lifestyle Categories</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-8 w-auto h-auto'>
      {data.map(item => <Card1 key={item.img} img={item.img} title={item.title} desc={item.desc} link={item.link} />)}
      </div>
      
 </div>
  )
}

export default Categories;
