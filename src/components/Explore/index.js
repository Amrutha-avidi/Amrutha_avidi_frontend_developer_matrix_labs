import React from 'react';

const Explore = () => (
  <div className="bg-[#00161d] min-h-[300px] flex flex-col items-center pb-[100px]">
    <div className=" border border-[#097a8a] rounded-xl p-8 max-w-[1000px] text-center text-white shadow-lg">
      <h1 className="text-[50px] font-semibold mb-4">Explore Our <span className='text-[#62f0fe] '>dApp</span></h1>
      <p className="mb-6 text-lg text-[#097a8a] ">
        EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions.
        By tracking smart money flows, monitoring key wallets, and providing real-time market insights,
        EthAi empowers users to stay ahead of trends. The platform offers AI-driven features for
        asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate
        tool for both novice and experienced traders.
      </p>

      <button type='button'
        className='bg-[#CDFCFF] rounded-xl text-black px-5 py-2'
        style={{ boxShadow: 'inset 0 5px 9px rgba(76, 221, 253, 0.5)' }}
      >    Open dApp</button>
    </div>
  </div>
 

);

export default Explore;
