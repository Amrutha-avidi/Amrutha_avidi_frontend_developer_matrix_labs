import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Liquidity Pool', value: 90 },
  { name: 'Team', value: 35 },
  { name: 'Marketing', value: 7 }
];

const COLORS = ['#62f0fe', '#0a99a6', '#186e76'];

const Tokenomics = () => (
  <div className='bg-[#00161d] min-h-[700px] flex flex-col items-center'>
    <h1 className='text-5xl text-white mb-10'>Tokenomics</h1>
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
  </div>
);

export default Tokenomics;
