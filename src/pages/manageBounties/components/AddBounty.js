import React from 'react';
import { Button } from 'reactstrap';

import { Alert, FormGroup, InputGroup, Input, Label } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';

import Widget from '../../../components/Widget';
import Bounty from '../../../model/Bounty';
import Modal from '@material-ui/core/Modal';

export default class AddBounty extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      deviceBrand: '',
      deviceModel: '',
      firmwareVersion: '',
      ethAmount: '',
    };
  }

  reset = () => {
    this.setState({
      title: '',
      description: '',
      deviceBrand: '',
      deviceModel: '',
      firmwareVersion: '',
      ethAmount: '',
    });
  };

  handleAddBounty = (e) => {
    e.preventDefault();
    // dispatches a new message to redux to add a new user device and to close the add device screen
    let newBounty = null;
    if (
      this.state.title &&
      this.state.description &&
      this.state.deviceModel &&
      this.state.ethAmount &&
      this.state.firmwareVersion
    ) {
      newBounty = new Bounty(
        this.state.title,
        this.state.description,
        this.state.deviceModel,
        this.state.ethAmount,
        this.state.firmwareVersion,
      );
    }
    this.props.onClose(newBounty);
    this.reset();
  };

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Modal onClose={this.handleAddBounty} open={this.props.isOpen}>
        <Widget className="widget-auth mx-auto"
                style={{ background: '#212529', marginTop: '30px' }}
                title={<h3 className="mt-0">Add a Bounty</h3>}>
          <p className="widget-auth-info">
            Please fill all fields below.
          </p>
          <form onSubmit={this.handleAddBounty}>{
            this.props.errorMessage && (
              <Alert className="alert-sm widget-middle-overflow rounded-0" color="danger">
                {this.props.errorMessage}
              </Alert>)
          }

            <FormGroup className="mt">
              <Label for="text">Title</Label>
              <InputGroup className="input-group-no-border">
                <Input name="title"
                       className="input-transparent pl-3"
                       value={this.state.title}
                       onChange={this.change}
                       type="text"
                       required
                       placeholder="Arduino - Minor Security Patch"/>
              </InputGroup>
            </FormGroup>

            <FormGroup className="mt">
              <Label for="text">Description</Label>
              <InputGroup>
                <Input id="description"
                       className="input-transparent pl-3"
                       value={this.state.description}
                       onChange={this.change}
                       type="textarea"
                       required
                       name="description"
                       placeholder="Updates required, e.g. Fix this security issue"/>
              </InputGroup>
            </FormGroup>

            <FormGroup className="mt">
              <Label for="text">Brand</Label>
              <InputGroup className="input-group-no-border">
                <Input id="deviceType"
                       className="input-transparent pl-3"
                       value={this.state.deviceBrand}
                       onChange={this.change}
                       type="text"
                       required
                       name="deviceBrand"
                       placeholder="E.g. Arduino"/>
              </InputGroup>
            </FormGroup>

            <FormGroup className="mt">
              <Label for="text">Model</Label>
              <InputGroup className="input-group-no-border">
                <Input id="deviceModel"
                       className="input-transparent pl-3"
                       value={this.state.deviceModel}
                       onChange={this.change}
                       type="text"
                       required
                       name="deviceModel"
                       placeholder="E.g. Uno"/>
              </InputGroup>
            </FormGroup>

            <FormGroup className="mt">
              <Label for="text">Firmware Version</Label>
              <InputGroup className="input-group-no-border">
                <Input id="firmwareVersion"
                       className="input-transparent pl-3"
                       value={this.state.firmwareVersion}
                       onChange={this.change}
                       type="text"
                       required
                       name="firmwareVersion"
                       placeholder="E.g. 19.4.4"/>
              </InputGroup>
            </FormGroup>

            <FormGroup className="mt">
              <Label for="text">ETH Amount</Label>
              <InputGroup className="input-group-no-border">
                <Input id="ethAmount"
                       className="input-transparent pl-3"
                       value={this.state.ethAmount}
                       onChange={this.change}
                       type="text"
                       required
                       name="ethAmount"
                       placeholder="E.g. 0.7"/>
              </InputGroup>
            </FormGroup>

            <div className="bg-widget-transparent auth-widget-footer">
              <Button type="submit"
                      color="warning"
                      className="auth-btn"
                      size="sm" style={{ color: '#fff' }}>Add a Bounty
              </Button>
              <p className="widget-auth-info mt-4">
              </p>
            </div>
          </form>
        </Widget>
      </Modal>
    );
  }
}
