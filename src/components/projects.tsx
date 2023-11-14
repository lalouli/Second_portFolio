"use client";
import React from "react";
import { motion } from "framer-motion";
import Swiper from "./Swiper";
const Projects = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-10">
      <div className="h-[200px] w-full flex ">
        <motion.div
          animate={{ x: [10, 2000, 0] }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-[30%] lg:h-[50%] w-[40%] lg:w-[35%] 2xl:w-[500px] ml-4  mt-10 flex items-center justify-center  rounded-tl-md rounded-br-md bg-[linear-gradient(45deg,transparent_7%,#fff_5%,#fff_93%,transparent_10%)] "
        >
          <span className="z-10 tracking-wider text-[20px] lg:text-[30px] font-bold font-Poppins text-[#2A185B]">
            Projects
          </span>
        </motion.div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
      <motion.div
       animate={{ x: [10, 2000, 0] }}
       initial={{ opacity: 0, y: 25 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 1, delay: 1 }} >
      <Swiper/>  
        </motion.div>  
      </div>
    </div>
  );
};

export default Projects;
