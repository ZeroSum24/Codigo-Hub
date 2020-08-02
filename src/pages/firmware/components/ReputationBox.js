import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { IconButton } from '@material-ui/core';

import { Card, CardBody, CardText, Col, Row } from 'reactstrap';
import { thumbsDownFirmware, thumbsUpFirmware } from '../../../blockchain/contracts';

class ReputationBox extends React.Component {

  render() {
	  const firmware = this.props.details || {};
		return (
			<div>
				<Card>
					<CardBody>
						<Row>
							{/*TODO make this title */}
							<Col sm={4}><h5 style={{marginTop:'10px'}}>Reputation</h5></Col>
							<Col sm={8}>
								{/*// TODO align this to the right*/}
								<div style={{marginLeft: '140px'}}>
									<IconButton color={this.props.mineLike && this.props.mineLike == 1 ? 'primary' : "inherit"}>
										<ThumbUpIcon onClick={() => thumbsUpFirmware(firmware.block)} /> {firmware.thumbs_up}
									</IconButton>
									<IconButton color={this.props.mineLike && this.props.mineLike == -1 ? 'primary' : "inherit"}>
										<ThumbDownIcon onClick={() => thumbsDownFirmware(firmware.block)} /> {firmware.thumbs_down}
									</IconButton>
								</div>
							</Col>
						</Row>
						<CardText>
							<Row style={{marginLeft: '1px'}}>
								<Col sm={6}>
									<h6><span >Community Score: </span></h6>
									<h6><span >Amount of Downloads: </span></h6>
								</Col>
								<Col sm={6}>
									<h6>{this.props.details.communityScore}</h6>
									<h6>{this.props.details.amountOfDownloads}</h6>
								</Col>
							</Row>
						</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default ReputationBox;

