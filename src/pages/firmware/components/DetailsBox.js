import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { IconButton } from '@material-ui/core';
import ThreeBoxComments from '3box-comments-react';

import { Row, Col, Container, Card, CardTitle, CardText, CardBody, Button } from 'reactstrap';
import {connect} from "react-redux";
import Widget from "../../../components/Widget";

class DetailsBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				<Widget title={<h5>Description</h5>} close collapse={true} collapsed={true} style={{marginBottom: '10px'}}>
					{this.props.details.description}
				</Widget>
				<Card body outline color="primary">
					<h5>Details</h5>
					<CardText >
						<Row style={{marginLeft: '1px'}}>
							<Col sm={6}>
								<h6><span >Device Type: </span></h6>
								<h6><span >IPFS Link: </span></h6>
								<h6><span >Block: </span></h6>
							</Col>
							<Col sm={6}>
								<h6>{this.props.details.device_type}</h6>
								<h6>{this.props.details.IPFS_link}</h6>
								<h6>{this.props.details.block}</h6>
							</Col>
						</Row>
					</CardText>
				</Card>
			</div>
		);
	}
}

export default DetailsBox;

