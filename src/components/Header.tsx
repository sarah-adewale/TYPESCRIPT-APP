import { Card, Container } from "react-bootstrap";


export function Header(){
    return (
        <Container>
            <Card style={{border: "none"}}>
                <Card.Header style={{ border: "none", backgroundColor: "#fff", height: "300px"}}>
                    <div style={{marginLeft: "70px", marginTop: "30px" }}>
                        <h1 style={{fontSize: "120px"}}>Your Dog</h1>
                        <p style={{fontSize: "30px"}} >IN THE FOCUS!</p>
                    </div>
                    
                </Card.Header>
            </Card>
        </Container>
            
    )
}