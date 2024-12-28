import React from 'react'
import Card from '../components/Card';
import CommentSection from '../components/CommentSection';


const data = [
    {
        img: "/Image/adventure.jpg",
        title: "Adventure Travel",
        desc: "Adventure traveling like hiking, trekking, skiing is important in lifestyle as it promotes physical activity, fosters personal growth, enhances mental well-being, builds resilience, and provides opportunities to explore new cultures and perspectives, enriching overall life experiences."
    },
    {
        img: "/Image/culture.jpg",
        title: "Cultural Experiences",
        desc: "Cultural experiences through travel are important as they broaden perspectives, promote empathy, foster understanding of local customs,  diverse traditions, festivals enhance personal growth, and help preserve cultural heritage by appreciating and sharing different ways of life."
    },
    {
        img: "/Image/familytravel.jpg",
        title: "Family Travel",
        desc: "Family travel is important as it strengthens bonds, creates lasting memories, fosters communication, and provides opportunities for learning and shared experiences, contributing to emotional well-being and a sense of connection."
    },
    {
        img: "/Image/solotravel.jpg",
        title: "Solo Travel",
        desc: "Solo travel promotes self-discovery, boosts confidence, encourages independence, allows for personal growth, and provides the freedom to explore new places at your own pace, fostering a deeper connection with oneself and the world."  
    },
    {
        img: "/Image/roadtravel.webp",
        title: "Road Trips",
        desc: "Road trips are important in life as they foster adventure, promote exploration, encourage bonding with companions, allow for personal reflection, and provide a sense of freedom and escape from daily stresses, enhancing overall well-being and creating unforgettable experiences."
    },
    {
        img: "/Image/budgettravel.jpg",
        title: "Budget Travel",
        desc:  "Budget travel focuses on minimizing expenses while maximizing experiences. Key tips include choosing affordable destinations, using budget airlines, staying in hostels or Airbnb, and relying on public transportation. Eating like locals and finding free or low-cost activities also help save money. Flexibility and planning ahead can lead to significant savings."
    }
]

const Travel = () => {
  return (
    <div className='bg-purple-400 p-4'>
      <h1 className='text-3xl text-center font-bold mt-8'>Lifestyle-Travel</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-8 w-auto h-auto'>
      {data.map(item => <Card key={item.img} img={item.img} title={item.title} desc={item.desc} />)}
      </div>
      <CommentSection />
    </div>
  
  )
}

export default Travel;
