import React from 'react';
import { connect } from 'react-redux';

import s from './Profile.module.scss';
import {Grid} from "@material-ui/core";
import UserDetails from "./components/UserDetails";
import FirmwareProfile from "./components/FirmwareProfile";

class Profile extends React.Component {

  constructor(props) {
    super(props);
    console.log("Profile ethereum address", this.props.ethereumAddress);

    this.state = {
      "profileView": ProfileViews.USER_DETAILS,
    };
    this.changeToUserView = this.changeToUserView.bind(this);
    this.changeToFirmwareView = this.changeToFirmwareView.bind(this);
  }

  changeToUserView() {
    this.setState({"profileView": ProfileViews.USER_DETAILS})
  }

  changeToFirmwareView() {
    this.setState({"profileView": ProfileViews.FIRMWARE_HISTORY})
  }

  render() {

    const userButton = this.state.profileView === ProfileViews.USER_DETAILS ? s.highlightButton : s.normalButton;
    const firmwareButton = this.state.profileView === ProfileViews.FIRMWARE_HISTORY ? s.highlightButton : s.normalButton;

    return (
      <div className={s.root}>
        <h1 className="page-title">User Profile &nbsp;</h1>
        <Grid container={true} style={{marginLeft: '2px'}}>
          <Grid item xs={2}>
            <div className={userButton} onClick={this.changeToUserView}>User Details</div>
          </Grid>
          <Grid item xs={2}>
            <div className={firmwareButton} onClick={this.changeToFirmwareView}>Firmware History</div>
          </Grid>
        </Grid>
        {this.state.profileView === ProfileViews.USER_DETAILS ? (<UserDetails />): (<FirmwareProfile />)}
      </div>
    );
  }
}


const ProfileViews = {
  USER_DETAILS: 'userDetails',
  FIRMWARE_HISTORY: 'firmwareProfile'
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Profile);