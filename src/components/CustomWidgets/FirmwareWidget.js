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
        close collapse onClick={this.openFirmwareView}>
        <div className="widget-padding-md w-100 h-100 text-left border rounded">
        <Row>
          <Col>
            <h1><span className="fw-semi-bold">{firmware.name}</span></h1>
            <h6>Developer: {firmware.developer}</h6>
            <br/><br/>
          </Col>
        </Row>

        <Row>
          <Col>
              <h2><span className="fw-semi-bold">{firmware.device_type}</span></h2>
          </Col>

          <Col>
              <h3><span className="fw-semi-bold">{firmware.version}</span></h3>
          </Col>
        </Row>

        <Row>

        </Row>

        </div>
      </Widget>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(FirmwareWidget);
