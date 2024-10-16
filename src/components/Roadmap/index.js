import React from 'react';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Roadmap = () => {
    return (
        <div className='bg-[#00161d] min-h-[700px]'>
            <h1 className='text-5xl text-white text-center mb-10'>Roadmap</h1>

            <div className='flex'>
                {/* Left content section */}
                <div className='flex-1 flex flex-col justify-center p-10 space-y-12 ml-[250px]'>
                    <p className='bg-white w-[90px] text-center rounded-md p-2 font-semibold'>PHASE 1</p>
                    <h1 className='font-bold text-white text-4xl'>Kicking Off</h1>
                    <div className='flex flex-col space-y-4'>
                        {[
                            "Launch of ETHAi: Officially",
                            "Development of Core AI Agents",
                            "User Onboarding Campaign",
                            "Community Engagement Initiative",
                        ].map((text, index) => (
                            <div key={index} className='flex flex-row justify-start items-center space-x-2'>
                                <IoCheckmarkCircleOutline color='#98e3f0' fontSize={24} />
                                <p className='text-white text-2xl'>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right image section */}
                <div className="flex-1">
                    <img
                        className='h-[600px] w-full object-cover'
                        src='https://res.cloudinary.com/drpddho9b/image/upload/v1729057569/1_chxve7.png'
                        alt='road1'
                        style={{ maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)' }}
                    />
                </div>
            </div>
            <div className='flex'>
                 <div className="flex-1">
                    <img
                        className='h-[600px] w-full object-cover'
                        src='https://res.cloudinary.com/drpddho9b/image/upload/v1729057568/2_p3p1l6.png'
                        alt='road2'
                        style={{ maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)' }}
                    />
                </div>
                <div className='flex-1 flex flex-col justify-center p-10 space-y-12 ml-[250px]'>
                    <p className='bg-white w-[90px] text-center rounded-md p-2 font-semibold'>PHASE 2</p>
                    <h1 className='font-bold text-white text-4xl'>Bigger Insights</h1>
                    <div className='flex flex-col space-y-4'>
                        {[
                            "Introduction of Advanced AI Agents",
                            "Strategic Partnerships",
                            "User Interface Optimization",
                            "Comprehensive Marketing Campaign",
                        ].map((text, index) => (
                            <div key={index} className='flex flex-row justify-start items-center space-x-2'>
                                <IoCheckmarkCircleOutline color='#98e3f0' fontSize={24} />
                                <p className='text-white text-2xl'>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
               
            </div>
            <div className='flex'>
                {/* Left content section */}
                <div className='flex-1 flex flex-col justify-center p-10 space-y-12 ml-[250px]'>
                    <p className='bg-white w-[90px] text-center rounded-md p-2 font-semibold'>PHASE 3</p>
                    <h1 className='font-bold text-white text-4xl'>Full Power</h1>
                    <div className='flex flex-col space-y-4'>
                        {[
                            "Introduction of Enhanced Features",
                            "API Integration for Data Access",
                            "Launch of Community-Driven Initiativces",
                            "Continuous Improvment and Updates",
                        ].map((text, index) => (
                            <div key={index} className='flex flex-row justify-start items-center space-x-2'>
                                <IoCheckmarkCircleOutline color='#98e3f0' fontSize={24} />
                                <p className='text-white text-2xl'>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right image section */}
                <div className="flex-1">
                    <img
                        className='h-[600px] w-full object-cover'
                        src='https://res.cloudinary.com/drpddho9b/image/upload/v1729057568/3_m8ncwm.png'
                        alt='road1'
                        style={{ maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Roadmap;
