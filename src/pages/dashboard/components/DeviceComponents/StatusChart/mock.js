import Highcharts from 'highcharts';
import config from './config';
const colors = config.chartColors;

let columnColors = [colors.blue, colors.green, colors.orange, colors.red, colors.default, colors.gray, colors.teal, colors.pink];
let lineColors = [colors.blue, colors.green, colors.orange];

export const chartData = {
  echarts: {
    donut: {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        show: false
      },
      color: [colors.blue, colors.green, colors.orange, colors.red, colors.purple],
      series: [
        {
          name: 'Device Status',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {value: 1, name: 'Active'},
            {value: 0, name: 'Inactive'},
            {value: 2, name: 'Unknown'},
          ]
        }
      ]
    },
  }
}