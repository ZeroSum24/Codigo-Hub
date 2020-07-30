import Widget from "../Widget";
import {Col, Row, Button} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import Bounty from "../../model/Bounty";
import { collectBounty } from '../../blockchain/contracts';

class BountyWidget extends React.PureComponent {

  static propTypes = {
    item: PropTypes.objectOf(Bounty).isRequired
  };

  collect = () => {
    const bounty = this.props.item;
    let go = true;
    if (bounty.bountySetter.toLowerCase() === window.ethereum.selectedAddress.toLowerCase()) {
      go = window.confirm('You are the creator of this bounty. You can only cancel it if 3 months have passed since creation, ' +
        'to give time for developers to create. The transaction will fail otherwise. Do you wish to continue?');
    }
    if (go) collectBounty(bounty.block_num);
  }

  render() {
    /*Need to adjust according to the details of add bounty*/
    const bounty = this.props.item;
    return (
      <Widget
        title={<h5>Bounty Title: <small className="text-muted">{bounty.title}</small></h5>}
        close collapse>
        <p></p>
        <div className="widget-padding-md w-100 h-100 text-left border rounded">
          <Row>
            <Col sm={6}>
              <h6><span className="fw-semi-bold">Proposer: </span></h6>
              <h6><span className="fw-semi-bold">Description: </span></h6>
              <h6><span className="fw-semi-bold">Firmware version: </span></h6>
              <h6><span className="fw-semi-bold">Device Type: </span></h6>
              <h6><span className="fw-semi-bold">Stake: </span></h6>
              <h6><span className="fw-semi-bold">Active: </span></h6>
            </Col>
            <Col sm={6}>
              <h6>{bounty.bountySetter}</h6>
              <h6>{bounty.description}</h6>
              <h6>v1.1.0</h6>
              <h6>{bounty.model}</h6>
              <h6>{bounty.ethAmount} Wei</h6>
              <h6>{bounty.ethAmount === 0 ? 'False' : 'True'}</h6>
            </Col>
            <Col sm={6}>
              <Button onClick={this.collect}>Collect</Button>
            </Col>
          </Row>
        </div>
      </Widget>
    );
  }
}

export default BountyWidget;
