import React from 'react';
import { connect } from 'react-redux';
import { parse }  from 'qs';

import {Grid} from "@material-ui/core";
import {Button} from "reactstrap";
import {Container, Alert, FormGroup, InputGroup, Input, Label} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../images/rsz_4rsz_codigo-01.png';
import Widget from '../../components/Widget';
import ExampleComponent from "react-rounded-image";
import Bounty from '../../model/Bounty'

class UserProfile extends React.Component {
  render() {

    return (
      <Container>
        <Widget className="widget-auth mx-auto" title={<h3 className="mt-0"></h3>}>
          <div align="center">
            <ExampleComponent
              image={logo}
              roundedColor=""
              imageWidth="150"
              imageHeight="150"
              roundedSize="13"
           />

          </div>
          <form onSubmit={this.handleAddBounty}>{
              this.props.errorMessage && (
                <Alert className="alert-sm widget-middle-overflow rounded-0" color="danger">
                  {this.props.errorMessage}
                </Alert> )
            }

            <div className="bg-widget-transparent auth-widget-footer">
              <p className="widget-auth-info mt-4">
              </p>
            </div>
          </form>
        </Widget>
      </Container>
    );
  }

}


const viewStates = {
  USER_DETAILS: 'USER_PROFILE',
  FIRMWARE_HISTORY: 'FIRMWARE_HISTORY'
};



export default UserProfile;
