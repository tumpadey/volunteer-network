import React from 'react';

import './Home.css';
import Header from '../Header/Header';
import VolunteerEvents from '../VolunteerEvents/VolunteerEvents';





const Home = () => {
    
    return (
        <main>
            <Header></Header>
            <div className="container mr-l-4 text-center">
            <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
            <form className="form-inline d-flex justify-content-center mt-4">
                    <input className="form-control mr-sm-2 w-50" type="search" placeholder="Search..." aria-label="Search" />
                    <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
             </div>

             <div className="volunteer-events container">
                <VolunteerEvents></VolunteerEvents>
             </div>
            
        </main>
    );
};

export default Home;