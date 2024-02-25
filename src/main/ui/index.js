import React from 'react';
import { createRoot } from 'react-dom/client';
import MyForm from './form';
import { Container, Row, Col } from 'react-bootstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: '$ Amount'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Months'
      }
    }]
  }
};


function App() {
  const [total, setTotal] = React.useState(0);
  const [totalByMonth, setTotalByMonth] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  
  return (
    <Container>
      <h1>Compound Interest Calculator</h1>
      <Row>
        <Col>
          <MyForm callback={(newTotal, newTotalByMonth) => {
            setTotal(newTotal);
            setTotalByMonth(newTotalByMonth);
          }}/>
        </Col>
      </Row>
      <Row style={{ paddingTop: '30px' }}>
        <Col><h3>Total ${total.toFixed(2)}</h3></Col>
      </Row>
      <Row>
        <Col>
          <Line
            data={{
              labels: Array.from({ length: 12 }, (_, i) => i + 1),
              datasets: [
                {
                  label: 'Total',
                  data: totalByMonth,
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1
                }
              ]
            }}
            options={options}
          />
        </Col>
      </Row>
    </Container>
  );
}

// Create a root and render the App component into the div with the id of 'root'
createRoot(document.getElementById('root')).render(<App />);