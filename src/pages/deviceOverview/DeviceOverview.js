import React from 'react';
import {
    Row,
    Col,
} from 'reactstrap';
import {connect} from "react-redux";

import DeviceWidget from './components/DeviceWidget'

class DeviceOverview extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h1 className="page-title">Devices<span className="fw-semi-bold"></span></h1>
          <DeviceListView deviceList={this.props.deviceList}/>
      </div>
    );
  }
}

function DeviceListView(props) {
  console.log("Device List Props", props);

    let view;

    if (props.deviceList.length > 0) {
      view = (props.deviceList.map((item) =>
        <DeviceWidget device={item}/>)
      );
    } else {
      // TODO this div would be prettier were it centered
      view = (<div>No devices currently registered with account.</div>);
    }
  return view
}


const mapStateToProps = state => ({
  deviceList: state.devices.deviceList,
  showAddDevice: state.devices.showAddDevice
});

export default connect(mapStateToProps)(DeviceOverview);
