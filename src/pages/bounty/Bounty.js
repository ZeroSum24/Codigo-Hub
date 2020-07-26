import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container, Card, CardTitle, CardText, Button } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ThreeBoxComments from '3box-comments-react';
class Bounty extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			code: '',
			checkedArr: [ false, false, false ],
			score: '123',
			adminEthAddr: '0xf7367F3abDB31428Ed56032AbC14B245fCC95BA2',
			box: '123',
			myAddress: '0xf7367F3abDB31428Ed56032AbC14B245fCC95BA2'
		};
	}

	render() {
		const codeString = `Description`;
		return (
			<div>
				<Container fluid={true}>
					<Row>
						{' '}
						<Col xs={12} sm={12} md={9}>
							<h1 align="centre" className="page-title">
								Bounty Name / Title &nbsp;
							</h1>
						</Col>
						<Col xs={12} sm={12} md={3}>
							<Button style={{ marginTop: '13px' }} align="centre" color="warning">
								ETH Amount
							</Button>
						</Col>
					</Row>
					<Row>
						<Col xs={12} sm={12} md={9}>
							<SyntaxHighlighter language="javascript" style={atomDark} customStyle={{ height: '500px' }}>
								{codeString}
							</SyntaxHighlighter>{' '}
							<br />
							<br />
							<br />
							<Row>
								<Col xs="2" sm="2" md="2" />{' '}
								<Col xs="auto" sm="auto" md="auto">
									<ThreeBoxComments
										// required
										spaceName="mySpaceName"
										threadName="myThreadName"
										adminEthAddr={this.state.adminEthAddr}
										// Required props for auth A. & B.
										box={this.state.box}
										currentUserAddr={this.state.myAddress}
									/>{' '}
								</Col>
								<Col xs="2" sm="2" md="2" />
							</Row>
						</Col>
						<Col xs={12} sm={12} md={3}>
							<Card style={{ marginTop: '3px' }} body outline color="primary">
								<CardTitle>Bounty Details </CardTitle>
								<CardText>Brand :</CardText>
								<CardText>Model :</CardText>
								<CardText>Firmware version :</CardText>
							</Card>
							<br />
							<br />
							<Row>
								{' '}
								<Col sm={4} md={2} />
								<Col sm="auto">
									{' '}
									<Button style={{ width: '180px' }} color="info">
										Bounty Setter{' '}
									</Button>
								</Col>
								<Col sm={4} md={2} />
							</Row>
							<br />
							<Row>
								{' '}
								<Col sm={4} md={2} />
								<Col xs={12} sm="auto">
									{' '}
									<Button style={{ width: '180px' }} color="primary">
										Accept Bounty{' '}
									</Button>
								</Col>
								<Col sm={4} md={2} />
							</Row>
							<br />
							<br />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Bounty);
