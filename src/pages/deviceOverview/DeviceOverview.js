import React from 'react';
import {
    Row,
    Col,
} from 'reactstrap';
import {connect} from "react-redux";

import DeviceWidget from './components/DeviceWidget'
import AddDevicePopup from "./components/AddDevicePopup";

import { interactAddDeviceView } from '../../actions/profile'
var buttonStyle = {
    backgroundColor: "#00ff99",
    backgroundImage: "linear-gradient(to bottom, #23a1d1, #1f90bb)",
    backgroundRepeat: "repeat-x",
    borderColor: "#1f90bb #1f90bb #145e7a",
    color: "#ffffff",
    textShadow: "0 -1px 0 rgba(0, 0, 0, 0.25)"
}

class DeviceOverview extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleOpenDeviceView = this.handleOpenDeviceView.bind(this)
  }

  handleOpenDeviceView() {
    this.props.dispatch(interactAddDeviceView());
  }

  render() {

    return (
      <div>
        <Row>
          <Col >
            <h1 className="page-title">Devices<span className="fw-semi-bold"></span></h1>
          </Col>
          <Col>
          <button align="centre" style={buttonStyle} onClick={this.handleOpenDeviceView}>
            {!this.props.showAddDevice ? "Add Device" : "Cancel"}
          </button>
          </Col>
        </Row>

        {this.props.showAddDevice ?
          <AddDevicePopup />
          : <DeviceListView deviceList={this.props.deviceList}/>
        }
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
