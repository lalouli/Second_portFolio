import React from "react";

const Profile = () => {
  return (
    <div className="w-full h-[1100px] border border-green-500 flex flex-col gap-10">
      <div className="h-[200px] w-full flex items-center border border-blue-400">
        <div className="h-[60%] w-[15%] ml-5 bg-[#EEA47F] rounded-tl-lg rounded-br-lg">

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
