import React from 'react';

import DeviceWidget from '../../components/CustomWidgets/DeviceWidget'
import AddDeviceDialog from './components/AddDevice';
import { connect } from 'react-redux';
import { DeviceWithStatus } from '../../model/Device';
import { isDeviceActive } from '../../mqtt/client';

class DeviceOverview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  showAddDialog = () => {
    this.setState({show: true});
  }

  closeAddDialog = () => {
    this.setState({show: false});
  }

  refreshComponent = () => {
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <h1 className="page-title" style={{display: 'inline', paddingRight: '10px' }}><span className="fw-semi-bold">Devices</span></h1>
        <span className="glyphicon glyphicon-plus" style={{fontSize: '24px', marginBottom: '10px', paddingRight: '10px'}} title="Add new device" aria-hidden="true" onClick={this.showAddDialog} />
        <span className="glyphicon glyphicon-refresh" style={{ fontSize: '24px', marginBottom: '10px' }} title="Refresh device status" onClick={this.refreshComponent} aria-hidden="true" />
        <DeviceListView deviceList={this.props.deviceList.map(d =>
          new DeviceWithStatus(d.name, d.brand, d.model, d.serialNumber, isDeviceActive(d.name)))}/>
        <AddDeviceDialog show={this.state.show} onClose={this.closeAddDialog} />
      </div>
    );
  }
}

function DeviceListView(props) {
  console.log("Device List Props", props);

    let view;

    if (props.deviceList.length > 0) {
      view = (props.deviceList.map((item) =>
        <DeviceWidget key={item.serialNumber} device={item}/>)
      );
    } else {
      view = (
        <div align ="center">Why not add some devices so you can manage them</div>);
    }
  return view
}

const mapStateToProps = state => ({
  deviceList: state.devices.deviceList,
  showAddDevice: state.devices.showAddDevice
});

export default connect(mapStateToProps)(DeviceOverview);
