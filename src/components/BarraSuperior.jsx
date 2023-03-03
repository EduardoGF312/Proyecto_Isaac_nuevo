import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';


const BarraSuperior = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand as={ Link } to=''>Practica</Navbar.Brand> {/* De esta forma se hacen links*/}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to=''>Inicio</Nav.Link>
                            <Nav.Link as={Link} to='nombre'>Nombre</Nav.Link>
                            <Nav.Link as={Link} to='UTD'>UTD</Nav.Link>
                            <Nav.Link as={Link} to='logo'>Logo</Nav.Link>
                            <Nav.Link as={Link} to='carrera'>Carrera</Nav.Link>
                            <Nav.Link as={Link} to='foto'>Foto</Nav.Link>
                            <Nav.Link as={Link} to='alumnos'>Alumno</Nav.Link>
                            <Nav.Link as={Link} to='galeria'>Galeria</Nav.Link>
                            <Nav.Link as={Link} to='mapa'>Mapa</Nav.Link>
                            <Nav.Link as={Link} to='mockup'>Mockup</Nav.Link>
                            <Nav.Link as={Link} to='login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default BarraSuperior;
