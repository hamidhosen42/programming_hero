import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          sticky="top"
          bg="primary"
          variant="dark"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img height={30} src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="home#services">Services</Nav.Link>
                <Nav.Link href="home#experts">Experts</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="map">
                  Map
                </Nav.Link>
                <Nav.Link as={Link} to="about">
                  About
                </Nav.Link>

                {user && (
                  <>
                    <Nav.Link as={Link} to="addservice">
                      AddService
                    </Nav.Link>
                    <Nav.Link as={Link} to="Manage">
                      Manage
                    </Nav.Link>
                  </>
                )}

                {user ? (
                  <button
                    className="text-start btn btn-link text-white text-decoration-none"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </button>
                ) : (
                  <Nav.Link as={Link} to="login">
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;