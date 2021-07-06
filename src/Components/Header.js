import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';

export class Header extends Component {
    render() {
        return (
            <div>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/favorite"> favorite</Nav.Link>
                    </Nav.Item>
                   
                </Nav>
            </div>
        )
    }
}

export default Header
