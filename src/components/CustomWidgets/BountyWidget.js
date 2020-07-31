import Widget from "../Widget";
import {Col, Row} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import Bounty from "../../model/Bounty";
import {connect} from "react-redux";
import {initBountyView} from "../../actions/view";

class BountyWidget extends React.PureComponent {

  static propTypes = {
    item: PropTypes.objectOf(Bounty).isRequired
  };

  constructor(props) {
    super(props);
    this.openBountyView = this.openBountyView.bind(this);
  }

  openBountyView() {
    console.log("bounty view props", this.props);
    this.props.dispatch(initBountyView({bountyObject: this.props.item, history: this.props.history}));
  }

  render() {
    /*Need to adjust according to the details of add bounty*/
    const bounty = this.props.item;
    return (
      <Widget
        title={<h5>Bounty Title: <small className="text-muted">{bounty.title}</small></h5>}
        close collapse onClick={this.openBountyView}>
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
              <h6>{bounty.firmwareVersion}</h6>
              <h6>{bounty.model}</h6>
              <h6>{bounty.ethAmount} Wei</h6>
              <h6>{bounty.ethAmount === 0 ? 'False' : 'True'}</h6>
            </Col>
          </Row>
        </div>
      </Widget>
    );
  }
}

const mapStateToProps = state => ({
  ethereumAddress: state.ethereum.ethereumAddress
});

export default connect(mapStateToProps)(BountyWidget);
