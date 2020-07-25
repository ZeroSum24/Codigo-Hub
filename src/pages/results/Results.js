import React from 'react';
import {connect} from "react-redux";
import Widget from "../../components/Widget";


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

		const requestsObj = {


		};

	  const usersObj = {
			name: ''

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
							<CardTitle align="center">Firmware ({this.state.firmwares.length})</CardTitle>
						</Card>
						<br />
						<Card body outline color="primary">
							<CardTitle align="center">Users ({this.state.users.length})</CardTitle>
						</Card>
						<br />
						<Card body outline color="primary">
							<CardTitle align="center">Requests ({this.state.requests.length})</CardTitle>
						</Card>
						<br />
						</Col>
						<Col xs={12} sm={12} md={9}>
								<h1 className="page-title">Available Firmware<span className="fw-semi-bold"></span></h1>
								<Widget
									title={<h5>Firmware Name: <small className="text-muted">Firmware Name</small></h5>}
									close collapse >
									<p></p>
									<div className="widget-padding-md w-100 h-100 text-left border rounded">
										<Row>
											<Col sm={6}>
												<h6><span className="fw-semi-bold">Author: </span></h6>
												<h6><span className="fw-semi-bold">Version: </span></h6>
											</Col>
											<Col sm={6}>
												<h6>Author Name</h6>
												<h6>123456</h6>
											</Col>
										</Row>
									</div>
								</Widget>
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
