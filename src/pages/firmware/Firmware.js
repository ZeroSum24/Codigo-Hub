import React from 'react';
import ReactDOM from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Row, Col, Container, Card, CardTitle, CardText, CardImg, CardBody, Button } from 'reactstrap';

class Firmware extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			code: '',
			checkedArr: [ false, false, false ]
		};
	}

	render() {
		const codeString = `
# Source Code
 
// The DatePicker works by supplying a date to bias towards,
as well as a default timezone.
 (num) => num + 1
`;

		return (
			<div>
				<h1 align="centre" className="page-title">
					Firmware name &nbsp;
				</h1>
				<Container fluid={true}>
					<Row>
						<Col xs={12} sm={12} md={9}>
							<SyntaxHighlighter
								language="javascript"
								showLineNumbers
								style={atomDark}
								customStyle={{ height: '500px' }}
							>
								{codeString}
							</SyntaxHighlighter>{' '}
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
								<Col md={3} />
								<Col md="auto">
									{' '}
									<Button color="primary">Download </Button>
								</Col>
								<Col md={3} />
							</Row>
							<br />
							<Row>
								{' '}
								<Col md={3} />
								<Col md="auto">
									{' '}
									<Button color="primary">Deploy to Device </Button>
								</Col>
								<Col md={3} />
							</Row>
							<br />
							<Row>
								{' '}
								<Col md={3} />
								<Col md="auto">
									{' '}
									<Button color="primary">Donate to DEV </Button>
								</Col>
								<Col md={3} />
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

export default Firmware;
