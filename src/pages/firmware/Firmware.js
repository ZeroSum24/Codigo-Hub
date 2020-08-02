import React from 'react';
import {connect} from "react-redux";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Row, Col, Container } from 'reactstrap';

import ThreeBoxComments from '../../external/3box-comments-react';
import DetailsBox from "./components/DetailsBox";
import FirmwareButtons from "./components/FirmwareButtons";
import ReputationBox from "./components/ReputationBox";
import {userVotingCallback} from "../../blockchain/userStats";
import FirmwareUpgradeDialog from './components/firmwareUpgradeDialog';


class Firmware extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			adminEthAddr: '0xf7367F3abDB31428Ed56032AbC14B245fCC95BA2',
			box: '123',
      showDeployDialog: false
		};
	}

  showDeployDialog = () => {
    this.setState({showDeployDialog: true});
  };

  hideDeployDialog = () => {
    this.setState({showDeployDialog: false});
  };

	render() {
    console.log(this.props);
		return (
			<div>
        {this.state.showDeployDialog &&
        <FirmwareUpgradeDialog
          onClose={this.hideDeployDialog}
          show={this.state.showDeployDialog}
          firmware={this.props.firmware}
          deviceList={this.props.deviceList} />
        }
        <div className="page-title">
					<h1 >
						{this.props.firmware.name}
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
										spaceName={this.props.userSpaceName}
										threadName={this.props.firmware.hash}
										adminEthAddr={this.props.developer.address}
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
							<DetailsBox details={this.props.firmware}/>
							<br />
							<br />
							<FirmwareButtons firmware={this.props.firmware} onDeploy={this.showDeployDialog}/>
							<br />
							<br />
							<ReputationBox details={this.props.firmware} mineLike={this.props.mineLike}/>
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
  developer: state.views.firmwareDeveloper,
  mineLike: state.views.mineLike,
  ethereumAddress: state.ethereum.ethereumAddress,
	userBox: state.ethereum.userBox,
	userSpaceName: state.ethereum.userSpaceName,
  deviceList: state.profile.deviceList,
});

export default connect(mapStateToProps)(Firmware);
