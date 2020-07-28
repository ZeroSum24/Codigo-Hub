import React from 'react';
import { Grid } from '@material-ui/core';

import CodigoLogo from '../../images/rsz_codigo-01.png';

import {
    Row,
    Col,
} from 'reactstrap';

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
        <Grid
          style={{
            position: 'absolute',
            top: '33%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'center'
          }}
          container
        >
          <img src={CodigoLogo} align="center" alt="Codigo"/>
          <h4 className="page-title" align="center">{this.props.title}</h4>
          <Row align="center">
            <Col>
              {this.props.onClick !== undefined ?
                (<button style={buttonStyle} onClick={this.props.onClick}>Enable Ethereum</button>) : null}
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default AuthErrorView;
