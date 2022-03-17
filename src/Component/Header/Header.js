import React from 'react';
import { Link } from 'react-router-dom';
import {  Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Header.css';

    

const Header = () => {
    const {logOut, user} = useFirebase();
    
    return (

        <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand>
                    <Nav.Link> 
                        <NavLink exact="true" to="/">
                        Food-Order
                              </NavLink>
                        </Nav.Link>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        
                        <NavLink className="custom" activeClassName="activeStyle" to="/home">
                                  Home
                        </NavLink>
                        

                        
                        <NavLink className="custom" activeClassName="activeStyle" to="/foodorder">
                                  Food Order
                        </NavLink>
                        


                        {user.email && 
                        <div>
                            <NavLink className="custom" activeClassName="activeStyle" to="/myorder">
                                  My Orders
                            </NavLink>
                            <NavLink className="custom" activeClassName="activeStyle" to="/allorder">
                                  All Orders
                            </NavLink>
                            <NavLink className="custom" activeClassName="activeStyle" to="/addnewfood">
                                  Add New Food
                            </NavLink>
                        </div>
                           }
                        
                        
                        {user.email && 
                        <Nav.Link>                     

                            <div>
                                
                                <Row className="d-flex align-items-center">
                                <Col sm={2}>
                                    <Image className="header-pic-size" src={user?.photoURL} roundedCircle />
                                </Col>
                                <Col sm={9} className="header-pic ms-3" style={{ color: 'green', fontWeight: 'bold' }}> {user?.displayName}
                                </Col>
                                </Row>
                            </div>
                        </Nav.Link> }
                        {
                            user.email ?
                        <Nav.Link>
                        { <NavLink className="custom-logout d-flex align-items-center" activeclassname="activeStyle" to="/login" onClick={logOut}>log out <i className="fas fa-sign-out-alt ms-2"></i>
                        </NavLink>}
                        {/* <NavLink className="custom" activeClassName="activeStyle" to="/myOrders">
                                  My Orders
                        </NavLink>
                        <NavLink className="custom" activeClassName="activeStyle" to="/manageAllOrders">
                                  All Orders
                        </NavLink>
                        <NavLink className="custom" activeClassName="activeStyle" to="/addNewService">
                                  Add New Service
                        </NavLink> } */}
                        

                        </Nav.Link>
                        
                        :
                        <Nav.Link>
                        <NavLink className="custom d-flex align-items-center " activeclassname="activeStyle" to="/login">
                        <i className="fas fa-user-plus me-2"></i> Login 
                        </NavLink>
                        </Nav.Link>}

                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
        );
    };
    export default Header;