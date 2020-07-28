import React from 'react';

import DeviceWidget from '../../components/CustomWidgets/DeviceWidget'
import AddDeviceDialog from './components/AddDevice';
import { connect } from 'react-redux';
import { DeviceWithStatus } from '../../model/Device';
import { isDeviceActive } from '../../mqtt/client';
import ListView from "../../components/ListView";
import {Grid} from "@material-ui/core";

class DeviceOverview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  showAddDialog = () => {
    this.setState({show: true});
  };

  closeAddDialog = () => {
    this.setState({show: false});
  };

  refreshComponent = () => {
    this.setState(this.state);
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={11}>
            <h1 className="page-title" style={{display: 'inline', paddingRight: '10px' }}><span className="fw-semi-bold">Devices</span></h1>
          </Grid>
          <Grid item xs={1}>
            <span className="glyphicon glyphicon-plus" style={{fontSize: '24px', marginBottom: '10px', paddingRight: '10px'}} title="Add new device" aria-hidden="true" onClick={this.showAddDialog} />
            <span className="glyphicon glyphicon-refresh" style={{ fontSize: '24px', marginBottom: '10px' }} title="Refresh device status" onClick={this.refreshComponent} aria-hidden="true" />
          </Grid>
        </Grid>
        <ListView customWidget={DeviceWidget} emptyText={"Why not add some devices so you can manage them?"}
                  items={this.props.deviceList.map(d =>
                    new DeviceWithStatus(d.name, d.brand, d.model, d.serialNumber, isDeviceActive(d.name)))}/>
        <AddDeviceDialog isOpen={this.state.show} onClose={this.closeAddDialog} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deviceList: state.devices.deviceList,
  showAddDevice: state.devices.showAddDevice
});

export default connect(mapStateToProps)(DeviceOverview);
