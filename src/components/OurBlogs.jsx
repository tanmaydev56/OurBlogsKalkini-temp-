import React from 'react'
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-cards.tsx";

const OurBlogs = () => {
  return (
    <div className='h-[3046px] w-full bg-black flex flex-col text-center  items-center gap-[100px] p-[40px]'>
        
        <div className='text-[80px] font-[700] text-[#F2F2F2] '>
            <h1>Our Blogs</h1>
        </div>
        <div className='flex flex-col gap-[0px] '>
           
            <motion.div
              whileHover={{ scale: 1.05 }}
            //   spring wali animation
            //   whileTap={{ scale: 0.95 }}
            //   transition={{ type: "spring", stiffness: 400, damping: 17 }}
              
              className='w-[1325px] h-[439px] bg-[#F2F2F2] rounded-[70px]' > 
                {/* first div */}
            </motion.div>
           
            <div className='flex justify-around  '>
                <div className='flex flex-col gap-[20px]'>
                    <CardContainer
                   >
                    <div className='w-[641px] h-[781px] bg-[#F2F2F2] rounded-[70px]'>
                    </div>
                    </CardContainer>
                    <CardContainer
                   >
                    <div className='w-[641px] h-[385px] bg-[#F2F2F2] rounded-[70px]'>
                    </div>
                    </CardContainer>

                </div>
                <div className='flex flex-col gap-[20px]'>
                    <CardContainer >
                <div className='w-[641px] h-[266px] bg-[#F2F2F2] rounded-[70px]'>
                </div>
                    </CardContainer>    

                    <CardContainer>


                    <div className='w-[641px] h-[781px] bg-[#F2F2F2] rounded-[70px]'>
                    </div>
                    </CardContainer>
                   

                </div>
                
            </div>
            <div className='flex justify-around'>
                <CardContainer>
                <div className='w-[641px] h-[660px]  bg-[#F2F2F2] rounded-[70px]'>

                </div>
                </CardContainer>
                <CardContainer>
                <div className=' mt-[-120px] w-[641px] h-[775px] bg-[#F2F2F2] rounded-[70px]'>

                </div>
                </CardContainer>
            </div>
        </div>
   
      
    </div>
  )
}

export default OurBlogs
