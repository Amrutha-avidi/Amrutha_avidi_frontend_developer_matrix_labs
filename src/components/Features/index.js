import React from 'react';

const Features = () => {
    return (
        <div className='bg-[#00161d] min-h-[700px] p-8 flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-[12px] w-[1200px]'>
                <div className='flex flex-row gap-3'>
                    {/* Trade Optimizer */}
                    <div className='bg-[#08252a] p-4 rounded-lg w-[250px] h-[504px] flex flex-col justify-between items-center relative group'>
                        <img
                            src='https://res.cloudinary.com/drpddho9b/image/upload/v1728996133/trade-inital_eqx7mu.png'
                            alt='trade-image'
                            className='mt-[65px] w-[110px] h-[110px] object-cover rounded-lg border-2 border-cyan-300'
                        />

                        <div className='absolute top-[110px] left-[98px] flex items-center justify-center text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 will-change-transform'>
                            <span className='transform translate-z-0 group-hover:translate-z-20  border-2 rounded-md'>{'<>'}</span>
                        </div>

                        <div className='mt-4 text-center'>
                            <h1 className='text-white text-xl font-bold mb-4'>Trade Optimizer</h1>
                            <p className='text-[#B0FAFFB2]'>
                                Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.
                            </p>
                        </div>
                    </div>


                    <div className='flex flex-col gap-3 h-[504px] w-[680px]'>
                        {/* Market Insight */}
                        <div className='bg-[#08252a] p-6 pr-0 rounded-lg h-[198px] flex flex-row justify-between items-center group relative'>
                            <div>
                                <h1 className='text-white text-xl font-bold mb-4'>Market Insight</h1>
                                <p className='text-[#B0FAFFB2]'>
                                    Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.
                                </p>
                            </div>

                            {/* Image container with relative positioning */}
                            <div className='relative w-[280px] h-[200px]'>
                                {/* Default image (shown by default) */}
                                <img
                                    src='https://res.cloudinary.com/drpddho9b/image/upload/v1728996133/market-intial_vj8mgv.png'
                                    alt='market-default'
                                    className='absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0'
                                />
                                {/* Hover image */}
                                <img
                                    src='https://res.cloudinary.com/drpddho9b/image/upload/v1728996133/market-hover_rrwpyc.png'
                                    alt='market-hover'
                                    className='absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'
                                />
                            </div>
                        </div>

                        {/* Empty Box */}
                        <div className='bg-[#08252a] p-6 rounded-lg h-[290px] flex justify-center items-center relative group'>
                            <h1 className='text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-y-0'>
                                Our Features
                            </h1>
                        </div>
                    </div>

                    {/* Risk Guard */}
                    <div className='bg-[#08252a] p-4 rounded-lg w-[250px] h-[504px] flex flex-col justify-between items-center relative group'>
                        {/* Image */}
                        <img
                            src='https://res.cloudinary.com/drpddho9b/image/upload/v1728996133/risk-initial_duu7tt.png'
                            alt='risk-guard'
                            className='w-full h-full object-cover rounded-lg'
                        />

                        {/* Text overlay */}
                        <div className='absolute top-[85px] left-[70px]  flex items-center justify-center text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 will-change-transform'>
                            <span className='transform translate-z-0 group-hover:translate-z-20'>AI</span>
                        </div>

                        <div className='mt-4 text-center'>
                            <h1 className='text-white text-xl font-bold mb-4'>Risk Guard</h1>
                            <p className='text-[#B0FAFFB2] '>
                                Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.
                            </p>
                        </div>
                    </div>

                </div>

                <div className='flex flex-row gap-3 w-[1200px] h-[240px]'>
                    {/* Portfolio Sync */}
                    <div className='bg-[#08252a] p-6 pr-0 pb-0 rounded-lg w-[466px] flex flex-row justify-between relative group'>
                        <div>
                            <h1 className='text-white text-xl font-bold mb-4'>Portfolio Sync</h1>
                            <p className='text-[#B0FAFFB2] w-[250px]'>
                                Easily manage your portfolio. You'll always know what you own, how it's performing, and where it's headed.
                            </p>
                        </div>
                        <div className='flex flex-col justify-end p-0'>
                            <img
                                src='https://res.cloudinary.com/drpddho9b/image/upload/v1728996133/portfolio-hover_k9jdqy.png'
                                alt='portfolio'
                                className='w-[400px] h-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                            />
                        </div>
                    </div>


                    {/* Opportunity Scout */}
                    <div className='bg-[#08252a] p-6 pr-0 pb-0 rounded-lg w-[758px] flex flex-row justify-between group'> {/* Added group class here */}
                        <div>
                            <h1 className='text-white text-xl font-bold mb-4'>Opportunity Scout</h1>
                            <p className='text-[#B0FAFFB2] w-[350px]'>
                                Find exciting new projects, events, and tokens that others might be missing. Identify promising opportunities early so you never miss out on the next big thing.
                            </p>
                        </div>
                        <div className='transition-transform duration-300 transform group-hover:-translate-x-5 group-hover:rotate-[-5deg]'> {/* This div handles the hover effect */}
                            <img
                                src='https://res.cloudinary.com/drpddho9b/image/upload/v1729012595/Overlay-removebg-preview_anzjc1.png'
                                alt='search'
                                className='w-[380px] transition-transform duration-300'
                            />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Features;