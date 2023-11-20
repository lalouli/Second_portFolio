"use client"
import Image from 'next/image'
import Logo from '../../public/logo.svg'
import Profile from '@/components/profile'
import Projects from '@/components/projects'
import Skils from '@/components/Skils'
import Contact from '@/components/Contact'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col gap-8">
      <div className="flex flex-row  w-full h-[200px] lg:h-[300px] ">
        <div className='flex justify-center items-center h-[80%] ml-2 w-[20%] xl:w-[10%]'>
          <Image src={Logo} width={100} height={100}  alt="logo"/>
        </div>
        <motion.div className='flex items-center  h-[80%] w-[80%] xl:w-[90%]  overflow-hidden'>
          <motion.div initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity}} className=' w-full text-3xl lg:text-5xl text-white font-bold font-poppins'>I'm  <span className='text-[#FFC600] font-poppins'>Frontend Developer</span></motion.div>
        </motion.div>
      </div>
      <Profile/>
      <Projects/>
      <Skils/>
      <Contact/>
    </main>
  )
}
