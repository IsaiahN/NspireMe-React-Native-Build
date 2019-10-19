import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Menu() {
  return  (
    <Container fluid>
      <Row>
        <Col xs={3} md={8}><img src="/logo-svg.png"/></Col>
        <Col xs={9} md={4}>
          <Nav defaultActiveKey="/home" as="ul" className="justify-content-end">
            <Nav.Item as="li">
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="mailto:nspiremellc@gmail.com">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Button href="#email_signup" variant="outline-info">Get Started</Button>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}
export default Menu;
