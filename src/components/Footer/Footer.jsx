import React from 'react'

import{
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTelegram,
} from "react-icons/fa" 

import { FaMapLocation } from 'react-icons/fa6';

import CardsImage from "../../assets/credit-card.png";

import Logo from "../../assets/Logo.png";
import {motion} from "framer-motion";

const Footer = () => {
  return  <footer className='bg-primary pt-12 pb-8 text-white'>
    <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* company details section */}
            <motion.div 
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.2,
                    duration: 0.6,
                }}
            
                className='space-y-6'>
                <img src={Logo} alt="" className='max-w-[80px] invert' />
                <div>
                    <p className="flex items-center gap-2 "><FaPhone/>+(237)6 58 82 13 55</p> 
                    <p className='flex items-center gap-2 mt-2'><FaMapLocation/> Emia, Yaounde Cameorun</p> 
                </div>
            </motion.div>
            {/* Footer link section */}
            <motion.div 
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.5, 
                    duration: 0.6,
                }}
                className='space-y-6'>
                <h1 className='text-3xl font-bold'>Quick Links</h1> 

                <div className='grid grid-cols-1 sm:grid-cols-2 gap3'> 
                    <div>
                        <ul className='space-y2'>
                            <li>Home</li>
                            <li>About</li>
                            <li>contact us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y2'>
                            <li>Home</li>
                            <li>About</li>
                            <li>contact us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                </div>
                </motion.div>
            {/* Social link section */}
            <motion.div 
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.6, 
                    duration: 0.6,
                }}
                className='space-y-6'>

                <h1 className='text-3xl font-bold'>Follow us</h1>
                <div className='flex items-center gap-3'> 
                    <FaFacebook className='text-3xl hover:scale-105 duration-300'/> 
                    <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                    <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                    <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                </div>
                <div className='space-y-2'>
                    <p>Payement Methods</p>
                    <img src={CardsImage} alt="" />
                </div>

            </motion.div>
           
        </div>
        {/* coryright section */} 
        <p className='text-center mt-8 border-t-2 border-white/40 pt-8'>copyright &copy; 2025. stefan-All Rights Reserverved</p>
    </div>
  </footer>

}

export default Footer