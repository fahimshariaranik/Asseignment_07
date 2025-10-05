import React from 'react';

 const color=(state)=>{
       if(state === "Open"){
        return "bg-green-500"
       }else if(state === "In Progress"){
        return "bg-yellow-500"
       }else{
        return "bg-green-500"
       }
    }
const getStatestyles=(state)=>{
 if(state === "Open"){
    return "bg-green-100 font-semibold text-green-600"
 }else if(state === "In Progress"){
   
    return "bg-yellow-100 font-semibold text-yellow-600"
 }else{
      return " text-semibold bg-green-100  text-green-500";
 }
}

const getPriority=(priority)=>{
    if(priority === "HIGH" ){
        return "text-red-500 font-semibold"
    }else if(priority === "MEDIUM"){
        return "text-yellow-600 font-semibold"
    }else if(priority === "LOW"){
        return "text-green-600 font-semibold"
    }else{
        return "text-gray-600"    
    }
}
const TicketCart = ({tickets,handelTickets}) => {
    // console.log(tickets);
    
    return (
  <div onClick={()=>handelTickets(tickets)}  className=' rounded-lg text-left gap-4 h-full shadow-lg w-full cursor-pointer'>
        

<div className='cart p-3 bg-[#fff] rounded-mf '>

<div className='flex justify-between items-center '>
    <h1 className='text-xl font-semibold'>{tickets.title} </h1>

     <span className={`flex items-center gap-1 px-4 py-1 rounded-3xl ${getStatestyles(tickets.status)}`} ><span className={`inline-block w-4 h-4  mr-1 rounded-full ${color(tickets.status)}`}></span> {tickets.status}</span>
    </div>

<div className='my-2'>
    <p className='text-gray-500 text-[17px]'>{tickets.description}</p>
</div>

<div className='flex justify-between items-center'>
    <div className='flex gap-2 '>
        <p className='text-gray-500 font-medium'>{tickets.SerialNumber}</p>
        <p className={`${getPriority(tickets.priority.toUpperCase())}`}>{tickets.priority}  PRIORITY</p>
    </div>

    <div className='flex gap-3 my-2 '>
        <p className='text-gray-500 '>{tickets.customer}</p>
        <h3 className='flex gap-1'><span ><img  src="https://i.ibb.co.com/LdrjxtNg/ri-calendar-line.png" alt="" /></span> {tickets.createdAt} </h3> 
    </div>
</div>
</div>
            </div>
            
    );
};

export default TicketCart;