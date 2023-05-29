import { Card, Col, Container, Row, Stack } from "react-bootstrap";


export function Home() {
  return (
    <Container>
      <Row md={2} xs={1} lg={3}>
        <Col gap={3}>
          <Card style={{marginTop: "140px"}}>
            <Card.Img variant="top" src="/imgs/dog1.jpg" width={350} height={350}/>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="/imgs/dog5.jpg" width={400} height={700}/>
          </Card>
        </Col>

        <Col>
          <Card style={{marginTop: "140px"}}>
            <Card.Img variant="top" src="/imgs/dog7.jpg" width={350} height={350}/>
          </Card>
        </Col>

        <Col>
          <Card style={{marginTop: "-170px"}}>
             <Card.Img variant="top" src="/imgs/dog6.jpg" width={350} height={500}/>
          </Card>
        </Col>

        <Col>
          <Card style={{marginTop: "40px"}}>
             <Card.Img variant="top" src="/imgs/dog8.jpg" width={400} height={600}/>
          </Card>
        </Col>

        <Col>
          <Card style={{marginTop: "-170px"}}>
            <Card.Img variant="top" src="/imgs/dog9.jpg" width={400} height={600}/>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
