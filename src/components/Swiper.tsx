'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import me from "../../public/me.svg";
import Chat from "../../public/ft_irc.svg";
import Incpt from "../../public/inception.svg";
import Ping from "../../public/ping.svg";
import logo from "../../public/logo.svg"
import Sys from "../../public/about1.svg" 

interface TeamType  {
  image: string;
  title: string;
  description: string;
}

const team: TeamType[] = [
  {
    image: Ping,
    title: "FT_TRANSENDENCE",
    description: " ft_transendence is a project that combines the game of ping pong with a user account system and integrated chat. Players can register and create accounts to participate in multiplayermatches. The project emphasizes a personalized experience by allowing players to track their progress and compete against similarly skilled opponents. With customizable gameplay settings and a chat feature, ft_transendence provides a dynamic platform for ping pong enthusiasts to connect, play, and interact with each other."
  },
  {
    image: Sys,
    title: "SCHOOL MANAGEMENT SYSTEM",
    description: "  This project involves creating a website for a faculty that includes features such as registration, exam locations, schedules, grades, and other administrative functions. Users can access the site to view their personal information and access relevant academic resources."
  },
  {
    image: Incpt,
    title: "INCEPTION",
    description: " This project aims to enhance your system administration skills with Docker. You can create multiple Docker images in a  personal virtual machine, each with Nginx, MariaDB, WordPress, Adminer, and FTP. Using Docker Compose, you can define and run multi-container Docker applications with a single docker-compose.yml file."
  },
  {
    image: Chat,
    title: "FT_IRC",
    description: " This C++ project involves creating an IRC server and using an IRC client to test it. IRC is a text-based communication protocol that allows real-time messaging in public or private channels. IRC clients connect to IRC servers to join channels, and these servers can be connected together to form a network. With C++, you can create a server that can handle multiple clients and manage different channels and messages."
  },
  {
    image: logo,
    title: "OLD Portfolio",
    description: " This is my old portfolio, I made it with ReactJS and NextJS. I used Framer Motion for the animations. I used TailwindCSS for the styling. I used Vercel for the deployment."
  },
];
export default function CarouselTeam() { 
    return (
    <>
      <Swiper
        effect={"cards"}
        spaceBetween={10}
        grabCursor={true}
        pagination
        modules={[EffectCards]}
        className="mySwiper"
      >
        {(team as TeamType[]).map((item: TeamType, index: number) => (
          <SwiperSlide className="rounded-[8px] space-y-4" key={index}>
            <div className="flex items-center justify-center h-[500px]">
            <Image
              src={item.image}
              alt="team pfp"
              className="object-cover w-full h-[90%]"
            
            />
            </div>
            <div className="w-full  min-h-1 flex flex-col items-center justify-center space-y-2 h-[500px]">
              <div className="flex flex-col items-center justify-center h-[20%]">
                <div className="font-teko font-normal text-4xl">
                  {item.title}
                </div>
                <div
                onClick={() => window.open(item.title, '_ blank')}
                className="min-w-1 self-start cursor-pointer min-h-1 py-2 px-2  flex items-start justify-start">
              </div>
              </div>
              <div className="text-center text-[20px] font-skranji py-2 px-2 h-[80%]">
                {item.description}
              </div>
            </div>
          </SwiperSlide> 
        ))}
      </Swiper>
    </>
  );
}