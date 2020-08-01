import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { IconButton } from '@material-ui/core';
import ThreeBoxComments from '3box-comments-react';

import { Row, Col, Container, Card, CardTitle, CardText, CardBody, Button } from 'reactstrap';
import {connect} from "react-redux";

class ReputationBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

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
									<IconButton color="inherit">
										<ThumbUpIcon />{' '}
									</IconButton>
									<IconButton color="inherit">
										<ThumbDownIcon />
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

