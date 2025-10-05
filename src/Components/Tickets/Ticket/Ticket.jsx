

const Ticket = ({sele}) => {
//  const usedticlet =ticket
  // console.log(selectedTicket.length);
  console.log(sele);
  // if(!sele){
  //  return <div>
  //     <p>no data</p>
  //   </div>
  // }
    return (
      
      
        <div className=' w-full p-1    flex flex-col'>

<div className='p-3 bg-white shadow-lg  rounded-md'>

<h1 className='text-xl font-bold my-2 text-center'>{sele.title}</h1>
<button className='cursor-pointer text-lg font-medium text-center w-full bg-[#02a53b] rounded-lg py-1 my-2 text-white'>Compleate</button>
</div>
</div>
    );
};

export default Ticket;