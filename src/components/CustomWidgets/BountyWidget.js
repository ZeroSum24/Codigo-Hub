import Widget from "../Widget";
import {Col, Row} from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import Bounty from "../../model/Bounty";
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
    this.props.dispatch(initBountyView({profileObject: this.props.item, history: this.props.history}));
  }

  render() {
    /*Need to adjust according to the details of add bounty*/
    const bounty = this.props.item;
    return (
      <Widget
        title={<h5>Bounty Title: <small className="text-muted">{bounty.name}</small></h5>}
        close collapse onClick={this.openBountyView}>
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
