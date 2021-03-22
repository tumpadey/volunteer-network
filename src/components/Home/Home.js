import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Events from '../Events/Events';


const Home = () => {
    return (
        <div className="bg-home">
            <main>
                <Header></Header>
                <Events></Events>
            </main>
        </div>
    );
};

export default Home;