import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { RxDiscordLogo } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => (
  <div className="bg-[#010f14] py-10 flex justify-between items-center px-[100px]">
    <div className='flex flex-col space-y-5'>
      <div className="flex space-x-5 items-center">
        <img src='https://res.cloudinary.com/drpddho9b/image/upload/v1729068475/Group_20_tqkg7i.png' 
        alt='logo'
        className='w-[70px] h-[70px]' />

        <h1 className="text-white font-bold text-4xl">EthAi</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className='bg-[#092327] p-3 rounded-full' >
          <FaTelegramPlane color='white' fontSize={30}/>
        </div>
        <div className='bg-[#092327] p-3 rounded-full' >
          <BsInstagram color='white' fontSize={30}/>
        </div>
        <div className='bg-[#092327] p-3 rounded-full' >
          <FaFacebookF color='white' fontSize={30}/>
        </div>
        <div className='bg-[#092327] p-3 rounded-full' >
          <BsTwitterX color='white' fontSize={30}/>
        </div>
        <div className='bg-[#092327] p-3 rounded-full' >
          <RxDiscordLogo color='white' fontSize={30}/>
        </div>
      </div>
    </div>
    <div className='flex flex-col items-end w-[700px] space-y-5'>
      <h1 className='font-semibold text-5xl  text-white leading-[4.0rem]'>“Designed for traders of today, just like you."</h1>
      <div className="flex items-center justify-between pr-2 space-x-4 border w-[700px] border-gray-50 rounded-xl">
        <input
          type="email"
          placeholder="What's your work email?"
          className="py-2 px-4 rounded-md focus:outline-none bg-transparent"
        />
        <button className=" text-white text-lg py-2 px-6 m-2 rounded-lg border border-[#98e3f0]" style={{
          background: 'radial-gradient(circle at center, )',
        }}>
          Get Started
        </button>
      </div>
    </div>
  </div>
);

export default Footer;
