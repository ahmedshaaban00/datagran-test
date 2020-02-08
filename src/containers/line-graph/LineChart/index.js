import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactHighCharts from 'react-highcharts';
import colors from '../../../config/colors';
import { Container } from './styles';

const LineChart = ({ xAxis, yAxis, data }) => {
  const [chartConfig, setChartConfig] = useState(null);

  useEffect(() => {
    // When props changes, update chart's config state
    setChartConfig({
      title: {
        text: 'Chart'
      },

      subtitle: {
        text: `Line Chart comparing between ${xAxis} & ${yAxis}`
      },

      data: {
        dateFormat: 'YYYY/mm/dd'
      },

      xAxis: {
        title: {
          text: xAxis
        },
        type: xAxis === 'date' ? 'datetime' : 'linear',
        dateTimeLabelFormats: {
          day: '%Y-%m-%d'
        }
      },

      yAxis: {
        title: {
          text: yAxis
        },
        type: yAxis === 'date' ? 'datetime' : 'linear',
        dateTimeLabelFormats: {
          day: '%Y-%m-%d'
        }
      },

      legend: {
        enabled: false
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          }
        }
      },

      series: [
        {
          type: 'line',
          color: colors.primary,
          name: `${xAxis} to ${yAxis}`,
          data: data.map(item => {
            const x = parseFloat(item[xAxis]);
            const y = parseFloat(item[yAxis]);
            return [x, y];
          })
        }
      ],

      credits: {
        enabled: false
      }
    });
  }, [xAxis, yAxis, data]);

  // Check for props existance
  if (!xAxis || !yAxis || !data || data.length === 0) return null;

  return (
    <Container>
      {chartConfig && <ReactHighCharts config={chartConfig} />}
    </Container>
  );
};

LineChart.propTypes = {
  xAxis: PropTypes.string.isRequired,
  yAxis: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default LineChart;
