import { toast } from "react-toastify";


const Ticket = ({sele}) => {
const handelButton=()=>{
  toast('✅ Task completed — smooth and clean!')
}
  
    return (
      
   
        <div className=' w-full p-1    flex flex-col'>

<div className='p-3 bg-white shadow-lg  rounded-md'>

<h1 className='text-xl font-bold my-2 text-center'>{sele.title}</h1>
<button onClick={()=>handelButton()} className='cursor-pointer text-lg font-medium text-center w-full bg-[#02a53b] rounded-lg py-1 my-2 text-white'>Compleate</button>
</div>
</div>
    );
};

export default Ticket;