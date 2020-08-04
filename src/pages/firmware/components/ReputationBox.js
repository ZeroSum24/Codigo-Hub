import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { IconButton } from '@material-ui/core';

import { Card, CardBody, CardText, Col, Row } from 'reactstrap';
import { thumbsDownFirmware, thumbsUpFirmware, thumbsNeutralFirmware } from '../../../blockchain/contracts';

class ReputationBox extends React.Component {

  /**
   * Thumbs up or down or neutral
   * @param {String} block
   * @param {number} up 1/0/-1
   **/
  thumbs = (block, up) => {
    if (up == this.props.mineLike) {
      return thumbsNeutralFirmware(block);
    } else if (up) {
      return thumbsUpFirmware(block);
    } else {
      return thumbsDownFirmware(block);
    }
  }

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
								<div style={{marginLeft: '120px'}}>
									<IconButton color={this.props.mineLike && this.props.mineLike === 1 ? 'primary' : "inherit"}>
										<ThumbUpIcon onClick={() => this.thumbs(firmware.block, 1)} /> {firmware.thumbs_up}
									</IconButton>
									<IconButton color={this.props.mineLike && this.props.mineLike === -1 ? 'primary' : "inherit"}>
										<ThumbDownIcon onClick={() => this.thumbs(firmware.block, -1)} /> {firmware.thumbs_down}
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

