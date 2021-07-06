import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

export class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                               auther Salam Mustafa <a href="#login">&copy; ASAC 2021 </a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Footer
