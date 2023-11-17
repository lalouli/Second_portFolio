"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import { IconDeviceLandlinePhone } from "@tabler/icons-react";
const Contact = () => {
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
            Contact
          </span>
        </motion.div>
      </div>
      <div className="w-[99%] h-full flex justify-center items-center ">
        <div className="flex flex-row  w-[80%] h-[80%]  gap-8">
          <div className="hidden lg:flex  justify-center items-center ">
            <motion.img
              className="h-[800px] w-full  object-cover object-center "
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.9 }}
              src="avatr.png"
              alt="nature image"
            />
          </div>
          <>
            <div className="mt-10 flex flex-col justify-center items-center space-y-12">
              <motion.p
                className="w-[400px]  text-xl flex flex-row font-skranji font-bold text-[#B3EFB2] gap-2"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                
                <IconBrandLinkedin />
               
                LinkedIn:{" "}
              
  
                  <motion.a
                    href="https://www.linkedin.com/in/houssam-lalouli-56a40b215/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 3 }}
                  className="text-2xl font-teko font-bold text-[#E8F1F2]  "
                  >
                    LinkedIn Profile
                  </motion.a>
              </motion.p>
              <motion.p
                className="w-[400px] text-xl flex flex-row  font-skranji font-bold text-[#B3EFB2] gap-2"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <IconBrandGithub />
                GitHub:{" "}
           
                <motion.a
                  href="https://github.com/lalouli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-teko font-bold text-[#E8F1F2] "
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 3 }}
                >
                  GitHub Profile
                </motion.a>
              </motion.p>
              <motion.p
                className="w-[400px] text-xl flex flex-row font-skranji font-bold text-[#B3EFB2] gap-2"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <IconMail />
                Email:{" "}
           
                <motion.a className="text-2xl font-teko font-bold text-[#E8F1F2]"
                 initial={{ x: "100%" }}
                 animate={{ x: 0 }}
                 transition={{ duration: 5, repeat: Infinity}}>
                  lalouli.houssam2017@gmail.com
                </motion.a>
              </motion.p>
              <motion.p
                className="w-[400px] text-xl flex flex-row font-skranji font-bold text-[#B3EFB2] gap-2"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <IconDeviceLandlinePhone />
                Phone Number:{" "}
     
                <motion.a className="text-2xl font-teko font-bold text-[#E8F1F2]"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 5, repeat: Infinity}}>
                  06 17 93 75 29
                </motion.a>
              </motion.p>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Contact;
