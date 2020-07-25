import React from 'react';
import {connect} from "react-redux";
import Widget from "../../components/Widget";
import FirmwareWidget from './components/firmwareWidget'


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
			firmwares: [
				{id:'name', value: 'Name'},
				{id:'author', value: 'author'},
				{id:'version', value: 'version'}
			],
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
								      <FirmwareListView firmwares={this.state.firmwares}/>
								</Col>
					</Row>
					<Row />
				</Container>
			</div>
		);
	}
}

function FirmwareListView(props) {
    let view;
    if (props.firmwares.length > 0) {
      		view = (props.firmwares.map((item) => <FirmwareWidget firmware={item}/>));
    } else {
      view = (<div align ="center">Sorry, no firmware has currently been found, why not many a bounty?</div>);
    }
  return view
}

export default Results;
