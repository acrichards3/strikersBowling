import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" expand="md">
        <Container fluid className="navContain">
          <Navbar.Brand>
            <a href="/">
              <img
                height={100}
                alt="logo"
                src="https://static.wixstatic.com/media/959dbf_253c1b669ffa43cbb60afc8ff3c50d31~mv2.png/v1/crop/x_0,y_0,w_1275,h_817/fill/w_275,h_178,al_c,usm_0.66_1.00_0.01,enc_auto/959dbf_253c1b669ffa43cbb60afc8ff3c50d31~mv2.png"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/pro-shop">Pro Shop</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/reviews">Reviews</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="danger">Login</Button>
        </Container>
      </Navbar>
    </>
  );
}
