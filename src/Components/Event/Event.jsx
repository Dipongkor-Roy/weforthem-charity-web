import { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";

const Event = () => {
    const [events,setEvents]=useState([])
    useEffect(()=>{
        fetch("http://localhost:2000/events")
        .then(res=>res.json())
        .then(data=>setEvents(data))
    },[])
return (
 <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
     {
      events.map(event=><EventCard
      key={event._id}
      event={event}
      ></EventCard>)
     }
     
   
    </div>
  </div>
</section>
    );
};

export default Event;