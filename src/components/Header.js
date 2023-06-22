import Navbar from "react-bootstrap/Navbar"
import { Container } from "react-bootstrap"

export function Header( props ) {
    return(
        <Navbar>
            <Container>
                <Navbar.Brand>
                    Hello Website
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}