import Widget from "../Widget";
import {Col, Row} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import Profile from "../../model/Profile";
import Firmware from "../../model/Firmware";
import {loginUser} from "../../actions/user";
import {initFirmwareView, openFirmwareView} from "../../actions/view";

class FirmwareWidget extends React.PureComponent {

  static propTypes = {
    item: PropTypes.objectOf(Firmware).isRequired
  };

  constructor(props) {
    super(props);
    this.openFirmwareView = this.openFirmwareView.bind(this);
  }

  openFirmwareView() {
    this.props.dispatch(initFirmwareView({firmwareObj: this.props.item, history: this.props.history}));
  }

  render() {
    const firmware = this.props.item;
    console.log(firmware);
    return (
      <Widget
        title={<h5>Firmware Name: <small className="text-muted">{firmware.name}</small></h5>}
        close collapse onClick={this.openFirmwareView}>
        <p></p>
        <div className="widget-padding-md w-100 h-100 text-left border rounded">
          <Row>
            <Col sm={6}>
              <h6><span className="fw-semi-bold">Author: </span></h6>
              <h6><span className="fw-semi-bold">Version: </span></h6>
            </Col>
            <Col sm={6}>
              <h6>{firmware.author}</h6>
              <h6>{firmware.version}</h6>
            </Col>
          </Row>
        </div>
      </Widget>
    );
  }
}

export default FirmwareWidget;
