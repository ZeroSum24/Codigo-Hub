import React from 'react';

import { Button, Col, Row } from 'reactstrap';
import { downloadFirmwareBinary } from '../../../filecoin/client';
import { sendEth } from '../../../blockchain/client';

class FirmwareButtons extends React.Component {

	render() {

		return (
			//TODO center this div please
			<div style={{alignSelf: 'center',  display: 'block', paddingLeft:'40px'}}>
				<Row>
					{' '}
					<Col sm={4} md={2} />
					<Col sm="auto">
						{' '}
						<Button style={{ width: '200px' }} color="info"
										onClick={() => downloadFirmwareBinary(this.props.firmware.IPFS_link,
											'firmware.bin',
											'application/octet-stream')}>
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
						<Button style={{ width: '200px' }} color="primary" onClick={this.props.onDeploy}>
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
						<Button style={{ width: '200px' }} color="success" onClick={() => sendEth(this.props.firmware.developer)}>
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

