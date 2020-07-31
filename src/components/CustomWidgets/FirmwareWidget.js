import Widget from "../Widget";
import {Col, Row} from "reactstrap";
import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Firmware from "../../model/Firmware";
import {initFirmwareView} from "../../actions/view";

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
    return (
      <Widget
        title={<h5>Firmware Name: <small className="text-muted">WHAT_IS_THIS?</small></h5>}
        close collapse onClick={this.openFirmwareView}>
        <div className="widget-padding-md w-100 h-100 text-left border rounded">
          <Row>
            <Col sm={6}>
              <h6><span className="fw-semi-bold">Developer: </span></h6>
              <h6><span className="fw-semi-bold">Version: </span></h6>
              <h6><span className="fw-semi-bold">Description: </span></h6>
              <h6><span className="fw-semi-bold">Device Type: </span></h6>
            </Col>
            <Col sm={6}>
              <h6>{firmware.developer}</h6>
              <h6>NOT_YET_IMPL</h6>
              <h6>{firmware.description}</h6>
              <h6>{firmware.device_type}</h6>
            </Col>
          </Row>
        </div>
      </Widget>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(FirmwareWidget);
