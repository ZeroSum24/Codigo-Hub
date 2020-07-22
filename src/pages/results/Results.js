import React from 'react';
import ReactDOM from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Row, Col, Container, Card, CardTitle, CardText, CardImg, CardBody, Button } from 'reactstrap';

class Results extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			code: '',
			checkedArr: [ false, false, false ]
		};
	}

	render() {


		return (
			<div>
				<h1 align="centre" className="page-title">
					Firmware name &nbsp;
				</h1>
				<Container fluid={true}>
					<Row>
						<Col xs={12} sm={12} md={9}>
					
						</Col>
						<Col xs={12} sm={12} md={3}>
							<Card body outline color="primary">
								<CardTitle>Details Box</CardTitle>
								<CardText>
									With supporting text below as a natural lead-in to additional content.
								</CardText>
							</Card>
							<br />
							<br />
							<Row>
								{' '}
								<Col sm={4} md={2} />
								<Col sm="auto">
									{' '}
									<Button style={{ width: '180px' }} color="info">
										Download{' '}
									</Button>
								</Col>
								<Col sm={4} md={2} />
							</Row>
							<br />
							<Row>
								{' '}
								<Col sm={4} md={2} />
								<Col sm="auto">
									{' '}
									<Button style={{ width: '180px' }} color="primary">
										Deploy to Device{' '}
									</Button>
								</Col>
								<Col sm={4} md={2} />
							</Row>
							<br />
							<Row>
								{' '}
								<Col sm={4} md={2} />
								<Col sm="auto" md="auto">
									{' '}
									<Button style={{ width: '180px' }} color="success">
										Donate to DEV{' '}
									</Button>
								</Col>
								<Col sm={4} md={2} />
							</Row>
							<br />
							<br />
							<Card>
								<CardBody>
									<CardTitle>612</CardTitle>
									<CardText>Community Score ammount of D/L </CardText>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<Row />
				</Container>
			</div>
		);
	}
}

export default Results;
