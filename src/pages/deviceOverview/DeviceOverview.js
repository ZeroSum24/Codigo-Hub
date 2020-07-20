import React from 'react';
import {
    Row,
    Col,
} from 'reactstrap';
import {connect} from "react-redux";

import DeviceWidget from './components/DeviceWidget'
import AddDevicePopup from "./components/AddDevicePopup";

import { interactAddDeviceView } from '../../actions/profile'

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
          <Col >
            <button onClick={this.handleOpenDeviceView}>
              {/* TODO this button would be nicer if it were differently styled, maybe in a different location too */}
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

    let view;

    if (props.deviceList.length > 0) {
      view = (this.props.deviceList.map((item) =>
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
