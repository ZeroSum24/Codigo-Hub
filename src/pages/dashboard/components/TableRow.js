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

    const {
      communityStats,
      firmwareStats,
      bountiesStats,
    } = this.props;

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
                <p className="value">{communityStats.userAmount}</p>
              </div>
              <div className="stat-item">
                <h6 className="name">Total Bounties</h6>
                <p className="value">{communityStats.totalBounties}</p>
              </div>
              <div className="stat-item">
                <h6 className="name">Total Firmware</h6>
                <p className="value">{communityStats.totalFirmware}</p>
              </div>
            </div>
            <Progress color="bg-primary" value="0" className="bg-custom-dark progress-xs" />
            <p>
              <small><span className="circle bg-default text-white"><i className="fa fa-plus" /></span></small>
              <span className="fw-semi-bold">&nbsp;0% more</span>
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
                <p className="value">{bountiesStats.amountSubmitted}</p>
              </div>
              <div className="stat-item">
                <h6 className="name">Overall Claimed</h6>
                <p className="value">{bountiesStats.overallClaimed}%</p>
              </div>
              <div className="stat-item">
                <h6 className="name">Monthly Claims</h6>
                <p className="value">{bountiesStats.monthlyClaims}</p>
              </div>
            </div>
            <Progress color="success" value="0" className="bg-custom-dark progress-xs" />
            <p>
              <small>
                <span className="circle bg-default text-white">
                  <i className="fa fa-chevron-up" />
                </span>
              </small>
              <span className="fw-semi-bold">&nbsp;0% higher</span>
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
                <p className="value">{firmwareStats.firmwareAmount}</p>
              </div>
              <div className="stat-item">
                <h6 className="name">Overall Downloads</h6>
                <p className="value">{firmwareStats.overallDownloads}</p>
              </div>
              <div className="stat-item">
                <h6 className="name">Monthly Downloads</h6>
                <p className="value">{firmwareStats.monthlyDownloads}</p>
              </div>
            </div>
            <Progress color="danger" value="0" className="bg-custom-dark progress-xs" />
            <p>
              <small><span className="circle bg-default text-white"><i className="fa fa-chevron-down" /></span></small>
              <span className="fw-semi-bold">&nbsp;0% higher</span>
              &nbsp;than last month
            </p>
          </Widget>
        </Col>
      </Row>
    );
  }
}

export default TableRow;
