import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Overlay from 'react-bootstrap/Overlay';
import React, { useState, useRef } from 'react';
import Tooltip from 'react-bootstrap/Tooltip';

const Toolbar = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <Navbar bg="primary" variant="dark" style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>
      <Navbar.Brand href="/"> <img src="/icon.jpg" style={{ width: '50px', height: '50px' }} /> Puntaje crediticio</Navbar.Brand>
      <Nav className="mr-auto">
        {/* <Nav.Link href="/">Home</Nav.Link> */}
      </Nav>
      <Form inline>
      <Button variant="outline-light" href='/Informe.html' target="_blank" rel="noreferrer">Reporte</Button>
        &nbsp;
        <Button variant="outline-light" href='https://github.com/juanfeuv/puntaje_crediticio' target="_blank" rel="noreferrer">Repositorio</Button>
        &nbsp;
        <Button variant="outline-light" href='https://www.youtube.com/watch?v=Y1YzzD0DppE' target="_blank" rel="noreferrer">Video</Button>
        &nbsp;
        <Button variant="outline-light" ref={target} onClick={() => setShow(!show)}>Integrantes</Button>
        <Overlay target={target.current} show={show} placement="bottom" >
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              <ul>
                <li>Cristian Jaramillo Herrera</li>
                <li>Danilo Giraldo Lopez</li>
                <li>Juan Felipe Usuga Villegas</li>
                <li>Maria Camila Durango Muñoz</li>
              </ul>
            </Tooltip>
          )}
        </Overlay>
      </Form>
    </Navbar>
  );
}

export default Toolbar;