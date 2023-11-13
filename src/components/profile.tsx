import React from "react";

const Profile = () => {
  return (
    <div className="w-full h-[1100px] flex flex-col gap-10">
      <div className="h-[200px] w-full flex ">
        <div className="h-[30%] lg:h-[50%] w-[40%] lg:w-[35%] 2xl:w-[500px] ml-4  mt-10 flex items-center justify-center  rounded-tl-md rounded-br-md bg-[linear-gradient(45deg,transparent_7%,#EEA47F_5%,#EEA47F_93%,transparent_10%)] ">
        <span className="z-10 tracking-wider text-[20px] lg:text-[30px] font-bold font-Poppins text-[#2A185B]">
          About
        </span>
        </div>
      </div>
      <div className="h-full w-full flex justify-between">
        <div className="h-full w-[45%] border border-red-600 flex justify-center items-center"></div>
        <div className="h-full w-[45%] border border-red-600"></div>
      </div>
    </div>
  );
};

export default Profile;
