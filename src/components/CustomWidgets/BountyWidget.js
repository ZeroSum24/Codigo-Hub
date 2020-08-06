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
      <div style = {{width: '150%'}}>
      <Widget
        close collapse onClick={this.openBountyView}>
        <div className="widget-padding-md w-100 h-100 text-left border rounded">
          <Row>
            <Col>
              <h4><span className="fw-semi-bold">{bounty.title}</span></h4>
              <br/>
            </Col>
          </Row>
          <Row>
            <Col xs={5} sm={5} md={5} >
              <h6><span className="fw-semi-bold">Firmware version: </span></h6>
              <h6><span className="fw-semi-bold">Device Type: </span></h6>
            </Col>
            <Col xs={5} sm={5} md={5} >
              <h6><span className="fw-semi-bold">{bounty.firmwareVersion}</span></h6>
              <h6><span className="fw-semi-bold">{bounty.model}</span></h6>
            </Col>
            <Col  style = {{ borderWidth: '0', paddingRight:'20px'}} xs={2} sm={2} md={2} >
            <div>
              <h5><span className="fw-semi-bold">{bounty.ethAmount/1e18} ETH</span></h5>
            </div>
            </Col>
          </Row>
        </div>
      </Widget>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ethereumAddress: state.ethereum.ethereumAddress
});

export default connect(mapStateToProps)(BountyWidget);
