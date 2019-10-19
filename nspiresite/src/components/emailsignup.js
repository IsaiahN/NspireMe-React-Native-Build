import React from 'react';
import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

function EmailSignup() {
  return (
    <Jumbotron fluid className="email_signup" id="email_signup">
    <Container >
    <Row>
    <Col xs={12} md={12}>
    <h3><strong>Sign Up To Get Your Personalized Goal Plan</strong></h3><br/>
    <p>Join The Accountability Email list and get help staying on track to reach your goals.
    <br/>Gain well-being and balance in important areas of your life.</p><br/>


      <Button variant="info" href="https://airtable.com/shrNfK1PbuWpmuXZG"><strong>Subscribe Now</strong></Button>
    </Col>
    </Row>

  </Container>
    </Jumbotron>

  )
}
export default EmailSignup;
