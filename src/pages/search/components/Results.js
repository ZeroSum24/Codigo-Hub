import React from 'react';
import { connect } from 'react-redux';
import FirmwareWidget from '../../../components/CustomWidgets/FirmwareWidget';

import { Row, Col, Container, Card, CardTitle, CardText, CardImg, CardBody, Button } from 'reactstrap';


const SearchCategory = {
  FIRMWARE: "FIRMWARE",
  BOUNTY: "BOUNTY",
  USER: "USER",
  DEVICE: "DEVICE"
};


class Search extends React.PureComponent {
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
        return (<FirmwareListView firmwares={this.props.firmwareResults} />);
      case SearchCategory.USER:
        return 'user';
      case SearchCategory.BOUNTY:
        return 'bounty';
      case SearchCategory.DEVICE:
        return 'device';
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
            <Col xs={12} sm={12} md={2}>
              <Card body outline color="primary">
                <CardTitle align="center" onClick={this.changeToFirmwareCategory}>Firmware ({this.props.firmwareResults.length})</CardTitle>
              </Card>
              <br />
              <Card body outline color="primary">
                <CardTitle align="center" onClick={this.changeToUserResultsCategory}>Users ({this.props.userResults.length})</CardTitle>
              </Card>
              <br />
              <Card body outline color="primary">
                <CardTitle align="center" onClick={this.changeToBountyResultsCategory}>Requests ({this.props.bountyResults.length})</CardTitle>
              </Card>
              <br />
              <Card body outline color="primary">
                <CardTitle align="center" onClick={this.changeToDeviceResultsCategory}>Devices ({this.props.deviceResults.length})</CardTitle>
              </Card>
              <br />
            </Col>
            {this.renderResults(this.state.selectedCategory)}
          </Row>
        </Container>
      </div>
    );
  }
}

function FirmwareListView(props) {
  let view;
  if (props.firmwares.length > 0) {
    view = props.firmwares.map((item) => <FirmwareWidget firmware={item} />);
  } else {
    view = <div align="center">Sorry, no firmware has been found, why not propose a bounty?</div>;
  }
  return view;
}


const mapStateToProps = state => ({
  bountyResults: state.search.bountyResults,
  firmwareResults: state.search.firmwareResults,
  userResults: state.search.userResults,
  deviceResults: state.search.deviceResults,
  searchText: state.search.searchText
});

export default connect(mapStateToProps)(Search);
