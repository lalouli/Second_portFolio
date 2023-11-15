"use client";
import React from "react";
import { motion } from "framer-motion";
import Html from "../../public/Html.svg";
import react from "../../public/react.svg";
import next from "../../public/nextjs.svg";
import Css from "../../public/css.svg";
import tailwind from "../../public/tailwindcss-icon.svg";
import Js from "../../public/js.svg";
import figma from "../../public/figma.svg";
import angular from "../../public/angular.svg";
import Image from "next/image";
import Threed from "../../public/3d-model.svg";

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
      <div className="w-full h-full flex justify-center items-center">
        <div className="h-full w-[50%] flex justify-center items-center ">
          <div className="w-full h-full flex flex-col gap-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 + 0 * 0.2 }}
              className=" w-full h-[100px] flex flex-row gap-4 "
            >
              <span className=" w-[90%] lg:w-[50%]  font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center">
                Html
              </span>
              <Image src={Html} alt="html" className="hidden lg:flex w-[50%]" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ opacity: 1, y: 0, width: "100%" }}
              transition={{ duration: 1, delay: 1 + 0 * 0.2 }}
              className="h-[2px] bg-white"
            >
              {" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 + 1 * 0.2 }}
              className="w-full h-[100px] flex flex-row gap-4 "
            >
              <span className="w-[90%] lg:w-[50%]  font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
                React
              </span>
              <Image
                src={react}
                alt="html"
                className="hidden lg:flex w-[50%] "
              />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ opacity: 1, y: 0, width: "100%" }}
              transition={{ duration: 1, delay: 1 + 1 * 0.2 }}
              className="  h-[2px] bg-white"
            >
              {" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 + 2 * 0.2 }}
              className="w-full h-[100px] flex flex-row gap-4"
            >
              <span className="w-[90%] lg:w-[50%]  font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
                Nextjs
              </span>
              <Image
                src={next}
                alt="html"
                className="hidden lg:flex w-[50%] "
              />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ opacity: 1, y: 0, width: "100%" }}
              transition={{ duration: 1, delay: 1 + 2 * 0.2 }}
              className=" h-[2px] bg-white"
            >
              {" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 + 3 * 0.2 }}
              className="w-full h-[100px] flex flex-row gap-4"
            >
              <span className="w-[90%] lg:w-[50%]  font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
                CSS
              </span>
              <Image src={Css} alt="html" className="hidden lg:flex w-[50%] " />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ opacity: 1, y: 0, width: "100%" }}
              transition={{ duration: 1, delay: 1 + 3 * 0.2 }}
              className=" h-[2px] bg-white"
            >
              {" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 + 4 * 0.2 }}
              className="w-full h-[100px] flex flex-row gap-4"
            >
              <span className="w-[90%] lg:w-[50%] font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
                Tailwind CSS
              </span>
              <div className="w-[50%] flex items-center justify-center">
                <Image
                  src={tailwind}
                  alt="html"
                  className="hidden lg:flex w-[20%] "
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ opacity: 1, y: 0, width: "100%" }}
              transition={{ duration: 1, delay: 1 + 4 * 0.2 }}
              className="h-[2px] bg-white"
            >
              {" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 + 5 * 0.2 }}
              className="w-full h-[100px] flex flex-row gap-4"
            >
              <span className="w-[90%] lg:w-[50%] font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
                Typescript / Javascript
              </span>
              <Image src={Js} alt="html" className="hidden lg:flex w-[50%] " />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ opacity: 1, y: 0, width: "100%" }}
              transition={{ duration: 1, delay: 1 + 5 * 0.2 }}
              className="h-[2px] bg-white"
            >
              {" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 + 6 * 0.2 }}
              className="w-full h-[100px] flex flex-row gap-4"
            >
              <span className="w-[90%] lg:w-[50%]  font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
                Threejs / React Three Fiber
              </span>
              <Image
                src={react}
                alt="html"
                className="hidden lg:flex w-[50%] "
              />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ opacity: 1, y: 0, width: "100%" }}
              transition={{ duration: 1, delay: 1 + 6 * 0.2 }}
              className="h-[2px] bg-white"
            >
              {" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 + 7 * 0.2 }}
              className="w-full h-[100px] flex flex-row gap-4"
            >
              <span className="w-[90%] lg:w-[50%] font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
                Design UX/ Figma
              </span>
              <Image
                src={figma}
                alt="html"
                className="hidden lg:flex w-[50%] "
              />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ opacity: 1, y: 0, width: "100%" }}
              transition={{ duration: 1, delay: 1 + 7 * 0.2 }}
              className="h-[2px] bg-white"
            >
              {" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 + 8 * 0.2 }}
              className="w-full h-[100px] flex flex-row gap-4"
            >
              <span className="w-[90%] lg:w-[50%]  font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
                Angular
              </span>
              <Image
                src={angular}
                alt="html"
                className="hidden lg:flex w-[50%] "
              />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ opacity: 1, y: 0, width: "100%" }}
              transition={{ duration: 1, delay: 1 + 8 * 0.2 }}
              className="h-[2px] bg-white"
            >
              {" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 + 9 * 0.2 }}
              className="w-full h-[100px] flex flex-row gap-4 "
            >
              <span className="w-[90%] lg:w-[50%]  font-teko text-bold text-4xl text-[#FAEBD7] flex justify-center items-center ">
                3D Modeling
              </span>
              <Image
                src={Threed}
                alt="html"
                className="hidden lg:flex w-[50%] "
              />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ opacity: 1, y: 0, width: "100%" }}
              transition={{ duration: 1, delay: 1 + 9 * 0.2 }}
              className="h-[2px] bg-white"
            >
              {" "}
            </motion.div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Skils;
