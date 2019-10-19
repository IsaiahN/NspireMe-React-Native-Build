import React from 'react';
import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function Features() {
  return (

    <Container className="avatar_cases">
    <Row>
    <Col xs={12} md={12} className="justify-content-center">
    <h4>How Nspire Can Help You</h4>
    </Col>
    </Row>
    <Row>
    <Col xs={6} md={3} className="user_case">
      <Image src="/avatar1.png" rounded />
      <h6><strong>Motivation for the Finish Line</strong></h6>
      <p>Ava uses nspire reminders and affirmations to support her running goals.</p>
    </Col>

      <Col xs={6} md={3} className="user_case">
        <Image src="/avatar4.png" rounded />
        <h6><strong>Financial Progress</strong></h6>
        <p>Kamala uses the progress charts in the nspire dashboard to check on her saving goals.</p>
      </Col>

      <Col xs={6} md={3} className="user_case">
        <Image src="/avatar2.png" rounded />
        <h6><strong>Creative Productivity</strong></h6>
        <p>Liam enhances his indie photography skills with his personal goal board.</p>
      </Col>

      <Col xs={6} md={3} className="user_case">
        <Image src="/avatar3.png" rounded />
        <h6><strong>Raising the Bar</strong></h6>
        <p>Emma found help and resources from the community to stay on top of her bar exam.</p>
      </Col>

    </Row>
  </Container>
  )
}
export default Features;
