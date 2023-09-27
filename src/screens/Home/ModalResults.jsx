import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Plot from 'react-plotly.js';
import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';

import calculateScore from './calculateScore';


const ModalResults = ({ keyTab, form }) => {
  const [chart, setChart] = useState({});

  useEffect(() => {
    if (keyTab === 'res') {
      const res = calculateScore(form);
      console.log("res", res);
      setChart(res);
    }
  }, [keyTab]);

  return (
    <Container fluid>
      <Row className="p-2">
        <Col xs={12} md={6}>
          <Plot
            data={[
              {
                type: "indicator",
                value: chart?.score,
                gauge: {
                  axis: {
                    visible: true,
                    range: [450, 973],
                  },
                  bar: { color: "gray" },
                  steps: [
                    { range: [450, 600], color: "red" },
                    { range: [601, 700], color: "yellow" },
                    { range: [701, 800], color: "#4DE383" },
                    { range: [801, 973], color: "green" },
                  ],
                },
              }
            ]}
            layout={{
              margin: { t: 50, b: 50, l: 50, r: 50 },
              width:650,
              template: {
                data: {
                  indicator: [
                    {
                      title: { text: "Score" },
                      mode: "number+delta+gauge",
                    }
                  ]
                }
              },
            }}
          />
        </Col>
        <Col xs={12} md={3}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header><b>Percentil</b></Card.Header>
            <Card.Body>
              <Card.Text>
                El cliente se encuentra sobre el {chart?.percentil}% de la población
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header><b>Recomendaciones</b></Card.Header>
            <Card.Body>
              <Card.Text>
                {chart?.recomendacion}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ModalResults;