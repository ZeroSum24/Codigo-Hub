import React from 'react';
import {connect} from "react-redux";
import { Button } from 'reactstrap';

import { Container, Alert, FormGroup, InputGroup, Input, Label } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';

import Widget from '../../components/Widget';
import Bounty from '../../classes/Bounty'

class AddBounty extends React.PureComponent  {

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
      title: '',
      description: '',
      deviceBrand: '',
      deviceModel: '',
      firmwareVersion: '',
      ethAmount: '',
      addBountySuccess: false
    };

    this.handleAddBounty = this.handleAddBounty.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeDeviceBrand = this.changeDeviceBrand.bind(this);
    this.changeDeviceModel = this.changeDeviceModel.bind(this);
    this.changeFirmwareVersion = this.changeFirmwareVersion.bind(this);
    this.changeEthAmount = this.changeEthAmount.bind(this);
  }

  handleAddBounty(e) {
    e.preventDefault();

    // dispatches a new message to redux to add a new user device and to close the add device screen
    let newBounty = new Bounty(this.state.title, this.state.description, this.state.deviceBrand, this.state.deviceModel,
                               this.state.firmwareVersion, this.state.ethAmount, this.props.ethereumAddress);

    // TODO implement interaction with smart contracts here
    // TODO update component to through a Toast on add bounty success
  }

  changeTitle(e) {
    this.setState({title: e.target.value})
  }

  changeDescription(e) {
    this.setState({description: e.target.value})
  }

  changeDeviceBrand(e) {
    this.setState({deviceBrand: e.target.value})
  }

  changeDeviceModel(e) {
    this.setState({deviceModel: e.target.value})
  }

  changeFirmwareVersion(e) {
    this.setState({firmwareVersion: e.target.value})
  }

  changeEthAmount(e) {
    this.setState({ethAmount: e.target.value})
  }

  render() {

    return (
      <Container>
        <Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Add a bounty</h3>}>
          <p className="widget-auth-info">
            Please fill all fields below.
          </p>
          <form onSubmit={this.handleAddBounty}>
            {
              this.props.errorMessage && (
                <Alert className="alert-sm widget-middle-overflow rounded-0" color="danger">
                  {this.props.errorMessage}
                </Alert> )
            }
            <FormGroup className="mt">
              <Label for="text">Title</Label>
              <InputGroup className="input-group-no-border">
                <Input id="title" className="input-transparent pl-3" value={this.state.title}
                       onChange={this.changeTitle} type="text"
                       required name="Description" placeholder="Arduino - Minor Security Patch"/>
              </InputGroup>
            </FormGroup>
            <FormGroup className="mt">
              <Label for="text">Description</Label>
              <InputGroup className="input-group-no-border">
                <Input id="description" className="input-transparent pl-3" value={this.state.description}
                       onChange={this.changeDescription} type="text"
                       required name="Description" placeholder="Security required updates relating to the recent Spectre bug..."/>
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
              <Label for="text">Firmware Version</Label>
              <InputGroup className="input-group-no-border">
                <Input id="firmwareVersion" className="input-transparent pl-3" value={this.state.firmwareVersion}
                       onChange={this.changeFirmwareVersion} type="text"
                       required name="Firmware Version" placeholder="E.g. 19.4.4"/>
              </InputGroup>
            </FormGroup>

            <FormGroup className="mt">
              <Label for="text">ETH Amount</Label>
              <InputGroup className="input-group-no-border">
                <Input id="ethAmount" className="input-transparent pl-3" value={this.state.ethAmount}
                       onChange={this.changeEthAmount} type="number"
                       required name="Device Serial Number" placeholder="E.g. 0.7 ETH"/>
              </InputGroup>
            </FormGroup>

            <div className="bg-widget-transparent auth-widget-footer">
              <Button type="submit" color="warning" className="auth-btn"
                      size="sm" style={{color: '#fff'}}>{this.props.isFetching ? 'Loading...' : 'Add Bounty'}</Button>
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
  ethereumAddress: state.ethereum.ethereumAddress
});

export default connect(mapStateToProps)(AddBounty);
