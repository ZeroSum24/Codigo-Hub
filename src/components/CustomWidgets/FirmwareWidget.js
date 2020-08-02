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
      /*
      <h6><span className="fw-semi-bold">Developer: </span></h6>


      <h6>{firmware.developer}</h6>
      <h6>{firmware.version}</h6>
      <h6>{firmware.description}</h6>
      <h6>{firmware.device_type}</h6>

      */

      <Widget
        close collapse onClick={this.openFirmwareView}>
        <div className="widget-padding-md w-100 h-100 text-left border rounded">
        <Row>
          <Col>
          <h3>{firmware.name}</h3>
          </Col>
          <Col>

          </Col>
        </Row>

          <Row>
            <Col>
              <Row>
                <h4><span className="fw-semi-bold">{firmware.device_type}</span></h4>
              </Row>
            </Col>

            <Col>
              <Row>
                <h4><span className="fw-semi-bold">"  " + {firmware.version}</span></h4>
              </Row>
            </Col>


          </Row>

          <Row>
            <h4><span className="fw-semi-bold">{firmware.developer}</span></h4>
          </Row>
        </div>
      </Widget>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(FirmwareWidget);
