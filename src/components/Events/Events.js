import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Events.css';
import { useHistory } from 'react-router-dom';
import fakeEvents from '../fakeEvents';

// const colors = ['primary', 'success', 'danger', 'warning', 'info'];

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        setEvents(fakeEvents)
    }, []);
    const history = useHistory();
    const handleEvent = (id) => {
        history.push(`/register/${id}`)
    }
    return (
        <Container className="text-center" >
            <Row className="mt-5">
                {
                    events.map(event =>
                        <Col key={event.id} sm={3}>
                            <Card onClick={() => handleEvent(event.id)} className="bg-primary mb-4 card-style">
                                <Card.Img src={event.img} alt="image" />
                                <Card.Title>{event.name}</Card.Title>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default Events;