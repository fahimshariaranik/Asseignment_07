import React from 'react';

const Main = ({selectedTicket}) => {
    console.log(selectedTicket.length);
    
    return (
        <div className=' my-10 flex p-4 md:p-0 flex-col items-center md:flex-row gap-10 max-w-[1200px] mx-auto'>

            <div className='h-[200px] md:w-1/2 w-full rounded-xl
              bg-gradient-to-r from-[#632ee3] to-[#9f62f2] opacity-80 flex items-center justify-center'>


<div className='text-center '>
    <h1 className='text-2xl text-white font-semibold '>In-Progress</h1>
    <h1 className='text-5xl text-white font-semibold mt-3'>{selectedTicket.length}</h1>
</div>
            </div>

            <div className='h-[200px] md:w-1/2 w-full 
             rounded-xl  bg-gradient-to-r from-[#54cf68] to-[#00827a] opacity-80 flex items-center justify-center '>

<div className='text-center '>
    <h1 className='text-2xl text-white font-semibold'>Resolved</h1>
    <h1 className='text-5xl text-white font-semibold mt-3'>0</h1>
</div>
            </div>
            
            
        </div>
    );
};

export default Main;