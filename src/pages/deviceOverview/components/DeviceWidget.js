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
        title={<h5>Device Name: <small className="text-muted">{device.name}</small></h5>}
        close collapse >
        <p></p>
        <div className="widget-padding-md w-100 h-100 text-left border rounded">
          {/*TODO there is a bug with all the text being displayed as a single line, please display as a table*/}
          <Row>
            <Col sm={6}>
              <h6>Brand: </h6>
              <h6>Model: </h6>
              <h6>Serial Number: </h6>
            </Col>
            <Col sm={6}>
              <h7>{device.brand}</h7>
              <h7>{device.model}</h7>
              <h7>{device.serialNumber}</h7>
            </Col>
          </Row>
        </div>
      </Widget>
    );
  }
}

export default DeviceWidget;
