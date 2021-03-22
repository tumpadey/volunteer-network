import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png';
import addIcon from '../../logos/plus.png';
import userIcon from '../../logos/users.png';

const AddEvent = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={3}>
                    <Link to='/home'><img style={{ height: '70px', margin: '20px 0 40px 0' }} src={logo} alt="" /></Link>
                    <p><Link to='/admin/registerdList'><img style={{ height: '20px' }} src={userIcon} alt="" /> Volunteer Register List</Link></p>
                    <p><Link to='/admin/addEvent'><img style={{ height: '20px' }} src={addIcon} alt="" /> Add Event</Link></p>
                </Col>
                <Col sm={9}>
                    <h4 style={{ margin: '20px 0 20px 0' }}>Add New Event</h4>
                    <Form style={{ margin: '50px 0 20px 0' }}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="title">
                                <Form.Label className="font-weight-bold" >Event Title</Form.Label>
                                <Form.Control size="lg" type="text" placeholder="Event Title" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="date">
                                <Form.Label className="font-weight-bold">Event Date</Form.Label>
                                <Form.Control size="lg" type="date" placeholder="date" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="description">
                                <Form.Label className="font-weight-bold">Description</Form.Label>
                                <Form.Control size="lg" type="text" placeholder="Description" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="banner">
                                <Form.Label className="font-weight-bold">Banner</Form.Label>
                                <Form.File size="lg" type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    );
};

export default AddEvent;