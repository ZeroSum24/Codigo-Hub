import React from 'react';
import {
  Row, Col, Button,
} from 'reactstrap';
import { withRouter, Redirect, Link } from 'react-router-dom';

import { Container, Alert, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'uuid/v4'
import Widget from '../../components/Widget';
import s from './Notifications.module.scss';
import microsoft from '../../images/microsoft.png';
import Login from '../login';

class Notifications extends React.Component {

  state = {
    options: {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true
    }
  }

  componentDidMount() {

  }

  addSuccessNotification = () => toast.success('Showing success message was successful!', this.state.options);

  toggleLocation = (location) => {
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        position: location
      }
    }));
  }

  addInfoNotification = () => {
    let id = uuid();
    toast.info(
    <div>
      Launching thermonuclear war...
      <Button onClick={() => this.launchNotification(id)} outline size="xs" className="width-100 mb-xs mr-xs mt-1">Cancel launch</Button>
    </div>,
    {...this.state.options,toastId: id},
    );
  }

  launchNotification = (id) => toast.update(id, { ...this.state.options, render: "Thermonuclear war averted", type: toast.TYPE.SUCCESS });

  addErrorNotification = () => {
    let id = uuid();
    toast.error(
    <div>
      Error destroying alien planet <br/>
      <Button onClick={() => this.retryNotification(id)} outline size="xs" className="width-100 mb-xs mr-xs mt-1">Retry</Button>
    </div>,
    {...this.state.options,toastId: id}
    );
  }

  retryNotification = (id) =>  toast.update(id, {...this.state.options, render: 'Alien planet destroyed!', type: toast.TYPE.SUCCESS });

  render() {
    return (
      <Container>
          <Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Login to your Web App</h3>}>
              <p className="widget-auth-info">
                  Please fill all fields below.
              </p>
              <form onSubmit={this.doRegister}>
                  {
                      this.props.errorMessage && (
                          <Alert className="alert-sm widget-middle-overflow rounded-0" color="danger">
                              {this.props.errorMessage}
                          </Alert>
                      )
                  }
                  <FormGroup className="mt">
                      <Label for="email">Device Name</Label>
                      <InputGroup className="input-group-no-border">
                          <Input id="deviceName" className="input-transparent pl-3" value={this.state.email}
                                 onChange={this.changeEmail} type="email"
                                 required name="Device Name" placeholder="E.g. Arduino"/>
                      </InputGroup>
                  </FormGroup>

                  <FormGroup className="mt">
                      <Label for="email">Device Type</Label>
                      <InputGroup className="input-group-no-border">
                          <Input id="deviceType" className="input-transparent pl-3" value={this.state.email}
                                 onChange={this.changeEmail} type="email"
                                 required name="Device Name" placeholder="E.g. Uno"/>
                      </InputGroup>
                  </FormGroup>

                  <FormGroup className="mt">
                      <Label for="email">Device Serial Number</Label>
                      <InputGroup className="input-group-no-border">
                          <Input id="serialNumber" className="input-transparent pl-3" value={this.state.email}
                                 onChange={this.changeEmail} type="email"
                                 required name="Device Serial Number" placeholder="E.g. Device Serial Number"/>
                      </InputGroup>
                  </FormGroup>

                  <div className="bg-widget-transparent auth-widget-footer">
                      <Button type="submit" color="danger" className="auth-btn"
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

export default Notifications;
