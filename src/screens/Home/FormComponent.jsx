import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';

import { DICT_FIELDS } from './helper';
import Field from '../../componentes/Field/Field';


const FormComponent = ({ disabledCalculate, form, setForm, handleSubmit, clearForm }) => (
  <Container fluid>
      <Row className="p-3">
      {
          DICT_FIELDS.sort(item => item?.lectura).map(item => (
          <Col key={item?.field} md={6} className="p-2">
              <Field
              handleChange={e => setForm({ ...form, [item?.field]: e.target.value })}
              item={item}
              value={!_.isNil(form[item?.field]) ? form[item?.field] : ''}
              />
          </Col>
          ))
      }
      </Row>
      <Row>
      <Col xs={12} style={{ textAlign: 'center' }}>
          {
          disabledCalculate
              ? (
              <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Por favor diligencie todos los campos</Tooltip>}
              >
                  <Button
                  variant="primary"
                  >
                  Calcular
                  </Button>
              </OverlayTrigger>
              )
              : (
              <Button
                  variant="primary"
                  onClick={handleSubmit}
              >
                  Calcular
              </Button>
              )
          }
          &nbsp;
          <Button
          variant="danger"
          onClick={clearForm}
          >
          Limpiar
          </Button>
      </Col>
      </Row>
  </Container>
);

export default FormComponent;
