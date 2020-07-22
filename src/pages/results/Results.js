import React from 'react';
import {connect} from "react-redux";

import { Row, Col, Container, Card, CardTitle, CardText, CardImg, CardBody, Button } from 'reactstrap';

class Results extends React.PureComponent {


	constructor(props) {
		super(props);
		const users = {
  	name: 'Ross',
		};

		const firmwaresObj = {
			name: '',
			version: '',
			author: ''
		};

		const requests = {


		};

		this.state = {
			users:[],
			firmwares: [],
			requests: []
		};
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
								{this.DeviceListView()}
						</Col>
					</Row>
					<Row />
				</Container>
			</div>
		);
	}
}

function DeviceListView() {


}

export default Results;
