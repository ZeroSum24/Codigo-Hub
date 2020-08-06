import React from 'react';

import {chartData} from './mock';

import ReactEchartsCore from 'echarts-for-react/lib/core';

import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/themeRiver';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

import Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import Widget from "../../../../../components/Widget";

exporting(Highcharts);
exportData(Highcharts);


class DeviceStatusChart extends React.Component {

  state = {
    cd: chartData,
    initEchartsOptions: {
      renderer: 'canvas'
    },
  };

  render() {
    const { cd, initEchartsOptions} = this.state;
    return (
      <div>
        <Widget
          title={
            <div className="col-md-9 col-12">
              <h5 className="name fw-semi-bold">Device Status</h5>
            </div>}
          style={{width: "300px", marginLeft: '20px'}}>
          <ReactEchartsCore
            echarts={echarts}
            option={cd.echarts.donut}
            opts={initEchartsOptions}
            style={{height: "220px"}}
          />
        </Widget>
      </div>
    );
  }
}

export default DeviceStatusChart;