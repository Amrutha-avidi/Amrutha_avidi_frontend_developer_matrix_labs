import React from 'react';

const FAQ = () => (
  <div className="bg-[#00161d] min-h-[700px] flex flex-col items-center md:flex-row justify-center md:p-[150px] md:space-x-[100px] md:items-start">
    <h1 className="text-[35px] md:text-[50px] text-white font-medium mb-8 w-[400px]">Frequently Asked Questions</h1>
    <div className="">
      {[
        "What is EthAi?",
        "How can EthAi help me as a Trader?",
        "Who can use EthAi?",
        "How does EthAi track smart money flow?",
        "How does EthAi ensure data security?",
      ].map((question, index) => (
        <div key={index} className="flex items-center space-x-2 md:space-x-4 py-2 md:py-4 text-white text-xl">
          <p className="font-medium text-3xl text-[#B0FAFFB2]">+</p>
          <p>{question}</p>

        </div>
      ))}
    </div>
  </div>
);

export default FAQ;
