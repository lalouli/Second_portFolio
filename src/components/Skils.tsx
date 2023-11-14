"use client";
import React from "react";
import { motion } from "framer-motion";
import  Html   from "../../public/Html.svg";
import react from "../../public/react.svg";
import next from "../../public/nextjs.svg";
import Css from "../../public/css.svg";
import Image from "next/image";
const Skils = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-10 border">
      <div className="h-[200px] w-full flex ">
        <motion.div
          animate={{ x: [10, 2000, 0] }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-[30%] lg:h-[50%] w-[40%] lg:w-[35%] 2xl:w-[500px] ml-4  mt-10 flex items-center justify-center  rounded-tl-md rounded-br-md bg-[linear-gradient(45deg,transparent_7%,#fff_5%,#fff_93%,transparent_10%)] "
        >
          <span className="z-10 tracking-wider text-[20px] lg:text-[30px] font-bold font-Poppins text-[#2A185B]">
            Skills
          </span>
        </motion.div>
      </div>
      <div className="w-full h-full border flex flex-col">
      <div className=" w-[90%] lg:w-[30%] h-[100px] flex flex-row gap-4 ">
        <span className=" w-[50%] font-teko text-bold text-4xl text-[#1fbcca] flex justify-center items-center">
          Html
        </span>
        <Image src={Html} alt="html" className="hidden lg:flex w-[50%]" />
      </div>
        <div className="w-[10%] h-[5px] bg-white"> </div>
        <div className="w-[90%] lg:w-[40%] h-[100px] flex flex-row gap-4 ">
        <span className="w-[50%] font-teko text-bold text-4xl text-[#7113b4] flex justify-center items-center ">
        React
        </span>
        <Image src={react} alt="html" className="hidden lg:flex w-[50%] " />
        </div>
        <div className="w-[20%] h-[5px] bg-white"> </div>
        <div className="w-[90%] lg:w-[50%] h-[100px] flex flex-row gap-4">
        <span className="w-[50%] font-teko text-bold text-4xl text-[#6b1515] flex justify-center items-center ">
        Nextjs
        </span>
        <Image src={next} alt="html" className="hidden lg:flex w-[50%] " />
        </div>
        <div className="w-[30%] h-[5px] bg-white"> </div>
        <div className="w-[90%] lg:w-[60%] h-[100px] flex flex-row gap-4">
        <span className="w-[50%] font-teko text-bold text-4xl text-[#189662] flex justify-center items-center ">
        CSS
        </span>
        <Image src={Css} alt="html" className="hidden lg:flex w-[50%] " />
        </div>
        <div className="w-[40%] h-[5px] bg-white"> </div>
        <div className="w-full h-[100px]">

        </div>
        <div className="w-[50%] h-[5px] bg-white"> </div>
        <div className="w-full h-[100px]">

        </div>
        <div className="w-[60%] h-[5px] bg-white"> </div>
        <div className="w-full h-[100px]">

        </div>
        <div className="w-[70%] h-[5px] bg-white"> </div>
        <div className="w-full h-[100px]">

        </div>
        <div className="w-[80%] h-[5px] bg-white"> </div>
        <div className="w-full h-[100px]">

        </div>
        <div className="w-[90%] h-[5px] bg-white"> </div>
        <div className="w-full h-[100px]">

        </div>
        <div className="w-[100%] h-[5px] bg-white"> </div>
        <div className="w-full h-[10%]">

        </div>
      

      </div>
    </div>
  );
};

export default Skils;
