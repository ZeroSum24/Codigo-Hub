import React from 'react';
import {

  Progress,
} from 'reactstrap';


import Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';

import AnimateNumber from 'react-animated-number';


class StatusLines extends React.Component {


  render() {
    return (
      <div>
        <div className="row progress-stats">
          <div className="col-md-9 col-12">
            <p className="description deemphasize mb-xs text-white">Active</p>
            <Progress color="success" value="0" className="bg-custom-dark progress-xs"/>
          </div>
          <div className="col-md-3 col-12 text-center">
                          <span className="status rounded rounded-lg bg-default text-light">
                            <small><AnimateNumber value={0}/>%</small>
                          </span>
          </div>
        </div>
        <div className="row progress-stats">
          <div className="col-md-9 col-12">
            <p className="description deemphasize mb-xs text-white">Unknown</p>
            <Progress color="warning" value="0" className="bg-custom-dark progress-xs"/>
          </div>
          <div className="col-md-3 col-12 text-center">
                          <span className="status rounded rounded-lg bg-default text-light">
                            <small><AnimateNumber value={0}/>%</small>
                          </span>
          </div>
        </div>
        <div className="row progress-stats">
          <div className="col-md-9 col-12">
            <p className="description deemphasize mb-xs text-white">Inactive</p>
            <Progress color="danger" value="0" className="bg-custom-dark progress-xs"/>
          </div>
          <div className="col-md-3 col-12 text-center">
                          <span className="status rounded rounded-lg bg-default text-light">
                            <small><AnimateNumber value={0}/>%</small>
                          </span>
          </div>
        </div>

      </div>
    );
  }

}


export default StatusLines;
