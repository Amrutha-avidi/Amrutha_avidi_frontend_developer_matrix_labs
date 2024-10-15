import React from 'react'

const Main = () => {
    return (
        <div className='bg-black min-h-[700px] flex flex-col  items-center'>
            <div className='flex flex-col justify-center items-center mt-[110px] mb-5'>
                <h1 className='md:text-[48px] text-[75px] font-medium text-white'>When Innovation</h1>
                <div className='flex flex-row justify-center items-center space-x-3'>
                    <h1 className='md:text-[48px] text-[75px] font-medium text-white'>Meets</h1>
                    <h1 className='md:text-[48px] text-[75px] font-medium rounded-[42px] bg-[#B0F9FF] py-0 px-3 text-[#0b2a2d]'>Investment</h1>
                </div>

            </div>

            <p className='text-[#B0FAFFB2] text-xl'>Empowering Trading Through Advanced Technology</p>

            <button className="w-auto h-auto px-6 py-3 bg-[#8BF9E8]/[0.01] text-white font-bold rounded-[12px] shadow-inner shadow-[#8BF9E8]/20 backdrop-blur-[7.5px] m-7">
                Open dApp
            </button>


        </div>
    )
}

export default Main