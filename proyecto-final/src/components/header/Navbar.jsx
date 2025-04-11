import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { CartWidget } from '../cargarImports';

const NavSite = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Ama tu piel</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#facial">Facial</Nav.Link>
                        <Nav.Link href="#corporal">Corporal</Nav.Link>
                        <Nav.Link href="#marcas">Marcas</Nav.Link>
                        <Nav.Link href="#tips">Tips</Nav.Link>
                    </Nav>
                </Container>
                <CartWidget/>
            </Navbar>
        </>
    );
};

export default NavSite;