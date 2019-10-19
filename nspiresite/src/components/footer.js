import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './menu.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={4} md={5}>
            <span>&copy; {(new Date().getFullYear())} NspireMe</span>
          </Col>
          <Col xs={2} md={2}>
          <a href="https://www.instagram.com/nspireme.io"><i class="fab fa-instagram"/></a>
          </Col>
          <Col xs={6} md={5}>
          <Nav as="ul" className="justify-content-end">
            <Nav.Item as="li">
                <Nav.Link eventKey="#">Privacy</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="#">Terms</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="mailto:nspiremellc@gmail.com">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
          </Col>
          </Row>
      </Container>
    </footer>
  )

}
export default Footer;
