import React from 'react';
import EthereumLogo from '../../images/eth_225.png';
import {
    Row,
    Col,
} from 'reactstrap';
import Widget from '../../components/Widget';
/**
 * Implements a standard auth error view with adjustable onclick button
 */

var buttonStyle = {
    backgroundColor: "#229ac8",
    backgroundImage: "linear-gradient(to bottom, #23a1d1, #1f90bb)",
    backgroundRepeat: "repeat-x",
    borderColor: "#1f90bb #1f90bb #145e7a",
    color: "#ffffff",
    textShadow: "0 -1px 0 rgba(0, 0, 0, 0.25)"
}

class AuthErrorView extends React.PureComponent {

  constructor(props) {
    super(props);
    this.title = this.props.title;
  }


  render() {
  return (
    <div>
    <h3 className="page-title" align="center">{this.props.title}<span className="fw-semi-bold"></span></h3>
        <Row align="center">
            <Col>
            <img align="center" class="center" src={EthereumLogo} alt="..." />
            </Col>
        </Row>
        <Row align="center">
            <Col>
            {this.props.onClick !== undefined ?
              (<button style={buttonStyle} onClick={this.props.onClick}>Enable Ethereum</button>): null}
            </Col>
        </Row>

    </div>
  )
}
}

export default AuthErrorView;
