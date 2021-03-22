import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/logo.png';
import './Register.css';
import fakeEvents from '../fakeEvents';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { id } = useParams();
    const [events, setEvents] = useState([])
    useEffect(() => {
        setEvents(fakeEvents)
    }, []);
    const event = events.find(event => event.id === parseInt(id)) || {};

    const history = useHistory();
    const [selectedDate, setSelectedDate] = useState({date: ''});
    const handleDate = e => {
        const newDate = {...selectedDate}
        newDate[e.target.name] = e.target.value;
        setSelectedDate(newDate)
    };
    
    const [validated, setValidated] = useState(false);
    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        if(form.checkValidity() === true){
            const registeredData = {
                id: event.id,
                name: loggedInUser.name,
                email: loggedInUser.email,
                event: event.name,
                description: event.details,
                img: event.img,
                date: selectedDate.date
            }
            fetch('https://calm-taiga-14978.herokuapp.com/registeredUser', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(registeredData)
            })
            .then(res => res.json)
            .then(data => history.push('/events'));
            
        }
        setValidated(true);
        e.preventDefault();
    };
    return (
        <Container>
            <div className="text-center">
                <Link to="/home"><img className="mt-5 mb-5" src={logo} alt="" /></Link>
            </div>
            <Row className="justify-content-md-center mb-5" >
                <Form className="register-form" noValidate validated={validated} onSubmit={handleSubmit}>
                    <h3 className="mb-3">Register as a Volunteer</h3>
                    <Form.Group controlId="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control required readOnly type="text" placeholder="Enter name" value={loggedInUser.name} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required readOnly type="email" placeholder="Email" value={loggedInUser.email} />
                    </Form.Group>
                    <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control required onChange={handleDate} name="date" type="date" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control required readOnly type="text" placeholder="Description" value={event.details} />
                    </Form.Group>
                    <Form.Group controlId="event">
                        <Form.Label>Event</Form.Label>
                        <Form.Control required readOnly type="text" placeholder="Event" value={event.name}/>
                    </Form.Group>
                    <Button className="form-control" variant="primary" type="submit">
                        Registration
                    </Button>
                </Form>
            </Row>
        </Container>
    );
};

export default Register;