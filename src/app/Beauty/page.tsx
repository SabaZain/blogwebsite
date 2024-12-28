import React from 'react'
import Card from '../components/Card';
import CommentSection from '../components/CommentSection';


const data = [
     {
        img: "/Image/skincare.jpg",
        title: "Skin Care",
        desc: "Skin care is crucial for maintaining healthy, protected skin and preventing issues like acne and aging. A basic routine includes cleansing, exfoliating, moisturizing, and using sunscreen. To maintain good skin, stay hydrated, eat a balanced diet, avoid smoking, and get enough sleep.Skin care is essential in daily life as it not only enhances physical appearance but also boosts self-confidence.Consistent skin care supports a youthful, glowing complexion, contributing to a more vibrant and confident lifestyle."
    },
    {
        img: "/Image/haircare.jpg",
        title: "Hair Care",
        desc: "Maintaining healthy hair involves a balanced routine of proper cleansing, conditioning, and nourishment. Regular washing with the right shampoo, conditioning to lock in moisture, and avoiding excessive heat styling helps keep hair strong and shiny. A healthy diet rich in vitamins, minerals, and proteins supports hair growth and strength. Additionally, protecting hair from harsh chemicals, UV rays, and physical damage is crucial. Healthy hair is an important aspect of self-care, enhancing confidence and complementing a lifestyle of overall well-being."
    },
   
    {
        img: "/Image/nailcare.jpg",
        title: "Nail Care",
        desc: "Maintaining healthy nails involves proper hygiene, regular trimming, and moisturizing to prevent breakage and promote growth. It's essential to avoid biting nails and using them as tools to prevent damage. A balanced diet rich in biotin, vitamins, and minerals supports nail strength and resilience. Protecting nails from harsh chemicals and prolonged water exposure helps prevent brittleness. Healthy nails contribute to an overall well-groomed appearance, boosting confidence and promoting a lifestyle of self-care and personal well-being."
    },
    {
        img: "/Image/makeup1.jpg",
        title: "Makeup",
        desc: "Makeup enhances facial features, boosts confidence, and allows for self-expression through creative and artistic choices. It provides a way to highlight natural beauty while also covering imperfections, promoting a polished appearance. In a lifestyle context, makeup can be an empowering tool, helping individuals feel more confident and presentable in various social and professional settings.When used mindfully, makeup enhances self-esteem and contributes to personal well-being and lifestyle choices."
    },
    {
        img: "/Image/fragrances.jpg",
        title: "Fragrances",
        desc: "Fragrances play a significant role in enhancing personal style and leaving a lasting impression. A signature scent can evoke confidence, set moods, and even trigger positive memories, making it an essential part of lifestyle. Choosing the right fragrance can complement personal identity and be an expression of taste and elegance. In daily life, fragrances also contribute to a sense of well-being, boosting mood and relaxation. The right scent can elevate routines, making it a key element in creating a memorable and confident lifestyle."
    },
      
]

const Beauty = () => {
  return (
    <div className='bg-sky-400 p-4'>
      <h1 className='text-3xl text-center font-bold mt-8'>Lifestyle-Beauty</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-8 w-auto h-auto'>
      {data.map(item => <Card key={item.img} img={item.img} title={item.title} desc={item.desc} />)}
      </div>
      <CommentSection />
    </div>
  
  )
}

export default Beauty;
