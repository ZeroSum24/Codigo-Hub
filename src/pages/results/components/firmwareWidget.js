import Widget from "../../../components/Widget";
import {Col, Row} from "reactstrap";
import React from "react";

class FirmwareWidget extends React.PureComponent {

  render() {
    const request = this.props.firmware;
    console.log(request);
    return (
      <Widget
        title={<h5>Firmware Name: <small className="text-muted">{request.name}</small></h5>}
        close collapse>
        <p></p>
        <div className="widget-padding-md w-100 h-100 text-left border rounded">
          <Row>
            <Col sm={6}>
              <h6><span className="fw-semi-bold">Author: </span></h6>
              <h6><span className="fw-semi-bold">Version: </span></h6>
            </Col>
            <Col sm={6}>
              <h6>{request.author}</h6>
              <h6>{request.version}</h6>
            </Col>
          </Row>
        </div>
      </Widget>
    );
  }
}

export default FirmwareWidget;
