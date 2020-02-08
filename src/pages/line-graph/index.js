import React, { useState } from 'react';
import { Container } from './styles';
import GraphForm from '../../containers/line-graph/GraphForm';
import LineChart from '../../containers/line-graph/LineChart';

const LineGraphPage = () => {
  const [formData, setFormData] = useState(null);
  return (
    <Container>
      <GraphForm onApply={data => setFormData(data)} />
      {formData && (
        <LineChart
          xAxis={formData.axis.x}
          yAxis={formData.axis.y}
          data={formData.data}
        />
      )}
    </Container>
  );
};

export default LineGraphPage;
