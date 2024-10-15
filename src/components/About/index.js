import React from 'react'

const About = () => {
    return (
        <div className='bg-[#00161d] min-h-[700px] flex flex-col items-center'>
            <h1 className='text-5xl text-white m-5'>About EthAi</h1>
            <p className='text-[#B0FAFFB2] text-xl w-[1000px] text-center'>At EthAi, we’re all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders’ movements.</p>
            <button className='bg-[#CDFCFF] rounded-xl text-black px-5 py-2 m-7'
                style={{ boxShadow: 'inset 0 5px 9px rgba(76, 221, 253, 0.5)' }}>Read more</button>

            <div className='flex flex-col bg-[#08252a] rounded-xl px-[100px] py-[50px]'>
                <div className='flex flex-row  justify-center items-center m-4'>
                    <div className='flex flex-col justify-start w-[290px] h-[120px] space-y-2 '>
                        <img src='https://res.cloudinary.com/drpddho9b/image/upload/v1729016570/graph_jjvqsj.png' alt='graph' className='w-[24px] h-[24px]' />
                        <h1 className='text-white font-medium text-xl' >Stay Ahead</h1>
                        <p className='text-[#B0FAFFB2] text-[18px]'>No more guesswork—get clear, trustable insights.</p>
                    </div>
                    <div className='flex flex-col justify-start w-[290px] h-[120px] space-y-2'>
                        <img src='https://res.cloudinary.com/drpddho9b/image/upload/v1729016569/wallet_xfq1ge.png' alt='wallet' className='w-[24px] h-[24px]' />
                        <h1 className='text-white font-medium text-xl'>Know Your Assets</h1>
                        <p className='text-[#B0FAFFB2] text-[18px]'>Always stay on top of how your investments are performing..</p>
                    </div>
                </div>

                <div className='flex flex-row  justify-center items-center m-4'>
                    <div className='flex flex-col justify-start w-[290px] h-[120px] space-y-2'>
                        <img src='https://res.cloudinary.com/drpddho9b/image/upload/v1729016569/Tools_ve3db3.png' alt='tools' className='w-[24px] h-[24px]' />

                        <h1 className='text-white font-medium text-xl'>Simple, Not Overwhelming</h1>
                        <p className='text-[#B0FAFFB2] text-[18px]'>Our tools are designed to make complex market analysis easy to understand and act on..</p>
                    </div>
                    <div className='flex flex-col justify-start w-[290px] h-[120px] space-y-2'>
                        <img src='https://res.cloudinary.com/drpddho9b/image/upload/v1729016568/Future_Technology_hekawj.png' alt='future' className='w-[24px] h-[24px]' />
                        <h1 className='text-white font-medium text-xl'>Future-Proof</h1>
                        <p className='text-[#B0FAFFB2] text-[18px]'>We’re constantly improving, adding new features to help you make the most informed decisions possible..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About