import React from 'react'

import Blog1 from "../../assets/Blogs/3.png"
import Blog2 from "../../assets/Blogs/4.png"
import Blog3 from "../../assets/Blogs/3.png"
import Blog4 from "../../assets/Blogs/4.png"

import { UpdateFollower } from 'react-mouse-follower'


const blogsData=[
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi eligendi repellendus temporibus soluta quo architecto neque in unde saepe.",
    link:"#",
    img:Blog1,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi eligendi repellendus temporibus soluta quo architecto neque in unde saepe.",
    link:"#",
    img:Blog2,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi eligendi repellendus temporibus soluta quo architecto neque in unde saepe.",
    link:"#",
    img:Blog3,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi eligendi repellendus temporibus soluta quo architecto neque in unde saepe.",
    link:"#",
    img:Blog4,
  },
]

const Blogs = () => {
  return <section className='bg-gray-50'>
    <div className="container py-14">
      <h1 className='text-3xl font-bold text-center pb-8'>Blogs</h1>
      {/* card section */}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'> 
        {
          blogsData.map((item)=>(
            <UpdateFollower
              mouseOptions={
                {
                  backgroundColor: "red",
                  zIndex:999,
                  followSpeed: 1.5,
                  text:'stefan',
                  textFontSize:"3px",
                  scale:"5"
                }
              }
            
            
            >
              <div key={item.id} className='flex flex-col items-center gap-6 md:p-5 max-w-[300px] mx-auto shadow-lg rounded-md hover:-translate-y-1 duration-300'>
                <img src={item.img} alt="" className='max-w-[200px] max-h-[300px] ' />
                <div className='space-y-2'>
                  <h1 className='text-xl font-bold line-clamp-2'>{item.title}</h1> 
                  <p>{item.desc}</p> 
                </div>
              </div>
            </UpdateFollower>
          ))
        }
      </div>
    </div>
  </section>
  
};

export default Blogs;