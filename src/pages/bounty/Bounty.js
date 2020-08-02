import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container, Card, CardTitle, CardText, Button } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import ThreeBoxComments from '../../external/3box-comments-react';
import { collectBounty } from '../../blockchain/contracts';
import {userVotingCallback} from "../../blockchain/userStats";

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

  collect = () => {
    const bounty = this.props.item;
    let go = true;
    if (bounty.bountySetter.toLowerCase() === this.props.ethereumAddress) {
      go = window.confirm('You are the creator of this bounty. You can only cancel it if 3 months have passed since creation, ' +
        'to give time for developers to create. The transaction will fail otherwise. Do you wish to continue?');
    }
    if (go) collectBounty(bounty.block_num);
  }

	render() {
    const bounty = this.props.bounty || {};
		return (
			<div>
				<Container fluid={true}>
					<Row>
						{' '}
						<Col xs={12} sm={12} md={9}>
							<h1 className="page-title">
                {bounty.title || 'Title'}
							</h1>
						</Col>
						<Col xs={12} sm={12} md={3}>
							<Button style={{ marginTop: '13px' }} align="centre" color="warning">
                Eth Amount
							</Button>
						</Col>
					</Row>
					<Row>
						<Col xs={12} sm={12} md={9}>
							<SyntaxHighlighter language="javascript" style={atomDark} customStyle={{ height: '500px' }}>
								{bounty.description || 'Description'}
							</SyntaxHighlighter>{' '}
							<br />
							<br />
							<br />
							<Row>
								<Col xs="2" sm="2" md="2" />{' '}
								<Col xs="auto" sm="auto" md="auto">
									<ThreeBoxComments
										// required
										spaceName={this.props.userSpaceName}
										threadName={this.props.bounty.title} //TODO this should be updated to a hash
										adminEthAddr={this.props.proposer.address}
										// Required props for auth A. & B.
										box={this.props.userBox}
										currentUserAddr={this.props.ethereumAddress}
										votingCallback={userVotingCallback}
									/>{' '}
								</Col>
								<Col xs="2" sm="2" md="2" />
							</Row>
						</Col>
						<Col xs={12} sm={12} md={3}>
							<Card style={{ marginTop: '3px' }} body outline color="primary">
								<CardTitle>Details</CardTitle>
								<CardText>Model : {bounty.model || ''}</CardText>
                <CardText>Firmware version : {bounty.firmwareVersion || ''}</CardText>
                <CardText>Creator : {bounty.bountySetter || ''}</CardText>
                <CardText>Eth amount : {bounty.ethAmount || ''} Wei</CardText>
                <CardText>Collected : {bounty.ethAmount === 0 ? 'Yes' : 'No'}</CardText>
              </Card>
							<br />
							<br />
							<Row>
								{' '}
								<Col sm={4} md={2} />
								<Col sm="auto">
									{' '}
									<Button style={{ width: '180px' }} color="info">
                    Bounty Setter
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
									<Button style={{ width: '180px' }} color="primary" onClick={this.collect}>
										Collect Bounty{' '}
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

const mapStateToProps = state => ({
	bounty: state.views.bountyDetails,
	proposer: state.views.bountyProposer,
	ethereumAddress: state.ethereum.ethereumAddress,
	userBox: state.ethereum.userBox,
	userSpaceName: state.ethereum.userSpaceName
});

export default connect(mapStateToProps)(Bounty);
