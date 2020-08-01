import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { IconButton } from '@material-ui/core';
import ThreeBoxComments from '3box-comments-react';

import { Row, Col, Container, Card, CardTitle, CardText, CardBody, Button } from 'reactstrap';
import {connect} from "react-redux";

class FirmwareButtons extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			//TODO center this div please
			<div style={{alignSelf: 'center',  display: 'block', paddingLeft:'40px'}}>
				<Row>
					{' '}
					<Col sm={4} md={2} />
					<Col sm="auto">
						{' '}
						<Button style={{ width: '200px' }} color="info">
							Download{' '}
						</Button>
					</Col>
					<Col sm={4} md={2} />
				</Row>
				<br />
				<Row>
					{' '}
					<Col sm={4} md={2} />
					<Col sm="auto">
						{' '}
						<Button style={{ width: '200px' }} color="primary">
							Deploy to Device{' '}
						</Button>
					</Col>
					<Col sm={4} md={2} />
				</Row>
				<br />
				<Row>
					{' '}
					<Col sm={4} md={2} />
					<Col sm="auto" md="auto">
						{' '}
						<Button style={{ width: '200px' }} color="success">
							Donate to Developer{' '}
						</Button>
					</Col>
					<Col sm={4} md={2} />
				</Row>
			</div>
		);
	}
}

export default FirmwareButtons;

