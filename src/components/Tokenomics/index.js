import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Liquidity Pool', value: 90 },
  { name: 'Team', value: 35 },
  { name: 'Marketing', value: 7 }
];

const COLORS = ['#62f0fe', '#0a99a6', '#186e76'];

const Tokenomics = () => (
  <div className='bg-[#00161d] min-h-[700px] flex flex-col items-center pt-[50px] md:pt-[100px]'>
    <h1 className='text-5xl text-white mb-10'>Tokenomics</h1>
    <div className='flex flex-col justify-center items-center space-y-8 md:flex md:flex-row md:justify-between md:space-x-[200px]'>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={100}
          outerRadius={150}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          cornerRadius={20}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      <div className=' flex flex-col space-y-4 text-white text-lg md:text-2xl '>
        <div className='bg-[#08222e] rounded-2xl flex flex-col space-y-2 px-[30px] py-5 md:px-[65px] md:py-10'>
          <div className='flex flex-row space-x-0'>
            <p className="w-[200px]">Name</p>
            <div className='w-[200px] flex flex-row items-center space-x-4'>
              <p>:</p>
              <p>EthAi</p>
            </div>
          </div>

          <div className='flex flex-row space-x-0'>
            <p className="w-[200px]">Token Name</p>
            <div className='w-[200px] flex flex-row items-center space-x-4'>
              <p>:</p>
              <p>$EthAi</p>
            </div>
          </div>

          <div className='flex flex-row space-x-0'>
            <p className="w-[200px]">Token Standard</p>
            <div className='w-[200px] flex flex-row items-center space-x-4'>
              <p>:</p>
              <p>ERC20</p>
            </div>
          </div>

          <div className='flex flex-row space-x-0'>
            <p className="w-[200px]">Blockchain</p>
            <div className='w-[200px] flex flex-row items-center space-x-4'>
              <p>:</p>
              <p>Ethereum</p>
            </div>
          </div>

          <div className='flex flex-row space-x-0'>
            <p className="w-[200px]">Total Supply</p>
            <div className='w-[200px] flex flex-row items-center space-x-4'>
              <p>:</p>
              <p>100 Million</p>
            </div>
          </div>

          <div className='flex flex-row space-x-0'>
            <p className="w-[200px]">Tax</p>
            <div className='w-[200px] flex flex-row items-center space-x-4'>
              <p>:</p>
              <p>5%/5%</p>
            </div>
          </div>
        </div>

        <div className='bg-[#08222e] rounded-2xl flex flex-col space-y-2 px-[30px] py-5 md:px-[65px] md:py-10'>
          <div className='flex flex-row space-x-0'>
            <p className="w-[200px]">Team</p>
            <div className='w-[200px] flex flex-row items-center space-x-4'>
              <p>:</p>
              <p>35%</p>
            </div>
          </div>

          <div className='flex flex-row space-x-0'>
            <p className="w-[200px]">Marketing</p>
            <div className='w-[200px] flex flex-row items-center space-x-4'>
              <p>:</p>
              <p>5%</p>
            </div>
          </div>

          <div className='flex flex-row space-x-0'>
            <p className="w-[200px]">Liquidity</p>
            <div className='w-[200px] flex flex-row items-center space-x-4'>
              <p>:</p>
              <p>90%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Tokenomics;
