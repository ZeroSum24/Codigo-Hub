import React from 'react';
import { connect } from 'react-redux';
import FirmwareWidget from '../../../components/CustomWidgets/FirmwareWidget';

import ListView from "../../../components/ListView";
import BountyWidget from "../../../components/CustomWidgets/BountyWidget";
import ProfileWidget from "../../../components/CustomWidgets/ProfileWidget";
import DeviceWidget from "../../../components/CustomWidgets/DeviceWidget";

import s from "../Search.module.scss";
import {
  Row,
  Col,
  Container,
  Card,
  CardTitle, 
} from 'reactstrap';

const SearchCategory = {
  FIRMWARE: "FIRMWARE",
  BOUNTY: "BOUNTY",
  USER: "USER",
  DEVICE: "DEVICE"
};


class Results extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      "selectedCategory": SearchCategory.FIRMWARE
    };

    this.changeToFirmwareCategory = this.changeToFirmwareCategory.bind(this);
    this.changeToUserResultsCategory = this.changeToUserResultsCategory.bind(this);
    this.changeToBountyResultsCategory = this.changeToBountyResultsCategory.bind(this);
    this.changeToDeviceResultsCategory = this.changeToDeviceResultsCategory.bind(this);
  }

  renderResults(param) {
    switch(param) {
      case SearchCategory.FIRMWARE:
        return (<ListView emptyText={"Sorry, no firmware has been found, why not propose a bounty?"}>
          {this.props.firmwareResults.map(e => <FirmwareWidget key={e.block} item={e} history={this.props.history}/>)}
        </ListView>);
      case SearchCategory.USER:
        return (<ListView emptyText={"Sorry, no users have  been found, why not propose a bounty?"}>
          {this.props.userResults.map(e => <ProfileWidget item={e} history={this.props.history}/>)}
        </ListView>);
      case SearchCategory.BOUNTY:
        return (<ListView emptyText={"Sorry, no bounties have been found, why not propose a bounty?"}>
          {this.props.bountyResults.map(e => <BountyWidget key={e.description} item={e} history={this.props.history}/>)}
        </ListView>);
      case SearchCategory.DEVICE:
        return (<ListView emptyText={"Sorry, no devices have been found, why not propose a bounty?"}>
          {this.props.deviceResults.map(e => <DeviceWidget key={e.serialNumber} item={e} />)}
        </ListView>);
      default:
        return 'foo';
    }
  }

  changeToFirmwareCategory() {
    this.setState({"selectedCategory": SearchCategory.FIRMWARE})
  }

  changeToUserResultsCategory() {
    this.setState({"selectedCategory": SearchCategory.USER})
  }

  changeToBountyResultsCategory() {
    this.setState({"selectedCategory": SearchCategory.BOUNTY})
  }

  changeToDeviceResultsCategory() {
    this.setState({"selectedCategory": SearchCategory.DEVICE})
  }

  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row>
            {' '}
            <Col xs={3} sm={3} md={3}>
              <Card body outline color="primary">
                <CardTitle align="center" className={s.categoryBtn} onClick={this.changeToFirmwareCategory}>Firmware ({this.props.firmwareResults.length})</CardTitle>
              </Card>
              <br />
              <Card body outline color="primary" className={s.categoryBtn}>
                <CardTitle align="center" className={s.categoryBtn} onClick={this.changeToUserResultsCategory}>Users ({this.props.userResults.length})</CardTitle>
              </Card>
              <br />
              <Card body outline color="primary">
                <CardTitle align="center" className={s.categoryBtn} onClick={this.changeToBountyResultsCategory}>Requests ({this.props.bountyResults.length})</CardTitle>
              </Card>
              <br />
              <Card body outline color="primary">
                <CardTitle align="center" className={s.categoryBtn} onClick={this.changeToDeviceResultsCategory}>Devices ({this.props.deviceResults.length})</CardTitle>
              </Card>
              <br />
            </Col>
            <Col xs={9} sm={9} md={9}>
              {this.renderResults(this.state.selectedCategory)}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bountyResults: state.search.bountyResults,
  firmwareResults: state.search.firmwareResults,
  userResults: state.search.userResults,
  deviceResults: state.search.deviceResults,
  searchText: state.search.searchText
});

export default connect(mapStateToProps)(Results);
