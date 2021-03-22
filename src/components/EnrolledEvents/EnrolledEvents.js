import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './EnrolledEvents.css';
import logo from '../../logos/logo.png';


const EnrolledEvents = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(`https://calm-taiga-14978.herokuapp.com/enrolledEvents?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);
    const handleCancel = (id) => {
        fetch(`https://calm-taiga-14978.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if(result){
                    const data = events.filter(data => data._id !== id);
                    setEvents(data);
                }
            })
    };
    const history = useHistory()
    const navEvents = () => {
        history.push('/events')
    }
    const navHome = () => {
        history.push('/home')
    }
    return (
        <Container>
            <Navbar bg="none" variant="light" className="mb-5">
                <Navbar.Brand><Link to="/home"><img src={logo} alt="" /></Link></Navbar.Brand>
                <Nav className="ml-auto header-nav">
                    <Nav.Link onClick={navHome}>Home</Nav.Link>
                    <Nav.Link>Donation</Nav.Link>
                    <Nav.Link onClick={navEvents}>Events</Nav.Link>
                    <Nav.Link>Blogs</Nav.Link>
                    {
                        loggedInUser && <Nav.Link style={{ fontWeight: "700", color: "black" }}>{loggedInUser.name}</Nav.Link>
                    }
                </Nav>
            </Navbar>
            <h4>You are registered in {events.length} events.</h4>
            <Row>
                {
                    events.map(event =>
                        <Col key={event._id} sm={6} >
                            <Row className="event-card mx-2 my-3">
                                <Col sm={6}>
                                    <img src={event.img} alt="" />
                                </Col>
                                <Col sm={6}>
                                    <div className="ml-2">
                                        <h3>{event.event}</h3>
                                        <h6>{new Date(event.date).toDateString('dd/MM/yyyy')}</h6>
                                        <Button onClick={() => handleCancel(`${event._id}`)} variant="outline-danger">Cancel</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default EnrolledEvents;

