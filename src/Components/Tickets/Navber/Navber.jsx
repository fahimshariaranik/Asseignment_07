import React from 'react';

const Navber = () => {
    return (
          <div className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto flex justify-between flex-col md:flex-row gap-2 md:gap-0 items-center">
  <a className=" btn-ghost text-xl font-bold ml-3">CS — Ticket System</a>

<ul className='flex flex-col md:flex-row gap-4 justify-between items-center text-black cursor-pointer '>
  <li>Home</li>
  <li>FAQ</li>
  <li>changelog</li>
  <li>Blog</li>
  <li>Download</li>
  <li>Contact</li>
  <li className='bg-gradient-to-tr from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] px-3 py-2  text-white font-semibold text-md rounded-lg'>+ New Ticket</li>

</ul>

</div>
    );
};

export default Navber;