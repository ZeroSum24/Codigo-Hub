import React from 'react';
import {connect} from "react-redux";

import ReactDOM from 'react-dom';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Row, Col, Container, Card, CardTitle, CardText, CardImg, CardBody, Button } from 'reactstrap';
import DeviceWidget from './components/DeviceWidget'


class Results extends React.PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1 align="centre" className="page-title">
					Search Page &nbsp;
				</h1>
				<Container fluid={true}>
					<Row>
						<Col xs={12} sm={12} md={2}>
						<Card body outline color="primary">
							<CardTitle align="center">Firmware (3)</CardTitle>
						</Card>
						<br />
						<Card body outline color="primary">
							<CardTitle align="center">Users (4)</CardTitle>
						</Card>
						<br />
						<Card body outline color="primary">
							<CardTitle align="center">Requests (4)</CardTitle>
						</Card>
						<br />
						</Col>
						<Col xs={12} sm={12} md={9}>
								<h1 className="page-title">Available Firmware<span className="fw-semi-bold"></span></h1>
								<DeviceListView deviceList={this.props.deviceList}/>
						</Col>
					</Row>
					<Row />
				</Container>
			</div>
		);
	}


}

function DeviceListView(props) {
  console.log("Device List Props", props);
    let view;

    if (props.deviceList.length > 0) {
      view = (props.deviceList.map((item) =>
        <DeviceWidget device={item}/>)
      );
    } else {
      // TODO this div would be prettier were it centered
      view = (<div>No devices currently registered with account.</div>);
    }
  return view
}

const mapStateToProps = state => ({
  deviceList: state.devices.deviceList,
  showAddDevice: state.devices.showAddDevice
});

export default Results;
