import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-row justify-between items-center  bg-black text-white p-6 px-12'>
            <div className='flex flex-row items-center space-x-3'>
                <img src='https://res.cloudinary.com/drpddho9b/image/upload/v1728970220/logo_pgfsoj.png' alt='logo' />
                <h1 className='text-xl font-bold'>EthAi</h1>
            </div>
            <div className='flex flex-row justify-evenly space-x-10 bg-[#0C2B2FB2] px-[90px] py-3 rounded-3xl '>
                <a className='text-[#B0FAFFB2] text-[17px]' href='#f'>Features</a>
                <a className='text-[#B0FAFFB2] text-[17px]' href='#w'>Why Us</a>
                <a className='text-[#B0FAFFB2] text-[17px]' href='#t'>Tokenomics</a>
                <a className='text-[#B0FAFFB2] text-[17px]' href='#r'>Roadmap</a>
            </div>
            <div className='flex flex-row justify-evenly space-x-8'>
                <button type='button'>
                    Log in
                </button>
                <button type='button'
                    className='bg-[#CDFCFF] rounded-xl text-black px-5 py-2'
                    style={{ boxShadow: 'inset 0 5px 9px rgba(76, 221, 253, 0.5)' }}
                >Whitepaper</button>
            </div>
        </div>
    )
}

export default Header