import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


// const style = {
//   margin: 0,
//   position: absolute,
//   top: '50%',
//   -ms-transform: translateY(-50%);
//   transform: translateY(-50%);
// };


const NotFound = (props) => {
  return (
    <Container fluid>
      <Row style={{ textAlign: 'center' }}>
        <Col xs={12}>
          <h2>
            Página no encontrada
            <Image
              src="notFound.jpg"
              roundedCircle
              rounded
              style={{
                width: '300px',
                height: '300px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </h2>
        </Col>
      </Row>

      <Row>
        <Col xs={12} style={{ textAlign: 'center' }}>
          <Button variant="success" href="/">
            Ir al inicio
          </Button>
        </Col>
      </Row>
    </Container >
  );
}

export default NotFound;