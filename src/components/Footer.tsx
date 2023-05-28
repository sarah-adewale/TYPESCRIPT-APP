import { Card } from "react-bootstrap";


export function Footer(){
    return (
        <Card style={{borderRadius: "0"}}>
            <Card.Footer className="text-muted bg-white" style={{height: "50px", marginLeft: "60px", marginTop: "12px", border: "none"}}>© Sarah Adewale 🖤. All rights reserved.</Card.Footer>
        </Card>
        
    )
}