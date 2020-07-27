import Widget from "../Widget";
import {Col, Row} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import Device from "../../model/Device";
import Bounty from "../../model/Bounty";

class BountyWidget extends React.PureComponent {

  static propTypes = {
    item: PropTypes.objectOf(Bounty).isRequired
  };

  render() {
    /*Need to adjust according to the details of add bounty*/
    const bounty = this.props.item;
    return (
      <Widget
        title={<h5>Bounty Title: <small className="text-muted">{bounty.name}</small></h5>}
        close collapse>
        <p></p>
        <div className="widget-padding-md w-100 h-100 text-left border rounded">
          <Row>
            <Col sm={6}>
              <h6><span className="fw-semi-bold">Proposer: </span></h6>
              <h6><span className="fw-semi-bold">Version: </span></h6>
              <h6><span className="fw-semi-bold">Eth Amount: </span></h6>
            </Col>
            <Col sm={6}>
              <h6>{bounty.author}</h6>
              <h6>{bounty.version}</h6>
              <h6>{bounty.ethAmount}</h6>
            </Col>
          </Row>
        </div>
      </Widget>
    );
  }
}

export default BountyWidget;
