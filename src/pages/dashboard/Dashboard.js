import React from 'react';

import s from './Dashboard.module.scss';
import DeviceRow from "./components/DeviceRow";
import TableRow from "./components/TableRow";
import {connect} from "react-redux";


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      devicesStats,
      communityStats,
      firmwareStats,
      bountiesStats,
    } = this.props;

    console.log('Dashboard', this.props)
    return (
      <div className={s.root}>
        <h1 className="page-title">Dashboard &nbsp;
          <small>
            <small>Hub Overview</small>
          </small>
        </h1>
        <DeviceRow devicesStats={devicesStats}/>
        <TableRow communityStats={communityStats} firmwareStats={firmwareStats} bountiesStats={bountiesStats}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  communityStats: state.dashboard.community,
  bountiesStats: state.dashboard.bounties,
  firmwareStats: state.dashboard.firmware,
  devicesStats: state.dashboard.devices
});

export default connect(mapStateToProps)(Dashboard);
