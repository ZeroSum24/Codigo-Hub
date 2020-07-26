import React from 'react';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

import { Container, Alert, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import Widget from '../../components/Widget';

import { createUserDevice } from "../../actions/profile"
import Device from '../../classes/Device'
import Toast from "reactstrap/lib/Toast";
import {connect} from "react-redux";

class AddDevice extends React.PureComponent  {

  constructor(props) {
    super(props);
    this.state = {
      options: {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true
      },
      deviceName: '',
      deviceBrand: '',
      deviceModel: '',
      serialNumber: '',
      addDeviceSuccess: false
    };

    this.handleAddDevice = this.handleAddDevice.bind(this);
    this.changeDeviceName = this.changeDeviceName.bind(this)
    this.changeDeviceBrand = this.changeDeviceBrand.bind(this)
    this.changeDeviceModel = this.changeDeviceModel.bind(this)
    this.changeSerialNumber = this.changeSerialNumber.bind(this)
  }

  handleAddDevice(e) {
    e.preventDefault();

    // dispatches a new message to redux to add a new user device and to close the add device screen
    let newDevice = new Device(this.state.deviceName, this.state.deviceBrand, this.state.deviceModel, this.state.serialNumber);
    this.props.dispatch(createUserDevice(this.props.deviceList, newDevice));
  }

  changeDeviceName(e) {
    this.setState({deviceName: e.target.value})
  }

  changeDeviceBrand(e) {
    this.setState({deviceBrand: e.target.value})
  }

  changeDeviceModel(e) {
    this.setState({deviceModel: e.target.value})
  }

  changeSerialNumber(e) {
    this.setState({serialNumber: e.target.value})
  }

  render() {

    // {this.props.addDeviceSuccess ?
    //   (<Toast>
    //       <Toast.Header>
    //         <img src="../../../images/rsz_4rsz_codigo-01.png" className="rounded mr-2" alt="" />
    //         <strong className="mr-auto">Código Hub</strong>
    //       </Toast.Header>
    //       <Toast.Body>Device successfully added: {this.state.deviceName}</Toast.Body>
    //    </Toast>): null
    // }
    
    return (
      <Container>
          <Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Add a Device</h3>}>
              <p className="widget-auth-info">
                  Please fill all fields below.
              </p>
              <form onSubmit={this.handleAddDevice}>
                  {
                      this.props.errorMessage && (
                          <Alert className="alert-sm widget-middle-overflow rounded-0" color="danger">
                              {this.props.errorMessage}
                          </Alert>
                      )
                  }
                  <FormGroup className="mt">
                      <Label for="text">Name</Label>
                      <InputGroup className="input-group-no-border">
                          <Input id="deviceName" className="input-transparent pl-3" value={this.state.deviceName}
                                 onChange={this.changeDeviceName} type="text"
                                 required name="Device Name" placeholder="E.g. Garden Monitor"/>
                      </InputGroup>
                  </FormGroup>

                  <FormGroup className="mt">
                      <Label for="text">Brand</Label>
                      <InputGroup className="input-group-no-border">
                          <Input id="deviceType" className="input-transparent pl-3" value={this.state.deviceBrand}
                                 onChange={this.changeDeviceBrand} type="text"
                                 required name="Device Name" placeholder="E.g. Arduino"/>
                      </InputGroup>
                  </FormGroup>

                <FormGroup className="mt">
                  <Label for="text">Model</Label>
                  <InputGroup className="input-group-no-border">
                    <Input id="deviceModel" className="input-transparent pl-3" value={this.state.deviceModel}
                           onChange={this.changeDeviceModel} type="text"
                           required name="Device Name" placeholder="E.g. Uno"/>
                  </InputGroup>
                </FormGroup>

                  <FormGroup className="mt">
                      <Label for="text">Serial Number</Label>
                      <InputGroup className="input-group-no-border">
                          <Input id="serialNumber" className="input-transparent pl-3" value={this.state.serialNumber}
                                 onChange={this.changeSerialNumber} type="text"
                                 required name="Device Serial Number" placeholder="E.g. Device Serial Number"/>
                      </InputGroup>
                  </FormGroup>

                  <div className="bg-widget-transparent auth-widget-footer">
                      <Button type="submit" color="warning" className="auth-btn"
                              size="sm" style={{color: '#fff'}}>{this.props.isFetching ? 'Loading...' : 'Add Device'}</Button>
                      <p className="widget-auth-info mt-4">
                      </p>
                  </div>
              </form>
          </Widget>
      </Container>
     );
   }
}

const mapStateToProps = state => ({
  addDeviceSuccess: state.devices.addDeviceSuccess,
  deviceList: state.devices.deviceList
});

export default connect(mapStateToProps)(AddDevice);
