import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from "react-router-dom";

import s from './Profile.module.scss';
import {Grid} from "@material-ui/core";
import UserProfile from "./components/UserProfile";
import FirmwareHistory from "./components/FirmwareHistory";
import {retrieveProfileDetails} from "../../blockchain/userProfile";
import {retrieveFirmwareHistory} from "../../blockchain/firmwareHistory";

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "viewState": viewStates.USER_DETAILS,
      "profileDetails": retrieveProfileDetails(this.props.targetAddress, this.props.currentUserAddr),
      "firmwareHistory": retrieveFirmwareHistory(this.props.targetAddress)
    };
    this.changeToUserView = this.changeToUserView.bind(this);
    this.changeToFirmwareView = this.changeToFirmwareView.bind(this);
  }

  changeToUserView() {
    this.setState({"viewState": viewStates.USER_DETAILS})
  }

  changeToFirmwareView() {
    this.setState({"viewState": viewStates.FIRMWARE_HISTORY})
  }

  getProfileID() {
    return (new URLSearchParams(useLocation().search).get("id"));
  }

  render() {

    const userButton = this.state.viewState === viewStates.USER_DETAILS ? s.highlightButton : s.normalButton;
    const firmwareButton = this.state.viewState === viewStates.FIRMWARE_HISTORY ? s.highlightButton : s.normalButton;

    return (
      <div className={s.root}>
        <h1 className="page-title">Profile: {this.props.targetAddress}</h1>
        {/*TODO update the User Profile title above to give the users name (ideally) or address*/}
        <Grid container={true} style={{justifyContent: 'center', paddingBottom: '20px'}}>
          <Grid item xs={2}>
            <div className={userButton} onClick={this.changeToUserView}>User Profile</div>
          </Grid>
          <Grid item xs={2}>
            <div className={firmwareButton} onClick={this.changeToFirmwareView}>Firmware History</div>
          </Grid>
        </Grid>
        {this.state.viewState === viewStates.USER_DETAILS ? (<UserProfile profile={this.state.profileDetails} />):
          (<FirmwareHistory firmwareHistory={this.state.firmwareHistory}/>)}
      </div>
    );
  }
}


const viewStates = {
  USER_DETAILS: 'USER_PROFILE',
  FIRMWARE_HISTORY: 'FIRMWARE_HISTORY'
};

const mapStateToProps = state => ({
  targetAddress: state.navigation.targetProfileAddress,
  currentUserAddr: state.ethereum.ethereumAddress,
});

export default connect(mapStateToProps)(Profile);