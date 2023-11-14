"use client";
import React from "react";
import { motion } from "framer-motion";
import  Html   from "../../public/Html.svg";
import react from "../../public/react.svg";
import next from "../../public/nextjs.svg";
import Css from "../../public/css.svg";
import tailwind from "../../public/tailwindcss-icon.svg";
import Js from "../../public/js.svg";
import Image from "next/image";
const Skils = () => {
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
            Skills
          </span>
        </motion.div>
      </div>
      <div className="w-full h-full flex flex-col">
      <div className=" w-[90%] lg:w-[30%] h-[100px] flex flex-row gap-4 ">
        <span className=" w-[50%] font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center">
          Html
        </span>
        <Image src={Html} alt="html" className="hidden lg:flex w-[50%]" />
      </div>
        <div className="w-[10%] h-[2px] bg-white"> </div>
        <div className="w-[90%] lg:w-[40%] h-[100px] flex flex-row gap-4 ">
        <span className="w-[50%] font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
        React
        </span>
        <Image src={react} alt="html" className="hidden lg:flex w-[50%] " />
        </div>
        <div className="w-[20%]  h-[2px] bg-white"> </div>
        <div className="w-[90%] lg:w-[50%] h-[100px] flex flex-row gap-4">
        <span className="w-[50%] font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
        Nextjs
        </span>
        <Image src={next} alt="html" className="hidden lg:flex w-[50%] " />
        </div>
        <div className="w-[30%]  h-[2px] bg-white"> </div>
        <div className="w-[90%] lg:w-[60%] h-[100px] flex flex-row gap-4">
        <span className="w-[50%] font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
        CSS
        </span>
        <Image src={Css} alt="html" className="hidden lg:flex w-[50%] " />
        </div>
        <div className="w-[40%]  h-[2px] bg-white"> </div>
        <div className="w-[90%] lg:w-[70%] h-[100px] flex flex-row gap-4">
        <span className="w-[55%] font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
        Tailwind CSS
        </span>
        <div className="w-[45%] flex items-center justify-center">
        <Image src={tailwind} alt="html" className="hidden lg:flex w-[15%] " />
        </div>

        </div>
        <div className="w-[50%]  h-[2px] bg-white"> </div>
        <div className="w-[90%] lg:w-[80%] h-[100px] flex flex-row gap-4">
        <span className="w-[60%] font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
        Typescript / Javascript
        </span>
        <Image src={Js} alt="html" className="hidden lg:flex w-[40%] " />
        </div>
        <div className="w-[60%]  h-[2px] bg-white"> </div>
        <div className="w-[90%] lg:w-[90%] h-[100px] flex flex-row gap-4">
        <span className="w-[65%] font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
        Threejs / React Three Fiber
        </span>
        <Image src={react} alt="html" className="hidden lg:flex w-[35%] " />
        </div>
        <div className="w-[70%]  h-[2px] bg-white"> </div>
        <div className="w-[90%] lg:w-[100%] h-[100px] flex flex-row gap-4">
        <span className="w-[65%] font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
        Design UX/ Figma
        </span>
        <Image src={Css} alt="html" className="hidden lg:flex w-[35%] " />
        </div>
        <div className="w-[80%]  h-[2px] bg-white"> </div>
        <div className="w-[90%] lg:w-[100%] h-[100px] flex flex-row gap-4">
        <span className="w-[80%] font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
        Angular
        </span>
        <Image src={Css} alt="html" className="hidden lg:flex w-[20%] " />
        </div>
        <div className="w-[85%]  h-[2px] bg-white "> </div>
        <div className="w-[90%] lg:w-[100%] h-[100px] flex flex-row gap-4 ">
        <span className="w-[95%] font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
        3D Modeling
        </span>
        <Image src={Css} alt="html" className="hidden lg:flex w-[5%] " />
        </div>
        <div className="w-[100%]  h-[2px] bg-white "> </div>
      </div>
    </div>
  );
};

export default Skils;
