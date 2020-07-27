import Widget from "../../../components/Widget";
import { Col, Row } from 'reactstrap';
import React from 'react';
import FirmwareUpgradeDialog from './firmwareUpgradeDialog';

class DeviceWidget extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {showDialog: false};
  }

  showFirmwareDialog = () => {
    this.setState({showDialog: true});
  }

  hideFirmwareDialog = () => {
    this.setState({showDialog: false});
  }
  render() {
    const device = this.props.device;
    return (
      <>
        {this.state.showDialog && <FirmwareUpgradeDialog device={device} onClose={this.hideFirmwareDialog} show={this.state.showDialog} /> }
        <Widget
          title={<h5>Device Name: <small className="text-muted">{device.name}</small></h5>}
          close collapse >
          <p></p>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            {/*TODO there is a bug with all the text being displayed as a single line, please display as a table*/}
            <Row>
              <Col sm={6}>
                <h6><span className="fw-semi-bold">Brand: </span></h6>
                <h6><span className="fw-semi-bold">Model: </span></h6>
                <h6><span className="fw-semi-bold">Serial Number: </span></h6>
                <h6><span className="fw-semi-bold">Status: </span></h6>
              </Col>
              <Col sm={6}>
                <h6>{device.brand}</h6>
                <h6>{device.model}</h6>
                <h6>{device.serialNumber}</h6>
                {device.isActive ?
                  <span>
                    <h6 style={{display: 'inline', paddingRight: '10px'}}>Active</h6>
                    <i className={'glyphicon glyphicon-upload'}
                       style={{fontSize: '15px'}}
                       title={'Deploy Firmware'} onClick={this.showFirmwareDialog}/>
                  </span>
                  :
                  <h6>Inactive</h6>
                }
              </Col>
            </Row>
          </div>
        </Widget>
      </>
    );
  }
}

export default DeviceWidget;
