import Widget from "../../../components/Widget";
import {Col, Row} from "reactstrap";
import React from "react";

class DeviceWidget extends React.PureComponent {

  constructor(props) {
    super(props);

  }

  render() {
    const request = this.props.device;
    return (
      <Widget
        title={<h5>Firmware Name: <small className="text-muted">{request.name}</small></h5>}
        close collapse >
        <p></p>
        <div className="widget-padding-md w-100 h-100 text-left border rounded">
          {/*TODO there is a bug with all the text being displayed as a single line, please display as a table*/}
          <Row>
            <Col sm={6}>
              <h6><span className="fw-semi-bold">Device Name: </span></h6>
              <h6><span className="fw-semi-bold">Author: </span></h6>
              <h6><span className="fw-semi-bold">Version: </span></h6>
            </Col>
            <Col sm={6}>
              <h6>{request.brand}</h6>
              <h6>{request.model}</h6>
              <h6>{request.serialNumber}</h6>
            </Col>
          </Row>
        </div>
      </Widget>
    );
  }
}

function DeviceListView(props) {
  console.log("Device List Props", props);

    let view;

    if (props.deviceList.length > 0) {
      view = (props.deviceList.map((item) =>
        <DeviceWidget device={item}/>)
      );
    } else {
      // TODO this div would be prettier were it centered
      view = (<div>No devices currently registered with account.</div>);
    }
  return view
}


export default DeviceWidget;
