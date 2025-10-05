import React from 'react';

const Footer = () => {
    return (
        <div className='border-1 w-full  bg-[#0b0b0b] flex flex-col items-center justify-center px-10 pt-10'>

<div className=' text-white p-5 flex border-b-1 border-gray-500 flex-col md:flex-row gap-5 md:gap-25 justify-between'>

<div className='w-[250px]'>
  <h1 className='text-xl font-bold mb-3'>CS — Ticket System</h1>
  <p className='text-gray-400' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>

<div>
  <h1 className='text-xl font-bold mb-3'>Company</h1>
  <p className='text-gray-400'>About Us</p>
  <p className='text-gray-400 my-3'>Our Mission</p>
  <p className='text-gray-400'>Contact Saled</p>
</div>

<div>
     <h1 className='text-xl font-bold mb-3'>Services</h1>
     <p className='text-gray-400'>Products & Services</p>
     <p className='text-gray-400 my-3'>Customer Stories</p>
     <p className='text-gray-400'>Download Apps</p>
</div>

<div>
    <h1 className='text-xl font-bold mb-3'>Information</h1>
    <p className='text-gray-400'>Privacy Policy</p>
    <p className='text-gray-400 my-2'>Terms & Conditions</p>
    <p className='text-gray-400'>Join Us</p>
</div>

<div>
   <h1 className='text-xl font-bold mb-3'>Social Links</h1>
  <p className='my-5 flex gap-2 '><img className=' border-1  rounded-full object-cover w-ful' src="https://i.ibb.co.com/4wMjySDs/fi-5969020.png" alt="" /> <span className='text-gray-400'> X@CS — Ticket System</span> </p>

  <p className='my-5 flex gap-2'> <img className=' border-1  rounded-full object-cover w-ful' src="https://i.ibb.co.com/4wh8fCT9/fi-145807.png" alt="" /><span className='text-gray-400'> @CS — Ticket System</span> </p>

  <p className='my-5 flex gap-2'> <img className=' border-1  rounded-full object-cover w-ful' src="https://i.ibb.co.com/ynTwcvSp/fi-5968764.png" alt="" /><span className='text-gray-400'> @CS — Ticket System</span> </p>

  <p className='my-5 flex gap-2'> <img className=' border-1  rounded-full object-cover w-ful' src="https://i.ibb.co.com/JjVMdY0h/fi-6244710.png" alt="" /><span className='text-gray-400'> support@cst.com</span> </p>
</div>

</div>
<div className='flex items-center justify-center'>
  <p className='text-gray-400 text-center px-6  mt-[-10px] pt-5 pb-5'>© 2025 CS — Ticket System. All rights reserved. </p>
</div>
</div>
    );
};

export default Footer;