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
      <div style = {{width: '300%'}}>
      <Widget
        title={<h5>Bounty Title: <small className="text-muted">{bounty.title}</small></h5>}
        close collapse onClick={this.openBountyView}>
        <p></p>
        <div className="widget-padding-md w-100 h-100 text-left border rounded">
          <Row>
            <Col xs={5} sm={5} md={5} >

              <h6><span className="fw-semi-bold">Firmware version: </span></h6>
              <h6><span className="fw-semi-bold">Device Type: </span></h6>

            </Col>
            <Col xs={5} sm={5} md={5} >
              <h6>{bounty.firmwareVersion}</h6>
              <h6>{bounty.model}</h6>
            </Col>
            <Col  style = {{ borderWidth: '0', paddingRight:'20px'}} xs={2} sm={2} md={2} >
            <div>
            <h6>{bounty.ethAmount/1e18} ETH</h6>
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
