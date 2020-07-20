import Widget from "../../../components/Widget";
import {Col, Row} from "reactstrap";
import React from "react";

class DeviceWidget extends React.PureComponent {

  constructor(props) {
    super(props);

  }

  render() {
    const device = this.props.device;
    return (
      <Widget
        title={<h5>Device Name: <small className="text-muted">Device 1</small></h5>}
        close collapse >
        <h6>Device Details</h6>
        <p></p>
        <div className="widget-padding-md w-100 h-100 text-left border rounded">
          <Row>
            <Col sm={6}>
              <h7>Name: </h7>
              <h7>Brand: </h7>
              <h7>Model: </h7>
              <h7>Serial Number: </h7>
            </Col>
            <Col sm={6}>
              <h8>{device.name}</h8>
              <h8>{device.brand}</h8>
              <h8>{device.model}</h8>
              <h8>{device.serialNumber}</h8>
            </Col>
          </Row>
        </div>
      </Widget>
    );
  }
}

export default DeviceWidget;
