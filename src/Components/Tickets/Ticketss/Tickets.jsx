import React,{ useEffect, useState} from 'react';

// import React, { use } from 'react';
import TicketCart from '../ticketCart/TicketCart';
import Ticket from '../Ticket/Ticket';

const Tickets = ({TicketsPromised,selectedTicket,handelTickets}) => {

    const Tickets =TicketsPromised
    // console.log(Tickets);
    

   
//     const [tickets, setTickets] = useState([])
//   const [loading, setLoading] = useState(true)
const [tickets,setTickets]=useState([])
const [loading,setLoading]=useState(true)
   useEffect(()=>{
    fetch('/Ticket.json')
    .then(res=>res.json())
    .then(data=>{
        setTickets(data)
        setLoading(false)
    })
    // .catch(err=> {
    //     // console.log('faild Error',err);
    //     // setLoading(false)
        
    // })
   },[])
   if(loading){
    return (
        <div  className='max-w-[1200px] mx-auto p-6'> 
<p>loading</p>
        </div>
    )
   }

    // console.log(selectedTicket);
    return (
        <div className=' my-10 bg-gray-50   max-w-[1200px]  mx-auto  '>
             <h1 className='text-3xl l font-bold text-gray-700 mt-5 ml-5'>Customer Tickets</h1>
           <div className=' p-5 flex gap-5 flex-col md:flex-row'>
           
            <div className='md:w-6/8  grid grid-cols-1 w-full md:grid-cols-2 gap-3'>
                 {

                    
                tickets.map(tickets=><TicketCart handelTickets={handelTickets}  key={tickets.id} tickets={tickets}></TicketCart>)
                
            }


            </div>
         
<div>
    <h2 className='text-2xl text-gray-500 font-medium mb-5'>Task Status</h2>
    
     {
    selectedTicket.map(sele=><Ticket sele={sele}></Ticket>)
 }

  <h2 className='text-2xl text-gray-500 font-medium mb-2 mt-5'>Resolved Task </h2>
 <p  className='text-gray-500 font-medium text-[14px]'>No resolved tasks yet.</p>


</div>
            
           </div>


           
        </div>
    );
};

export default Tickets;