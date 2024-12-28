import React from 'react'
import Hero from './Hero/page';
import Categories from './Categories/page';
import CommentSection from './components/CommentSection';
import Banner from './components/Banner';
import BestBlogs from './components/BestBlogs';


const HomePage = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Banner />
      <BestBlogs />
      <CommentSection/>
      
    </div>
  )
}

export default HomePage;