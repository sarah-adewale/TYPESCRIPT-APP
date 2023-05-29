import { Card, Col, Container, Row } from "react-bootstrap";


export function About() {
  return (
    <Container>
      <Row xs={1} md={2} lg={2}>
        <Col style={{marginTop: "140px"}}>
          <h1>Pet owners were happier and healthier than nonowners</h1>
          <p style={{marginTop: "80px"}}>Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor. Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor.</p>
          <p style={{marginTop: "40px"}}>Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor. Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor.</p>
        </Col>
         <Col>
         <Card>
            <Card.Img variant="top" src="/imgs/dog11.jpg" width={100} height={700}/>
         </Card>
        </Col>
      </Row>
    </Container>
  )
}
