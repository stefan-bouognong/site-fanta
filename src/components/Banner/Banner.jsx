import React from 'react'

import BannerImg from "../../assets/Banner/juice1.png"
import splash from "../../assets/Banner/splash.png"

import {motion} from "framer-motion" 
import {fadeUp } from "../../components/Products/Product"




const Banner = () => {
  return (
    <section className='p-10'>
        <div className="conatiner grid grid-cols-1 md:grid-cols-2 space-y-12 md:space-y-0 gap-12"> 
            {/* Banner Image section */}
            <div className='relative '>
                <motion.img 
                    initial={{opacity: 0, x:-100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration:1, delay: 0.2, ease:"easeInOut"}}
                    
                    
                    src={BannerImg} alt="" className='w-[330px] md:w-[400px] mx-auto relative z-10' /> 
                <motion.img 
                    initial={{opacity: 0, y:-100, rotate:-180, scale:0}}
                    whileInView={{opacity: 1, y:0, rotate:-0, scale:1}} 
                    transition={{duration:1, delay: 0.2, ease:"easeInOut"}}
                    
                    
                    src={splash} alt="" className='w-[330px] md:w-[400px] absolute bottom-0 z-0' /> 
            </div>
            {/* Banner text info section */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                    <motion.h1 
                        variants={fadeUp(0.7)} 
                        initial="hidden"
                        whileInView="show"
                    
                        className='text-3xl lg:text-4xl font-semibold '>Refresh Your World With Fanta</motion.h1>
                        <motion.p
                        variants={fadeUp(0.9)} 
                        initial="hidden"
                        whileInView="show"
                        
                        className='text-gray-500'>Orange Fanta est une boisson rafraîchissante au goût intense d'orange. Pétillante et sucrée, elle séduit par son arôme fruité et son effervescence agréable. Idéale pour accompagner un repas ou se désaltérer, elle apporte une touche de fraîcheur à chaque gorgée. Appréciée par toutes les générations, elle est synonyme de plaisir et de convivialité.</motion.p>
                    <motion.button 
                        variants={fadeUp(1)} 
                        initial="hidden"
                        whileInView="show"
                        
                        className='!mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-50' >Shop Now</motion.button> 
                </div>
                
            </div>
        </div>
        
    </section> 
  )
}

export default Banner;