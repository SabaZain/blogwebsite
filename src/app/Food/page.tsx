import React from 'react'
import Card from '../components/Card';
import CommentSection from '../components/CommentSection';





const data = [
     {
        img: "/Image/healthyeating.jpg", 
        title: "Healthy Eating",
        desc: "Healthy eating is essential for maintaining physical and mental well-being, supporting long-term vitality. It helps prevent chronic diseases, boosts energy, and enhances overall quality of life."
    },
    {
        img: "/Image/foodtrends.jpg",
        title: "Food Trends",
        desc: "Food trends reflect evolving consumer preferences, driven by health, sustainability, and innovation. These trends influence lifestyle choices by shaping how people eat, what they prioritize in their diets, and how they approach sustainability. Adopting food trends can improve overall well-being and promote environmentally conscious habits. They also foster creativity in meal preparation and dining experiences."
    },
   
    {
        img: "/Image/restaurants.jpg",
        title: "Restaurants Food",
        desc: "Restaurant food plays a key role in modern lifestyles, offering convenience, variety, and cultural experiences. It reflects evolving tastes, dietary preferences, and social trends, shaping how people dine out and socialize. Dining at restaurants also supports local economies and fosters community connections. Moreover, it encourages culinary exploration, promoting diverse and balanced eating habits."
    },
      
]

const Food = () => {
  return (
    <div className='bg-pink-300 p-4'>
      <h1 className='text-3xl text-center font-bold mt-8'>Lifestyle-Food</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-8 w-auto h-auto'>
      {data.map(item => <Card key={item.img} img={item.img} title={item.title} desc={item.desc} />)}
      </div>
      <CommentSection />
    </div>
  
  )
}

export default Food;
