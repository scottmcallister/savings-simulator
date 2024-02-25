import React from 'react';
import { createRoot } from 'react-dom/client';
import { calculateCompoundInterestWithContributions } from './utils';
import MyForm from './form';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [total, setTotal] = React.useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTotal = calculateCompoundInterestWithContributions(principal, rate, 12, years, monthlyContribution);
    setTotal(newTotal);
  };
  return (
    <Container>
      <h1>Compound Interest Calculator</h1>
      <Row>
        <Col>
          <MyForm handleSubmit={handleSubmit}/>
        </Col>
      </Row>
      <Row style={{ paddingTop: '30px' }}>
        <Col><h3>Total ${total}</h3></Col>
      </Row>
    </Container>
  );
}

// Create a root and render the App component into the div with the id of 'root'
createRoot(document.getElementById('root')).render(<App />);