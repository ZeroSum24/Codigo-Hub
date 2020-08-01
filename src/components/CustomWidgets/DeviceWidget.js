import Widget from "../Widget";
import { Col, Row } from 'reactstrap';
import React from 'react';
import FirmwareUpgradeDialog from '../../pages/deviceOverview/components/firmwareUpgradeDialog';
import PropTypes from "prop-types";
import Device from "../../model/Device";
import { isDeviceActive, subscribeToStatusChanges, unSubscribeFromStatusChanges } from '../../mqtt/client';
import logo from '../../images/rsz_4rsz_codigo-01.png';

class DeviceWidget extends React.PureComponent {

  static propTypes = {
    item: PropTypes.objectOf(Device).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {showDialog: false, isActive: isDeviceActive(this.props.item.name)};
    this.callback = () => this.setState({isActive: true});
  }

  showFirmwareDialog = () => {
    this.setState({showDialog: true});
  };

  hideFirmwareDialog = () => {
    this.setState({showDialog: false});
  };

  // subscribe to status changes
  componentDidMount = () => {
    subscribeToStatusChanges(this.props.item.name, this.callback);
  }

  // unsubscribe from status changes
  componentWillUnmount() {
    unSubscribeFromStatusChanges(this.props.item.name, this.callback);
  }

  render() {
    const device = this.props.item;
    return (
      <>
        {this.state.showDialog && <FirmwareUpgradeDialog device={device} onClose={this.hideFirmwareDialog} show={this.state.showDialog} /> }
        <Widget
          title={<h5>Device Name: <small className="text-muted">{device.name}</small></h5>}
          close collapse >
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
          <div align="center">
            <img src={logo} alt="..." />
          </div>

          <Row>
            <Col sm={6}>
              <h3>
                <span className="fw-semi-bold">{device.brand}</span>
              </h3>
            </Col>
            <Col sm={6}>
              <h3>
                <span className="fw-semi-bold">{device.model}</span>
              </h3>
            </Col>
          </Row>
            <Row>
              <Col sm={6}>
                <h6><span className="fw-semi-bold">Serial: </span></h6>
                <h6><span className="fw-semi-bold">Status: </span></h6>
              </Col>
              <Col sm={6}>
                <h6>{device.serialNumber}</h6>
                {this.state.isActive ?
                  <span>
                    <h6 style={{display: 'inline', paddingRight: '10px'}}>Active</h6>
                    <i className={'glyphicon glyphicon-upload'}
                       style={{fontSize: '15px'}}
                       title={'Deploy Firmware'} onClick={this.showFirmwareDialog}/>
                  </span>:<h6>Inactive</h6>
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
