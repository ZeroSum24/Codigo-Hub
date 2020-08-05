import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

import Widget from '../../../components/Widget';
import s from '../Dashboard.module.scss';
import Map from './DeviceComponents/Map/DeviceMap';
import DeviceStatusChart from "./DeviceComponents/StatusChart/DeviceStatusChart";
import StatusLines from "./DeviceComponents/StatusLines/StatusLines";


class DeviceRow extends React.Component {

  render() {
    return (
        <Row>
          <Col lg={7}>
            <Widget className="bg-transparent">
              <Map />
            </Widget>
          </Col>
          <Col lg={1} />

          <Col lg={4} style={{paddingLeft: "5px"}}>
            <Widget
              className="bg-transparent"
              title={<h5> Device
                <span className="fw-semi-bold">&nbsp;Statistics</span></h5>} settings refresh close
            >
              <p>Map Status: <strong>Live</strong></p>
              <p>
                <span className="circle bg-default text-white"><i className="glyphicon glyphicon-map-marker" style={{marginBottom:"5px"}}/></span> &nbsp;
                1 Country, 1 City
              </p>
              <h5 className="name fw-semi-bold" style={{marginTop: '18px'}}>Device Status</h5>
              <div style={{paddingBottom: '13px', marginTop: '-4px' }}>
                <small style={{color: '#797A8A', fontSize: '9pt'}}>Amount of devices which are active, unknown or inactive on the map.</small>
              </div>
              <StatusLines/>
              <h6 className="fw-semi-bold mt">Map Distribution</h6>
              <p>Tracking: <strong>Active</strong></p>
              <p>
                <span className="circle bg-default text-white"><i className="glyphicon glyphicon-cog" style={{marginBottom:"4px"}}/></span>
                &nbsp; 1 device added, 3 devices total
              </p>
              <div className="input-group mt">
                <input type="text" className="form-control bg-custom-dark border-0" placeholder="Search Map" />
                <span className="input-group-btn">
                  <button type="submit" className={`btn btn-subtle-blue ${s.searchBtn}`}>
                    <i className="glyphicon glyphicon-search text-white" style={{marginBottom:"6px"}}/>
                  </button>
                </span>
              </div>

            </Widget>
          </Col>
        </Row>
    );
  }
}

export default DeviceRow;