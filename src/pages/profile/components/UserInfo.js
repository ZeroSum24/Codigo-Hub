import React from 'react';
import { connect } from 'react-redux';
import {Grid} from "@material-ui/core";
import EditIcon from '@material-ui/icons/EditRounded';
import s from '../Profile.module.scss';
import EditProfileDialog from "./EditProfileDialog";
import {Button,Container,Col,Row} from 'reactstrap';
import logo from '../../../images/1.png';
import Widget from '../../../components/Widget';
import ExampleComponent from "react-rounded-image";
class  UserInfo extends React.Component {

  constructor(props) {
    super(props);
    console.log("User Profile addresses", this.props.profile);
    this.state = {showEditDialog: false};
  }

  showEditProfileDialog = () => {
    this.setState({showEditDialog: true});
  };

  closeEditProfileDialog = () => {
    this.setState({showEditDialog: false});
  };

  render() {
    const isCurrentUser = (this.props.profile.address === this.props.currentUserAddr);
    return (
      <div className={s.root}>
      <Row>
        <Col sm={6}>
        <Grid align="center"  container={true}>
          <Grid align="center" item xs={12}>
            <Container>
              <Widget className="widget-auth mx-auto">
                <div align="center">
                    <ExampleComponent
                      image={this.props.profile.image}
                      roundedColor=""
                      imageWidth="150"
                      imageHeight="150"
                      roundedSize="13"/>
                    <div align="center">
                      <h1 className="page-title"><span className="fw-semi-bold">{this.props.profile.name}</span></h1>
                    </div>
                    <Row>
                      <Col sm={6}>
                        <h5><span className="fw-semi-bold">User Address: </span></h5>
                        <h5><span className="fw-semi-bold">Website:</span></h5>
                      </Col>
                      <Col sm={6}>
                        <h5>{this.props.profile.address}</h5>
                        <div onClick="location.href='portable-display-stands.html';" id="smallbox">{this.props.profile.website}</div>
                      </Col>
                    </Row>
                    <div align="center">
                     <br></br>
                     <br></br>
                      <h5><span className="fw-semi-bold">
                        {this.props.profile.communityScore}
                      </span>
                      </h5>
                    </div>
                  </div>
              </Widget>
            </Container>
          </Grid>
          <Grid item xs={1}>
            {isCurrentUser ? (
              <Button className={s.EditButton} color="link" onClick={this.showEditProfileDialog}>
                <EditIcon/>
              </Button>): null}
          </Grid>
        </Grid>
        </Col>

        <Col align="center" sm={6}>
          <Grid align="center" container={true}>
            <Grid item xs={11}>
                <Container>
                  <Widget className="widget-auth mx-auto">
                    <div align="center">
                      <div align="center">
                        <h3 className="page-title">Reputation</h3>
                      </div>
                      <hr className={`${s.divider} text-white`} />
                      <Row>
                        <Col sm={6}>
                          <h5><span className="fw-semi-bold">Community Score    </span></h5>
                        </Col>
                        <Col sm={6}>
                          <h5>{this.props.profile.communityScore}</h5>
                        </Col>
                      </Row>
                      <hr className={`${s.divider} text-white`} />
                      <Row>
                        <Col sm={6}>
                          <h6><span className="fw-semi-bold">Deployed firmware  </span></h6>
                          <h6><span className="fw-semi-bold">Amount of Comment Upvotes</span></h6>
                        </Col>
                        <Col sm={6}>
                          <h6>{this.props.profile.amountOfFirmwareContributions}</h6>
                          <h6>{this.props.profile.amountOfCommentUpvotes}</h6>
                        </Col>
                      </Row>
                    </div>
                  </Widget>
                </Container>
            </Grid>
            <Grid item xs={1}>
              {isCurrentUser ? (
                <Button className={s.EditButton} color="link" onClick={this.showEditProfileDialog}>
                  <EditIcon/>
                </Button>): null}
            </Grid>
          </Grid>
          <EditProfileDialog show={this.state.showEditDialog}  onClose={this.closeEditProfileDialog} />
        </Col>
      </Row>
      </div>

    );
  }
}


const mapStateToProps = state => ({
  currentUserAddr: state.ethereum.ethereumAddress
});

export default connect(mapStateToProps)(UserInfo);
