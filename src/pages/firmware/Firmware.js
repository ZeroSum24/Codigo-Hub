import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ThreeBoxComments from '3box-comments-react';

import { Row, Col, Container, Card, CardTitle, CardText, CardBody, Button } from 'reactstrap';
import {connect} from "react-redux";
import DetailsBox from "./components/DetailsBox";
import FirmwareButtons from "./components/FirmwareButtons";
import ReputationBox from "./components/ReputationBox";

class Firmware extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			adminEthAddr: '0xf7367F3abDB31428Ed56032AbC14B245fCC95BA2',
			box: '123',
			myAddress: '0xf7367F3abDB31428Ed56032AbC14B245fCC95BA2'
		};
	}

	render() {

		return (
			<div>
				<div align="centre" className="page-title">
					<h1 >
						Firmware: {this.props.firmware.hash}
					</h1>
					<h4>Contributed by {this.props.developer.name} ({this.props.developer.communityScore})</h4>
				</div>
				<Container fluid={true}>
					<Row>
						<Col xs={12} sm={12} md={8}>
							<SyntaxHighlighter
								language="javascript"
								showLineNumbers
								style={atomDark}
								customStyle={{ height: '500px' }}
							>
								{this.props.source}
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
						<Col xs={12} sm={12} md={4}>
							<DetailsBox details={this.props.firmware}/>
							<br />
							<br />
							<FirmwareButtons details={this.props.firmware}/>
							<br />
							<br />
							<ReputationBox details={this.props.firmware}/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}


const mapStateToProps = (state) => ({
	firmware: state.views.firmwareStats,
	source: state.views.firmwareSource,
	developer: state.views.firmwareDeveloper
});

export default connect(mapStateToProps)(Firmware);

