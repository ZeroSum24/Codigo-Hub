import React from 'react';
import { connect } from 'react-redux';
import {Row, Col, Container, Card, CardText, Button, Badge} from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import ThreeBoxComments from '../../external/3box-comments-react';
import { collectBounty } from '../../blockchain/contracts';
import {userVotingCallback} from "../../blockchain/userStats";
import UserReferral from "../../components/UserReferral";


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
		const proposer = this.props.proposer || {};
		return (

			<div>
				<Row>
					{' '}
					<Col xs={12} sm={12} md={9}>
						<div className="page-title">
							<h1>Bounty: <span>{bounty.title || 'Title'}</span></h1>
							<UserReferral titleStart={"Proposed"} user={proposer} history={this.props.history}/>
						</div>
					</Col>
				</Row>
				<Container fluid={true}>
					<Row>
						<Col xs={12} sm={12} md={8}>
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
						<Col xs={12} sm={12} md={4}>
							<div style={{paddingLeft:'40px'}}>
								<Row>
									{' '}
									<Col sm={4} md={2} />
									<Col sm="auto" >
										{' '}
										<Button style={{ width: '180px' }} color="primary" onClick={this.collect}>
											Collect Bounty{' '}
										</Button>
									</Col>
									<Col sm={4} md={2} />
								</Row>
							</div>
							<br />
							<br />
							<Card style={{ marginTop: '3px' }} body outline color="primary">
								<h5>Bounty Status</h5>
								<CardText >
									<Row style={{marginLeft: '1px'}}>
										<Col sm={6}>
											<h6><span >Collected: </span></h6>
											<h6><span >ETH amount: </span></h6>
										</Col>
										<Col sm={6}>
											<h6>
												{bounty.ethAmount === 0 ?
													<Badge color="info" className="text-secondary" pill>Claimed</Badge>
													:
													<Badge color="success" className="text-secondary" pill>Open</Badge>
												}
											</h6>
											<h6>{bounty.ethAmount/1e18 || ''} ETH</h6>
										</Col>
									</Row>
								</CardText>
							</Card>
							<br />
							<Card style={{ marginTop: '3px' }} body outline color="primary">
								<h5>Device Details</h5>
								<CardText >
									<Row style={{marginLeft: '1px'}}>
										<Col sm={6}>
											<h6><span >Model: </span></h6>
											<h6><span >Firmware version: </span></h6>
										</Col>
										<Col sm={6}>
											<h6>{bounty.model || ''}</h6>
											<h6>{bounty.firmwareVersion || ''}</h6>
										</Col>
									</Row>
								</CardText>
							</Card>
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
