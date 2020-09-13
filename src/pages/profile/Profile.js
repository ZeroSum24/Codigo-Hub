import React from 'react';
import { connect } from 'react-redux';

import s from './Profile.module.scss';
import {Grid} from "@material-ui/core";
import UserInfo from "./components/UserInfo";
import FirmwareHistory from "./components/FirmwareHistory";


import {Button} from "reactstrap";


class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "viewState": viewStates.USER_INFO
    };

    this.changeToUserInfoView = this.changeToUserInfoView.bind(this);
    this.changeToFirmwareView = this.changeToFirmwareView.bind(this);
  }

  changeToUserInfoView() {
    this.setState({"viewState": viewStates.USER_INFO})
  }

  changeToFirmwareView() {
    this.setState({"viewState": viewStates.FIRMWARE_HISTORY})
  }


  render() {

    const userInfoButton  = this.state.viewState === viewStates.USER_INFO        ? s.highlightButton : s.normalButton;
    const firmwareButton  = this.state.viewState === viewStates.FIRMWARE_HISTORY ? s.highlightButton : s.normalButton;

    return (
      <div className={s.root}>
        <h1 className="page-title">Profile: <small>{this.props.profile.address}</small></h1>
        {/*TODO update the User Profile title above to give the users name (ideally) or address*/}
        <Grid container={true} style={{justifyContent: 'center', paddingBottom: '40px'}}>
          <Grid item xs={2}>
            <Button className={userInfoButton}  color="link"  onClick={this.changeToUserInfoView}>User Profile</Button>
          </Grid>
          <Grid item xs={2}>
            <Button className={firmwareButton}  color="link"  onClick={this.changeToFirmwareView}>Firmware History</Button>
          </Grid>
        </Grid>
        {this.state.viewState === viewStates.USER_INFO  ? (<UserInfo  profile={this.props.profile} />):
          (<FirmwareHistory firmwareHistory={this.props.profile.firmwareHistory}/>)}
      </div>
    );
  }
}


const viewStates = {
  USER_INFO: 'USER_INFO',
  FIRMWARE_HISTORY: 'FIRMWARE_HISTORY'
};

const mapStateToProps = state => ({
  currentUserAddr: state.ethereum.ethereumAddress,
  profile: state.views.profileWithStats
});

export default connect(mapStateToProps)(Profile);
