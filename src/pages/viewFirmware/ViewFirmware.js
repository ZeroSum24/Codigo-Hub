import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import ListView from "../../components/ListView";
import {connect} from "react-redux";
import FirmwareWidget from "../../components/CustomWidgets/FirmwareWidget";
import { Grid } from '@material-ui/core';
import { retrieveAllAvailableFirmware } from '../../blockchain/contracts';
import { setFirmware } from '../../actions/firmware';

class ViewFirmware extends React.PureComponent {

  refresh = async () => {
    const fw = await retrieveAllAvailableFirmware();
    this.props.dispatch(setFirmware(fw));
  }

	render() {
		return (
			<div>
        <Grid container>
          <Grid item xs={11}>
            <h1 className="page-title"><span className="fw-semi-bold">Available Firmware</span></h1>
          </Grid>
          <Grid item xs={1}>
            <span className="glyphicon glyphicon-refresh" style={{ fontSize: '24px', marginBottom: '10px' }} title="Refresh available firmware" onClick={this.refresh} aria-hidden="true" />
          </Grid>
        </Grid>
				<Container fluid={true}>
					<Row>
						<Col xs={12} sm={12} md={12}>
							<ListView items={this.props.firmwareList} emptyText={"Sorry, no firmware is currently available."}>
                {this.props.firmwareList.map(i => <FirmwareWidget key={i.block} item={i}/>)}
              </ListView>
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
