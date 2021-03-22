import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container>
            <div className='mt-5 pt-5 text-center font-weight-bold'>
                <h1 className='text-danger display-1'>error! 404</h1>
                <h1>sorry! page not found.</h1>
            </div>
        </Container>
    );
};

export default NotFound;