import React from 'react'

import Logo from "../assets/Logo.png" 
import {MdMenu} from "react-icons/md" 
import { FaRegUser } from 'react-icons/fa'
import {motion} from "framer-motion"

import { UpdateFollower } from 'react-mouse-follower'

const NavbarMnenu =[
  {
    id:1,
    title:"Home",
    link:"#",
  },

  {
    id:2,
    title:"Categories",
    link:"#",
  },
  {
    id:3,
    title:"Blog",
    link:"#",
  },
  {
    id:4,
    title:"About",
    link:"#",
  },
  {
    id:5,
    title:"Contact",
    link:"#",
  },
]

function Navbar() {
  return (
    <div className='text-white py-8' > 
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration:1, delay:0.5}}
        
        
        className="container flex justify-between"> 
            {/* logo section  */} 
            <div>
                <img src={Logo} alt="" className='max-w-[50px] invert'/> 
            </div>
            {/* menu section  */}
            <div className='hidden md:block'> 
              <ul className='flex items-center gap gap-4 relative z-40'>
                {NavbarMnenu.map((item) =>(
                  <li>
                    <UpdateFollower mouseOptions={
                        {
                          backgroundColor: "white",
                          zIndex: 10,
                          followSpeed: 1.5,
                          scale:5,
                          mixBlendMode:"difference"
                        }
                      }>
                      <a href={item.link}
                      className='inline-block text-base font-semibold py-2 px-3 uppercase' 
                      >{item.title}</a>
                    </UpdateFollower>
                  </li>
                ))}
                 <UpdateFollower mouseOptions={
                    {
                      backgroundColor: "white",
                      zIndex: 10,
                      followSpeed: 1.5,
                      scale:5,
                      mixBlendMode:"difference"
                    }
                  }>
                    <button className='text-xl px-14'>
                      <FaRegUser/>
                    </button>
                </UpdateFollower>
              </ul>
            </div>
            {/* Hamburger icon  */}
            <div className='md:hidden'> 
              <MdMenu className='text-4xl'/> 
            </div>
        </motion.div>
    </div>
  )
}

export default Navbar; 