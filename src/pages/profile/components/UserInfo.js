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
        <Grid container={true}>
          <Grid item xs={16}>
            {
              <Container>
                <Widget className="widget-auth mx-auto">
                  <div align="center">
                      <ExampleComponent
                        image={logo}
                        roundedColor=""
                        imageWidth="150"
                        imageHeight="150"
                        roundedSize="13"/>
                      <div align="center">
                        <h1 className="page-title"><span className="fw-semi-bold">User Name</span></h1>
                      </div>
                      <Row>
                        <Col sm={6}>
                          <h5><span className="fw-semi-bold">User Address: </span></h5>
                          <h5><span className="fw-semi-bold">Website:</span></h5>
                        </Col>
                        <Col sm={6}>
                          <h5>1231231223</h5>
                          <div onClick="location.href='portable-display-stands.html';" id="smallbox">www.example.com</div>
                        </Col>
                      </Row>
                      <div align="center">
                       <br></br>
                       <br></br>
                        <h5><span className="fw-semi-bold">
    I write code and break stuff. Mostly build innovative solutions that advance human civilization.
                        </span>
                        </h5>
                      </div>
                    </div>
                </Widget>
              </Container>
            }
          </Grid>
          <Grid item xs={1}>
            {isCurrentUser ? (
              <Button className={s.EditButton} color="link" onClick={this.showEditProfileDialog}>
                <EditIcon/>
              </Button>): null}
          </Grid>
        </Grid>
        <EditProfileDialog show={this.state.showEditDialog}  onClose={this.closeEditProfileDialog} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  currentUserAddr: state.ethereum.ethereumAddress
});

export default connect(mapStateToProps)(UserInfo);
