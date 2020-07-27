import React from 'react';
import AvailableBountiesWidget from './components/AvailableBountyWidget'
import { Row, Col, Container } from 'reactstrap';
import ListView from "../../components/ListView";
import BountyWidget from "../../components/CustomWidgets/BountyWidget";
import {connect} from "react-redux";
import FirmwareWidget from "../../components/CustomWidgets/FirmwareWidget";

class ViewFirmware extends React.PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1 align="centre" className="page-title">
					Available Firmware &nbsp;
				</h1>
				<Container fluid={true}>
					<Row>
						<Col xs={12} sm={12} md={12}>
							<ListView items={this.props.firmwareList} customWidget={FirmwareWidget}
												emptyText={"Sorry, no firmware is currently available."}/>
					  </Col>
					</Row>
					<Row />
			 </Container>
			</div>
		);
	}
}


const mapStateToProps = state => ({
	firmwareList: state.model.firmwareList
});

export default connect(mapStateToProps)(ViewFirmware);
