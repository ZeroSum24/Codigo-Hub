import React from 'react';
import { connect } from 'react-redux';
import FirmwareWidget from './firmwareWidget';

import { Row, Col, Container, Card, CardTitle, CardText, CardImg, CardBody, Button } from 'reactstrap';


const SearchCategory = {
  FIRMWARE: "FIRMWARE",
  BOUNTY: "BOUNTY",
  USER: "USER"
};


class Search extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      "selectedCategory": SearchCategory.FIRMWARE
    };
  }

  renderResults(param) {
    switch(param) {
      case SearchCategory.FIRMWARE:
        return (<FirmwareListView firmwares={this.props.firmwareResults} />);
      case SearchCategory.USER:
        return 'bar';
      case SearchCategory.BOUNTY:
        return 'bar';
      default:
        return 'foo';
    }
  }

  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row>
            {' '}
            <Col xs={12} sm={12} md={2}>
              <Card body outline color="primary">
                <CardTitle align="center">Firmware ({this.props.firmwareResults.length})</CardTitle>
              </Card>
              <br />
              <Card body outline color="primary">
                <CardTitle align="center">Users ({this.props.userResults.length})</CardTitle>
              </Card>
              <br />
              <Card body outline color="primary">
                <CardTitle align="center">Requests ({this.props.bountyResults.length})</CardTitle>
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
  searchText: state.search.searchText
});

export default connect(mapStateToProps)(Search);
