import React from 'react'
import Card from '../components/Card';
import CommentSection from '../components/CommentSection';


const data = [
    {
        img: "/Image/exercize.jpg",
        title: "Fitness & Exercise",
        desc: "Exercise is essential for maintaining physical health, improving mental well-being, and boosting overall energy levels.For optimal health, adults should aim for at least 30 minutes of moderate-intensity exercise most days of the week."
    },
    {
        img: "/Image/nutrition.jpg",
        title: "Healthy Diet",
        desc: "A healthy diet includes a variety of nutrient-rich foods in the right proportions, such as fruits, vegetables, whole grains, lean proteins, and healthy fats, while limiting processed foods, sugars, and excessive salt."
    },
    {
        img: "/Image/wellness.jpeg",
        title: "Mental Health Wellness",
        desc: "Mental health wellness involves maintaining emotional, psychological, and social well-being, enabling individuals to cope with stress.To improve mental health one should regular exercise, meditate, practice gratitude, spend time in nature, engage in creative hobbies, connect with loved ones, volunteer, and seek therapy or counseling when needed."
    },
    {
        img: "/Image/disease.jpg",
        title: "Diseases & Conditions",
        desc: "To protect yourself from diseases, practice good hygiene, maintain a balanced diet, exercise regularly, get enough sleep, manage stress, avoid smoking and excessive alcohol, stay up to date on vaccinations and routine check-ups on regular basis, and regularly wash hands."  
    },
    {
        img: "/Image/sleep.webp",
        title: "Healthy Habits",
        desc: "Healthy sleep habits include maintaining a consistent sleep schedule, creating a relaxing bedtime routine, limiting screen time before bed, ensuring a comfortable sleep environment, and avoiding large meals or caffeine late in the day. Adults should aim for 7-9 hours of sleep per night for optimal health."
    },
    {
        img: "/Image/doctors.webp",
        title: "Expert Interviews",
        desc:  "The expertise of doctors, nutritionists, psychologists and fitness experts is crucial for maintaining good health, as they provide evidence-based guidance tailored to individual needs. "
    }
]

const Health = () => {
  return (
    <div className='bg-amber-200 p-4'>
      <h1 className='text-3xl text-center font-bold mt-8'>Lifestyle-Health</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-8 w-auto h-auto'>
      {data.map(item => <Card key={item.img} img={item.img} title={item.title} desc={item.desc} />)}
      </div>
      <CommentSection />
    </div>
  
  )
}

export default Health;
