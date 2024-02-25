import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


function MyForm({ handleSubmit }) {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0.08);
  const [years, setYears] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  return (
    <>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Principal</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              value={principal}
              onChange={e => setPrincipal(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Monthly Contribution</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              value={monthlyContribution}
              onChange={e => setMonthlyContribution(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              value={rate}
              onChange={e => setRate(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Years</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              value={years}
              onChange={e => setYears(e.target.value)} />
          </Form.Group>
          <Button type="submit" variant='outline-primary'>Submit</Button>
      </Form></>
  );
}

export default MyForm;