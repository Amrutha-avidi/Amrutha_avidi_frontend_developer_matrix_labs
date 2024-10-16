import React from 'react';

const FAQ = () => (
  <div className="bg-[#00161d] min-h-[700px] flex flex-row justify-center p-[150px] space-x-[100px] items-start">
    <h1 className="text-[50px] text-white font-medium mb-8 w-[400px]">Frequently Asked Questions</h1>
    <div className="">
      {[
        "What is EthAi?",
        "How can EthAi help me as a Trader?",
        "Who can use EthAi?",
        "How does EthAi track smart money flow?",
        "How does EthAi ensure data security?",
      ].map((question, index) => (
        <div key={index} className="flex items-center space-x-4 py-4 text-white text-xl">
          <p className="font-medium text-3xl text-[#B0FAFFB2]">+</p>
          <p>{question}</p>

        </div>
      ))}
    </div>
  </div>
);

export default FAQ;
