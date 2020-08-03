import React from 'react';

import DeviceWidget from '../../components/CustomWidgets/DeviceWidget'
import TableView from "../../components/TableView";
import AddDeviceDialog from './components/AddDevice';
import { connect } from 'react-redux';
import ListView from "../../components/ListView";
import {Grid} from "@material-ui/core";
import DeviceTable from "./components/DeviceTable";


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

  openAddDevice() {
    this.setState({show: true});
  }

  refreshComponent = () => {
    this.setState(this.state);
  };

  render() {
    return (
      <div>
        <TableView tableView={<DeviceTable       bountyList = {this.props.deviceList}/>}
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
