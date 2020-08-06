import React from 'react';

import s from './Dashboard.module.scss';
import DeviceRow from "./components/DeviceRow";
import TableRow from "./components/TableRow";


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">Dashboard &nbsp;
          <small>
            <small>Hub Overview</small>
          </small>
        </h1>
        <DeviceRow />
        <TableRow />
      </div>
    );
  }
}

export default Dashboard;