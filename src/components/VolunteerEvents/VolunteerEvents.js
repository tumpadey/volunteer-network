import React, { useEffect, useState } from 'react';
import fakeData from'../fakeData/fakeData';
import { Link, useParams } from 'react-router-dom';

const VolunteerEvents = () => {

    const {id}  = useParams();
   

   const [events, setEvents] = useState(fakeData)

   // load events data from API
   useEffect(() => {
       fetch('http://localhost:5000/allEvent')
           .then(res => res.json())
           .then(data => setEvents(fakeData))
   }, [])

   
    return (
        <div className="row">
        {
           events.map(event =>
             <div className="col-md-3" key={event._id}>
                <img  src={event.picture} className="card-img" alt=""/>
                <Link to={`/eventRegistration/${event._id}`}><h3 className="bg-primary text-white p-3 rounded">{event.title}</h3></Link>
               </div>

                )
            }
        </div>
    );
};

export default VolunteerEvents;

               
  
