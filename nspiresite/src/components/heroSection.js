import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

function HeroSection() {
  return (
  <div className="HeroSection">
    <Jumbotron fluid>
      <Container>
        <Menu />
        <Row id="centered_hero">
          <Col xs={12} md={7}>
            <h1>The Best Goals Are The Ones That You Actually Acheive.</h1>
            <h2>NspireMe Helps You Along The Way.</h2>
          </Col>
        </Row>

      </Container>
    </Jumbotron>
  </div>
  )
}
export default HeroSection;
