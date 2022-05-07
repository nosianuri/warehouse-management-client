import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
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
                <Navbar.Brand href="/home">Warehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                        {
                            user ? 
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/myitem">My Item</NavDropdown.Item>
          <NavDropdown.Item href="/manageinfo">Manage</NavDropdown.Item>
          <NavDropdown.Item href="/additem">Add Item</NavDropdown.Item>                    
        </NavDropdown>                          
                            :
                            <Nav.Link href="/about">About</Nav.Link>}                            
                        <Nav.Link href="/inventory">Inventory</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        {
                            user ?
                            <button onClick={handleSignOut} className="sign-out">SignOut</button>
                            :
                            <Nav.Link href="/login">Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;