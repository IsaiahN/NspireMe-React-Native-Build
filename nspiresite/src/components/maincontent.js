import React from 'react';
import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Features from './features.js'
import EmailSignup from './emailsignup.js'

function MainContent() {
  return (
    <main>
    <Container className="picture_section">
      <Row>
        <Col xs={{span:12, order:1}} md={4}>
          <Image src="/journey.jpg" rounded />
        </Col>
          <Col xs={{span:12, order:2}} md={{span:8, offset:0}}>

            <h3>Define, Track, & Accomplish Any Goal</h3>
            <p>
          <strong>Change What Is Possible.</strong><br/>
              NspireMe is the only social accountability app that inspires
              & prioritizes goals for college students by providing organizational tools
              leaving GSU students feeling empowered and accomplished.
            </p>
          </Col>
      </Row>


  <Row>
      <Col xs={{span:12, order:2}} md={{span:8, order:1}}>
        <h3>Accountability & Connection</h3>
        <p>
      <strong>It's comforting to know that you're not alone.</strong><br/>
    The steps you make towards acheiving your goals may seem small but add up over time.
    When you encounter obstacles, connecting with people have your back can keep you motivated and make all the difference.
  Nspire makes it simple to find goal groups that support and celebrate your growth.
        </p>
      </Col>
      <Col xs={{span:12, order:1}} md={{span:4, offset:0, order:2}}>
        <Image src="/community.jpg" rounded />
      </Col>
  </Row>


    <Row>
      <Col xs={{span:12, order:1}} md={4}>
        <Image src="/nspire_autumn.jpg" rounded />
      </Col>
        <Col xs={{span:12, order:2}} md={{span:8, offset:0}}>
        <h3>Purpose Driven Tools To Help You Succeed</h3>
        <p>
      <strong>Progress Redefined.</strong><br/>
        Though change takes time, it can create new possibilities for your life.
  Goals may be left unreached when we’re so strapped for time. Balancing the needs of school, work, and relationships can make easy to ignore your own desires.
   We believe that your goals matter, and that you can become the best version of yourself.

        </p>
        </Col>
    </Row>
</Container>

<Features/>
<EmailSignup />
    </main>
  )
}
export default MainContent;
