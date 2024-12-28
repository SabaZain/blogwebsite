import React from 'react'
import Card from '../components/Card';
import CommentSection from '../components/CommentSection';


const data = [
     {
        img: "/Image/fashion-accessories.jpg",
        title: "Accessories",
        desc: "Accessories include items like jewelry (necklaces, bracelets, earrings), bags, hats, scarves, belts, sunglasses, and watches. These items not only elevate an outfit but also serve functional purposes, such as providing warmth, storage, or sun protection.Fashion accessories play a crucial role in enhancing personal style, completing outfits, and expressing individuality.Fashion accessories are important for creating a cohesive look, showcasing creativity, and keeping up with evolving trends."
    },
    {
        img: "/Image/trendyclothing.jpg",
        title: "Trendy Clothing",
        desc: "Trendy clothing reflects current fashion styles influenced by celebrities, designers, and social media. It allows individuals to express their personality, stay culturally relevant, and connect with social groups. Wearing trendy clothes boosts confidence and self-esteem. Additionally, it plays a crucial role in driving the fashion industry and shaping modern lifestyle choices."
    },
   
    {
        img: "/Image/makeup.jpg",
        title: "Makeup",
        desc: "Makeup plays an important role in personal expression and confidence, allowing individuals to enhance their features and create desired looks.Makeup also has a practical function, such as providing sun protection or concealing blemishes. In modern lifestyles, makeup is not only a beauty routine but also an empowering tool that boosts self-esteem and helps individuals feel more polished and confident in social, professional, or casual settings."
    },
      
]

const Fashion = () => {
  return (
    <div className='bg-green-200 p-4'>
      <h1 className='text-3xl text-center font-bold mt-8'>Lifestyle-Fashion</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-8 w-auto h-auto'>
      {data.map(item => <Card key={item.img} img={item.img} title={item.title} desc={item.desc} />)}
      </div>
      <CommentSection />
    </div>
  
  )
}

export default Fashion;
