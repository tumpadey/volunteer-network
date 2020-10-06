import React from 'react';
import  './Header.css';
import {Link} from 'react-router-dom';
import logo from '../../logos/logo.png';

const Header = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <a class="navbar-brand" href="/home">
                <img src ={logo} alt=""/>

            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="donation">Donation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="events">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="blog" >Blog</a>
                    </li>
                    </ul>
                    <Link to="/eventRegistration"><button type="button" className="btn btn-primary mr-2">Register</button></Link>
                    <br />
                    <Link to="/admin"><button type="button" className="btn btn-dark">Admin</button></Link>
                </div>
            </nav>
        </div>
               
       
            
        
    );
};

export default Header;