import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { parse } from 'papaparse';
import moment from 'moment';
import Text from '../../../components/Text';
import TextArea from '../../../components/TextArea';
import Spacer from '../../../components/Spacer';
import Button from '../../../components/Button';
import { FormContainer, Col } from './styles';

// Generate onApply callback object
const generateApplyCallback = (xAxis, yAxis, data) => {
  return {
    axis: {
      x: xAxis,
      y: yAxis
    },
    data: data.map(item => {
      const newItem = {};
      newItem[xAxis] = item[xAxis];
      newItem[yAxis] = item[yAxis];
      if (xAxis === 'date')
        newItem[xAxis] = moment(newItem[xAxis])
          .utc(true)
          .valueOf();
      if (yAxis === 'date')
        newItem[yAxis] = moment(newItem[yAxis])
          .utc(true)
          .valueOf();
      console.log(newItem[xAxis]);
      return newItem;
    })
  };
};

const GraphForm = ({ onApply }) => {
  const [csvString, changeCsvString] = useState('');
  const [csvProcessStatus, changeCsvProcessStatus] = useState(null);
  const [csvData, changeCsvData] = useState([]);
  const [csvHeaders, changeCsvHeaders] = useState([]);
  const [chartXAxis, changeXChartAxis] = useState(null);
  const [chartYAxis, changeYChartAxis] = useState(null);

  // Handle Processing CSV String
  const processCsv = () => {
    // Set Csv Processing Status
    changeCsvProcessStatus('IN_PROGRESS');
    // Processing Csv String
    const newCsvData = [];
    parse(csvString, {
      worker: true,
      header: true,
      dynamicTyping: true,
      step(row, operations) {
        // Check for errors
        if (row.errors.length > 0) {
          // Stop Processing
          operations.abort();
          // Set Csv Processing Status
          changeCsvProcessStatus('ERROR');
          return;
        }
        // Add row to temporary csv data variable
        newCsvData.push(row.data);
      },
      complete() {
        try {
          // update csvData state with the final values
          changeCsvData(newCsvData);
          // update csvHeaders state with header's values
          changeCsvHeaders(Object.keys(newCsvData[0]));
          // reset chart axis values to their default
          changeXChartAxis(null);
          changeYChartAxis(null);
          // reset onApply callback
          onApply(null);
          // Set Csv Processing Status
          changeCsvProcessStatus('DONE');
        } catch (e) {
          console.error(e);
          changeCsvProcessStatus('ERROR');
        }
      }
    });
  };

  return (
    <FormContainer>
      <Col>
        <Text type="subtitle">1. Add CSV Content</Text>
        <Spacer height="1rem" />
        <TextArea
          placeholder="Paste CSV string..."
          onChange={e => changeCsvString(e.target.value)}
        />
        <Spacer height="1rem" />
        {(() => {
          if (csvProcessStatus === 'IN_PROGRESS')
            return <Text color="grey">Processing...</Text>;
          if (csvProcessStatus === 'ERROR')
            return <Text color="error">Error processing CSV string.</Text>;
          if (csvProcessStatus === 'DONE')
            return <Text>Processed Successfully!</Text>;
          return null;
        })()}

        <Spacer height="2rem" />
        <Button
          color="dark"
          style={{ alignSelf: 'flex-end' }}
          disabled={!csvString}
          onClick={() => {
            processCsv();
          }}
        >
          Process
        </Button>
      </Col>
      <Col>
        <Text type="subtitle">2. Choose Comparison Data</Text>
        <Spacer height="1rem" />
        {csvHeaders.length > 0 ? (
          <>
            {/* X AXIS Dropdown */}
            <Text>X AXIS</Text>
            <Spacer height="0.5rem" />
            <select
              value={chartXAxis || 'null'}
              onChange={e => changeXChartAxis(e.target.value || null)}
              onBlur={e => changeXChartAxis(e.target.value || null)}
            >
              <option value="null" disabled>
                Choose X AXIS
              </option>
              {csvHeaders.map((header, key) => (
                <option key={key.toString()} value={header}>
                  {header}
                </option>
              ))}
            </select>
            <Spacer height="1rem" />
            {/* Y AXIS Dropdown */}
            <Text>Y AXIS</Text>
            <Spacer height="0.5rem" />
            <select
              value={chartYAxis || 'null'}
              onChange={e => changeYChartAxis(e.target.value || null)}
              onBlur={e => changeYChartAxis(e.target.value || null)}
            >
              <option value="null" disabled>
                Choose Y AXIS
              </option>
              {csvHeaders.map((header, key) => (
                <option key={key.toString()} value={header}>
                  {header}
                </option>
              ))}
            </select>
            <Spacer height="2rem" />
            <Button
              color="dark"
              style={{ alignSelf: 'flex-end' }}
              disabled={!chartXAxis || !chartYAxis}
              onClick={() => {
                onApply(generateApplyCallback(chartXAxis, chartYAxis, csvData));
              }}
            >
              Apply
            </Button>
          </>
        ) : (
          <Text color="grey">
            Please paste CSV string in the text box and click the Process
            button!
          </Text>
        )}
      </Col>
    </FormContainer>
  );
};

GraphForm.propTypes = {
  onApply: PropTypes.func
};

GraphForm.defaultProps = {
  onApply: () => {}
};

export default GraphForm;
