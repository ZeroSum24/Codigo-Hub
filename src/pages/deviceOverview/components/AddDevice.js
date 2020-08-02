import React from 'react';
import { Alert, Button, FormGroup, Input, InputGroup, Label } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import Widget from '../../../components/Widget';

import { createUserDevice } from '../../../actions/profile';
import Device from '../../../model/Device';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';

class AddDeviceDialog extends React.PureComponent  {

  constructor(props) {
    super(props);
    this.state = {
      deviceName: '',
      deviceBrand: '',
      deviceModel: '',
      serialNumber: '',
      longitude: undefined,
      latitude: undefined,
    };
  }

  handleAddDevice = (e) => {
    e.preventDefault();
    let newDevice = new Device(
      this.state.deviceName,
      this.state.deviceBrand,
      this.state.deviceModel,
      this.state.serialNumber,
      this.props.latitude,
      this.props.longitude
    );
    this.props.dispatch(createUserDevice(this.props.deviceList, newDevice));
    this.reset();
  }

  reset = () => {
    this.setState({
      deviceName: '',
      deviceBrand: '',
      deviceModel: '',
      serialNumber: '',
      longitude: undefined,
      latitude: undefined,
    })
    this.props.onClose();
  }

  change = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    if (!this.props.isOpen) return null;
    return (
      <Modal onClose={this.reset} open={this.props.isOpen}>
          <Widget  className="widget-auth mx-auto" style={{background: '#212529', marginTop: '30px'}} title={<h3 className="mt-0">Add a Device</h3>}>
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
                                 onChange={this.change} type="text"
                                 required name="deviceName" placeholder="E.g. Garden Monitor"/>
                      </InputGroup>
                  </FormGroup>

                  <FormGroup className="mt">
                      <Label for="text">Brand</Label>
                      <InputGroup className="input-group-no-border">
                          <Input id="deviceType" className="input-transparent pl-3" value={this.state.deviceBrand}
                                 onChange={this.change} type="text"
                                 required name="deviceBrand" placeholder="E.g. Arduino"/>
                      </InputGroup>
                  </FormGroup>

                <FormGroup className="mt">
                  <Label for="text">Model</Label>
                  <InputGroup className="input-group-no-border">
                    <Input id="deviceModel" className="input-transparent pl-3" value={this.state.deviceModel}
                           onChange={this.change} type="text"
                           required name="deviceModel" placeholder="E.g. Uno"/>
                  </InputGroup>
                </FormGroup>

                  <FormGroup className="mt">
                      <Label for="text">Serial Number</Label>
                      <InputGroup className="input-group-no-border">
                          <Input id="serialNumber" className="input-transparent pl-3" value={this.state.serialNumber}
                                 onChange={this.change} type="text"
                                 required name="serialNumber" placeholder="E.g. Device Serial Number"/>
                      </InputGroup>
                  </FormGroup>

                <FormGroup className="mt">
                  <Label for="text">Location</Label>
                  <InputGroup className="input-group-no-border">
                    <Input id="longitude" className="input-transparent pl-3" value={this.state.longitude}
                           onChange={this.change} type="text"
                           name="longitude" placeholder="Longitude"/>
                    <Input id="latitude" className="input-transparent pl-3" value={this.state.latitude}
                           onChange={this.change} type="text"
                           name="latitude" placeholder="Latitude"/>
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
      </Modal>
     );
   }
}

const mapStateToProps = state => ({
    addDeviceSuccess: state.profile.addDeviceSuccess,
    deviceList: state.profile.deviceList
});

export default connect(mapStateToProps)(AddDeviceDialog);
