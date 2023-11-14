"use client";

import React from "react";
import My from "../../public/profile.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="w-full h-[1100px] flex flex-col gap-10">
      <div className="h-[200px] w-full flex ">
        <motion.div
          animate={{ x: [10, 2000, 0] }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-[30%] lg:h-[50%] w-[40%] lg:w-[35%] 2xl:w-[500px] ml-4  mt-10 flex items-center justify-center  rounded-tl-md rounded-br-md bg-[linear-gradient(45deg,transparent_7%,#fff_5%,#fff_93%,transparent_10%)] "
        >
          <span className="z-10 tracking-wider text-[20px] lg:text-[30px] font-bold font-Poppins text-[#2A185B]">
            About Me
          </span>
        </motion.div>
      </div>
      <div className="h-[80%] lg:h-full  w-full flex justify-center ">
        <motion.div 
        animate={{ x: [0, -100, 0] }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="h-full w-[90%] lg:w-[45%]  flex flex-col justify-center items-center gap-4 border-l-4 border-b-4 border-r-4 ">
          <motion.div
          animate={{ x: [10, 100, 0] }}
           initial={{ opacity: 0, y: 25 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1 }}
          className="w-full h-[20%] lg:h-[30%] flex items-center justify-center ">
            <span className="text-white  font-teko text-xl md:text-4xl lg:text-5xl">
              👋 Hi , I' am Houssam Lalouli 👦🏻
            </span>
          </motion.div>
          <div className=" w-full h-[65%] flex justify-center items-center ">
            <motion.div 
            animate={{ x: [10, 100, 0] }}
            initial={{ opacity: 0, y: 25 }}
         whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
            className=" w-[80%] h-[60%] md:h-[80%] rounded-tr-md rounded-bl-md flex items-center justify-center font-skranji">
              <div className="w-[80%] h-[80%] text-sm sm:text-xl md:text-3xl lg:text-[1.5rem] 2xl:text-3xl mt-4 mr-6 text-white">
                As a front-end developer, I specialize in ReactJS, Next.js, and
                design. I excel at creating reusable UI components, managing
                application state, and translating design concepts into visually
                appealing interfaces. With my skills, I deliver captivating and
                high-quality web experiences.😇
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
         animate={{ x: [10, 100, 0] }}
         initial={{ opacity: 0, y: 25 }}
         whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        className="h-full lg:w-[45%] border-t-4 border-r-4 hidden lg:flex justify-center items-center">
          <Image
            className="h-[500px] w-96  object-cover object-center"
            src={My}
            alt="nature image"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
