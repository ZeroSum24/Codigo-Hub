import Widget from "../Widget";
import {Col, Row} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import Profile from "../../model/Profile";
import Firmware from "../../model/Firmware";

class FirmwareWidget extends React.PureComponent {

  static propTypes = {
    item: PropTypes.objectOf(Firmware).isRequired
  };

  render() {
    const firmware = this.props.item;
    console.log(firmware);
    return (
      <Widget
        title={<h5>Firmware Name: <small className="text-muted">{firmware.name}</small></h5>}
        close collapse>
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
