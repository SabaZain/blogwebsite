"use client"
import {useState} from 'react';
import React from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email:"",
    message:""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!formData.name || !formData.email || !formData.message){
      alert("please fill in all fields!");
      return;
    }

    console.log(formData);

    setFormData({name: '', email: '', message:''});
    setIsSubmitted(true);
  };
  return (
    <div>
      <h1 className='text-3xl text-center font-bold p-10'>Contact Us</h1>
      <p className='text-xl text-center font-semibold'>We are always here to assist you. Feel free to contact us!</p>
      <form onSubmit={handleSubmit} className='w-full max-w-xl'>
              <div className='flex flex-col gap-1 ml-1'>
              <label htmlFor='name'>Name</label>
              <input 
              type='text'
              className='h-[50px] w-[350px] bg-gray-400 border border-black rounded-md p-1' 
              id='name' 
              value={formData.name}
              onChange={handleChange}
              required
              />
            </div>
            <div className='flex flex-col gap-1 ml-1'>
            <label htmlFor='email'>Email</label>
              <input 
              type='email'
              className='h-[50px] w-[350px] bg-gray-400 border border-black rounded-md p-1' 
              id='email' 
              value={formData.email}
              onChange={handleChange}
              required
              />
            </div>
            <div className='flex flex-col gap-1 ml-1'>
            <label htmlFor='msg'>Message</label>
            <textarea
            className='h-[150px] w-[350px] bg-gray-400 border border-black rounded-md p-1' 
            id='message'
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>
            </div>
            <button 
            type="submit" 
            className='bg-green-800 hover:bg-green-500 text-black hover:text-white text-xl ml-2 p-2 mt-2 mb-6 border rounded-md cursor-pointer'
            >
            Submit
            </button>
            </form>

            {isSubmitted && (
              <div className='mt-4 pl-12 text-orange-600 font-serif'>
                Thankyou for contacting us!<br /> We will get back to you soon.
                </div>
            )}
 
      <div>
        

      </div>
    </div>
  )
}

export default ContactPage;
