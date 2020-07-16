import React from 'react';

import {
  Row, Col
} from 'reactstrap';

import Widget from '../../../components/Widget';
import ApexChart from 'react-apexcharts';

import s from './Charts.module.scss';
import {chartData, liveChart, liveChartInterval} from './mock';
import Sparklines from '../../../components/Sparklines';

import ReactEchartsCore from 'echarts-for-react/lib/core';

import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/themeRiver';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';

exporting(Highcharts);
exportData(Highcharts);


class Charts extends React.Component {

  state = {
    cd: chartData,
    ld: liveChart,
    initEchartsOptions: {
      renderer: 'canvas'
    },
    sparklineData: {
      series: [{data: [1,7,3,5,7,8]}],
      options1: {
        colors: ['#ffc247'],
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        }
      },
      options2: {
        colors: ['#ffc0d9'],
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        }
      }
    }
  }

  componentWillUnmount() {
    clearInterval(liveChartInterval);
  }

  render() {
    const { cd, ld, initEchartsOptions, sparklineData } = this.state
    return (
      <div className={s.root}>
        <h1 className="page-title">Firmware <span className="fw-semi-bold">Earnings</span></h1>
        <div>
        <Col lg={7} xs={12}>
          <Widget
            title={<h5>Income <span className='fw-semi-bold'>Net</span></h5>}
            close collapse
          >
            <ApexChart
              className="sparkline-chart"
              height={350}
              series={cd.apex.column.series}
              options={cd.apex.column.options}
              type={"bar"}
            />
          </Widget>
        </Col>
        <Col lg={5} xs={12}>
          <Widget
            title={<h5><span className='fw-semi-bold'></span>Income and Expenditure</h5>}
            close collapse>
            <ReactEchartsCore
              echarts={echarts}
              option={cd.echarts.line}
              opts={initEchartsOptions}
              style={{height: "365px"}}
            />
          </Widget>
        </Col>
        </div>
      </div>
    );
  }

}

export default Charts;
