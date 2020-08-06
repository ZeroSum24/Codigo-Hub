import React from 'react';
import {
  Row,
  Col,
  Progress,
} from 'reactstrap';

import Widget from '../../../components/Widget';


class TableRow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col lg={4} xs={12}>
          <Widget
            title={
              <div>
                <h6> COMMUNITY CONTRIBUTIONS </h6>
                <small style={{color: '#797A8A'}}>Amount of community bounty and firmware contributions</small>
              </div>}
            close settings
          >
            <div className="stats-row">
              <div className="stat-item">
                <h6 className="name">Amount of Users</h6>
                <p className="value">5</p>
              </div>
              <div className="stat-item">
                <h6 className="name">Total Bounties</h6>
                <p className="value">24</p>
              </div>
              <div className="stat-item">
                <h6 className="name">Total Firmware</h6>
                <p className="value">3</p>
              </div>
            </div>
            <Progress color="bg-primary" value="60" className="bg-custom-dark progress-xs" />
            <p>
              <small><span className="circle bg-default text-white"><i className="fa fa-plus" /></span></small>
              <span className="fw-semi-bold">&nbsp;60% more</span>
              &nbsp;contributions than last month
            </p>
          </Widget>
        </Col>
        <Col lg={4} xs={12}>
          <Widget
            title={
              <div>
                <h6> BOUNTIES CLAIMED </h6>
                <small style={{color: '#797A8A'}}>Users that have claimed my bounties</small>
              </div>}
            close settings
          >

            <div className="stats-row">
              <div className="stat-item">
                <h6 className="name">Amount Submitted</h6>
                <p className="value">12</p>
              </div>
              <div className="stat-item">
                <h6 className="name">Overall Claimed</h6>
                <p className="value">16%</p>
              </div>
              <div className="stat-item">
                <h6 className="name">Monthly Claims</h6>
                <p className="value">2</p>
              </div>
            </div>
            <Progress color="success" value="16" className="bg-custom-dark progress-xs" />
            <p>
              <small>
                <span className="circle bg-default text-white">
                  <i className="fa fa-chevron-up" />
                </span>
              </small>
              <span className="fw-semi-bold">&nbsp;20% higher</span>
              &nbsp;than last month
            </p>
          </Widget>
        </Col>
        <Col lg={4} xs={12}>
          <Widget
            title={
              <div>
                <h6> FIRMWARE DOWNLOADS </h6>
                <small style={{color: '#797A8A'}}>Users that have downloaded my firmware</small>
              </div>}
            close settings
          >
            <div className="stats-row">
              <div className="stat-item">
                <h6 className="name">My Firmware</h6>
                <p className="value">3</p>
              </div>
              <div className="stat-item">
                <h6 className="name">Overall Downloads</h6>
                <p className="value">24</p>
              </div>
              <div className="stat-item">
                <h6 className="name">Monthly Downloads</h6>
                <p className="value">6</p>
              </div>
            </div>
            <Progress color="danger" value="8" className="bg-custom-dark progress-xs" />
            <p>
              <small><span className="circle bg-default text-white"><i className="fa fa-chevron-down" /></span></small>
              <span className="fw-semi-bold">&nbsp;8% higher</span>
              &nbsp;than last month
            </p>
          </Widget>
        </Col>
      </Row>
    );
  }
}

export default TableRow;