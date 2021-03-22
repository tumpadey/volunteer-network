import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png';
import addIcon from '../../logos/plus.png';
import userIcon from '../../logos/users.png';
import removeIcon from '../../logos/trash.png';

const RegisterList = () => {
    const [usersInfo, setUsersInfo] = useState([])
    useEffect(() => {
        fetch('https://calm-taiga-14978.herokuapp.com/allUsers')
            .then(res => res.json())
            .then(data => setUsersInfo(data))
    }, []);
    const handleDelete = (id) => {
        fetch(`https://calm-taiga-14978.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if(result){
                    const data = usersInfo.filter(data => data._id !== id);
                    setUsersInfo(data);
                }
            })
    };
    return (
        <Container fluid>
            <Row>
                <Col sm={3}>
                    <Link to='/home'><img style={{ height: '70px', margin: '20px 0 40px 0' }} src={logo} alt="" /></Link>
                    <p><Link to='/admin/registerdList'><img style={{ height: '20px' }} src={userIcon} alt="" /> Volunteer Register List</Link></p>
                    <p><Link to='/admin/addEvent'><img style={{ height: '20px' }} src={addIcon} alt="" /> Add Event</Link></p>
                </Col>
                <Col sm={9}>
                    <h4 style={{ margin: '20px 0 20px 0' }}>Volunteer Register List</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Registration Date</th>
                                <th>Event Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersInfo.map(userInfo =>
                                    <tr key={userInfo._id}>
                                        <td>{userInfo.name}</td>
                                        <td>{userInfo.email}</td>
                                        <td>{userInfo.date}</td>
                                        <td>{userInfo.event}</td>
                                        <td><Button style={{ padding: '0.1rem 0.3rem' }} variant="danger" size="sm" onClick={() => handleDelete(`${userInfo._id}`)}><img style={{ height: '30px' }} src={removeIcon} alt="" /></Button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>

                </Col>
            </Row>
        </Container>
    );
};

export default RegisterList;