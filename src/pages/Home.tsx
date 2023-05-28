import { Card, Container, Stack } from "react-bootstrap";


export function Home() {
  return (
    <Container>
      <Stack direction="horizontal" gap={3} className="d-flex align-items-center justify-center">
        <Card className="d-flex column" style={{border: "none"}}>
          <Stack direction="vertical" gap={3}>
            <Card.Img variant="top" src="/imgs/dog1.jpg" width={350} height={350}/>
            <Card.Img variant="top" src="/imgs/dog6.jpg" width={350} height={500}/>
          </Stack>
        </Card>

        <Card className="d-flex column" style={{border: "none"}}>
          <Stack direction="vertical" gap={3}>
            <Card.Img variant="top" src="/imgs/dog5.jpg" width={400} height={700}/>
            <Card.Img variant="top" src="/imgs/dog8.jpg" width={400} height={600}/>
          </Stack>
        </Card>

        <Card className="d-flex column" style={{border: "none"}}>
          <Stack direction="vertical" gap={3}>
            <Card.Img variant="top" src="/imgs/dog7.jpg" width={350} height={350}/>
            <Card.Img variant="top" src="/imgs/dog9.jpg" width={400} height={600}/>
          </Stack>
        </Card>
      </Stack>
    </Container>
  )
}
