import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <Navbar className='colored' collapseOnSelect expand="lg" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Warehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        
                                                    
                        <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
                        
                        {
                            user && <>
                            <Nav.Link as={Link} to="manageitem">Manage</Nav.Link>
                            <Nav.Link as={Link} to="myitem">My Item</Nav.Link>
                            <Nav.Link as={Link} to="additem">ADD</Nav.Link>
                            
                            </>
                        }
                        <Nav.Link as={Link} to="/orders">Order</Nav.Link>
                        {
                            user ?
                            <button onClick={handleSignOut} className="sign-out">SignOut</button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;