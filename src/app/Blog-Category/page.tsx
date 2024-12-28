import React from 'react'
import Link from 'next/link';

const BlogCategoryPage = () => {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold p-10 bg-third'>Blogs Category</h1>
      <ul className='text-[24px] font-semibold p-2'>
        <li className='border-black bg-amber-200 hover:bg-amber-100 p-2'><Link href="/Health">Health</Link></li>
        <li className='border-black bg-purple-400 hover:bg-purple-300 p-2'><Link href="/Travel">Travel</Link></li>
        <li className='border-black bg-green-200 hover:bg-green-100 p-2'><Link href="/Fashion">Fashion</Link></li>
        <li className='border-black bg-sky-400 hover:bg-sky-300 p-2'><Link href="/Beauty">Beauty</Link></li>
        <li className='border-black bg-pink-300 hover:bg-pink-200 p-2'><Link href="/Food">Food</Link></li>
        <li className='border-black bg-lime-300 hover:bg-lime-200 p-2'><Link href="/Personal-Finance">Personal Finance</Link></li>
        <li className='border-black bg-red-300 hover:bg-red-200 p-2'><Link href="/Relationships">Relationships</Link></li>
        <li className='border-black bg-teal-300 hover:bg-teal-200 p-2'><Link href="/Self-Improvement">Self-Improvement</Link></li>
      </ul>
    </div>
  )
}

export default BlogCategoryPage;