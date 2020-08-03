import React from 'react';

import TableView from "../../components/TableView";
import AddDeviceDialog from './components/AddDevice';
import { connect } from 'react-redux';
import DeviceTable from "./components/DeviceTable";
import { deleteDevice } from '../../actions/profile';


class DeviceOverview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  closeAddDialog = () => {
    this.setState({show: false});
  };

  openAddDevice() {
    this.setState({show: true});
  }

  onDeleteDevice = (device) => {
    this.props.dispatch(deleteDevice(device, this.props.deviceList));
  }

  render() {
    return (
      <div>
        <TableView tableView={<DeviceTable       deviceList = {this.props.deviceList} onDeleteDevice={this.onDeleteDevice} />}
                   addView  ={<AddDeviceDialog   isOpen     = {this.state.show}
                                                 onClose    = {this.closeAddDialog}
                           />}
                   addFunction            = {this.openAddDevice.bind(this)}
                   addFunctionExplanation = {"Add new Device"}
                   title                  ={"Manage Devices"}
                   usageExplanation       ={"Monitor the status of your Devices. " +
                   "Add or remove devices at your leisure."} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deviceList: state.profile.deviceList,
  showAddDevice: state.profile.showAddDevice
});

export default connect(mapStateToProps)(DeviceOverview);
