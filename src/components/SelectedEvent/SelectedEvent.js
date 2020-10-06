import React from 'react';
import Header from '../Header/Header';

const SelectedEvent = () => {
    return (
        <div className="container">
             <Header></Header>

        <div className="row card p-5">
            <div className="col-md-4">
                <img src="https://i.imgur.com/HTMJFd1.png" className="card-img" alt="" />
            </div>
            <div className="col-md-4">
                <h1>Humanity More</h1>
                <h3>Date:</h3>
            </div>
            <div className="col-md-4">
                <button className="btn btn-secondary">Cancel</button>
            </div>
        </div>
        </div>
    );
};

export default SelectedEvent;