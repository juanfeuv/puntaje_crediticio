import _ from 'lodash';

import React, { useMemo, useState } from 'react';

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import { DEFAULT_FORM, isDisabledCalculate } from './helper';

import Toolbar from '../../componentes/Toolbar/Toolbar';
import ModalResults from './ModalResults';
import FormComponent from './FormComponent';

const Home = (props) => {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [key, setKey] = useState('form');

  const handleSubmit = () => {
    setKey('res');
  };

  const clearForm = () => {
    setForm(DEFAULT_FORM);
  };

  const disabledCalculate = useMemo(() => isDisabledCalculate(form), [form]);

  return (
    <div>
      <Toolbar history={props.history} />
      <div style={{ position: 'absolute', top: '10%' }}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="form" title="Cuestionario">
            <FormComponent
              clearForm={clearForm}
              disabledCalculate={disabledCalculate}
              form={form}
              handleSubmit={handleSubmit}
              setForm={setForm}
            />
          </Tab>
          <Tab eventKey="res" title="Resultados">
            <ModalResults keyTab={key} form={form} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Home;
