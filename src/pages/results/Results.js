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
						{/*Bernard: Please make this so it displays number of firmwares programatically*/}
							<CardTitle align="center">Firmware (3)</CardTitle>
						</Card>
						<br />
						<Card body outline color="primary">
						{/*Bernard: Please make this so it displays number of users programatically*/}
							<CardTitle align="center">Users (4)</CardTitle>
						</Card>
						<br />
						<Card body outline color="primary">
						{/*Bernard: Please Make this so it displays number of requests programatically*/ }
							<CardTitle align="center">Requests (4)</CardTitle>
						</Card>
						<br />
						</Col>
						<Col xs={12} sm={12} md={9}>
								<h1 className="page-title">Available Firmware<span className="fw-semi-bold"></span></h1>
								{/*Bernard: Please make this so we can pass in a "Firmware" object and then they are made within a list view so it is scalable, look at how
								deviceOverview is implemented and plase implement in the same way*/}
								<Widget
					        title={<h5>Firmware Name: <small className="text-muted">Firmware Name</small></h5>}
					        close collapse >
					        <p></p>
					        <div className="widget-padding-md w-100 h-100 text-left border rounded">
					          {/*TODO there is a bug with all the text being displayed as a single line, please display as a table*/}
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
