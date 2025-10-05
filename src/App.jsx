
import { Suspense, useState } from 'react'
import './App.css'
import Navber from './Components/Tickets/Navber/Navber'
import Main from './Components/Tickets/Mainpart/Main'
import Tickets from './Components/Tickets/Ticketss/Tickets'
import Footer from './Components/Tickets/Footers/Footer'


const fetchtickets= async()=>{
  const res = await fetch('/public/Ticket.json')
  return res.json() 
}
const TicketsPromised=fetchtickets()
// console.log(TicketsPromised);




function App() {

  const [selectedTicket,setSelectedTicket]=useState([])
  // const [currentTicket, setCurrentTicket]=useState(null)

// console.log(selectedTicket);

const handelTickets=(ticket)=>{
  // setSelectedTicket(ticket)

  setSelectedTicket(prev=>{
    if(!prev.find(t=>t.id === ticket.id)){
      return [...prev,ticket]
    }
    return prev;
  })
}

const handelCompleate=(id)=>{
setSelectedTicket(prev=> prev.filter(t=>t.id !==id))
}

  return (
    <>
   
   <Navber> </Navber>

<Main selectedTicket={selectedTicket}> </Main>


<Suspense>
  <Tickets selectedTicket={selectedTicket} handelCompleate={handelCompleate} handelTickets={handelTickets} TicketsPromised={TicketsPromised}> </Tickets>

  {/* <Tickets  > </Tickets> */}
</Suspense>








<Footer> </Footer>

    </>
  )
}

export default App
