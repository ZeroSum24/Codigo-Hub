import React from 'react';
import { connect } from 'react-redux';
import { parse }  from 'qs';

import s from './Profile.module.scss';
import {Grid} from "@material-ui/core";
import UserProfile from "./components/UserProfile";
import FirmwareHistory from "./components/FirmwareHistory";
import {retrieveProfileDetails} from "../../blockchain/userProfile";
import {retrieveFirmwareHistory} from "../../blockchain/firmwareHistory";
import {Button} from "reactstrap";


class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.getProfileID = this.getProfileID.bind(this);
    this.changeToUserView = this.changeToUserView.bind(this);
    this.changeToFirmwareView = this.changeToFirmwareView.bind(this);

    let targetAddress = this.getProfileID();
    this.state = {
      "viewState": viewStates.USER_DETAILS,
      "targetAddress": targetAddress,
      "profileDetails": retrieveProfileDetails(targetAddress, this.props.currentUserAddr),
      "firmwareHistory": retrieveFirmwareHistory(targetAddress)
    };
  }

  changeToUserView() {
    this.setState({"viewState": viewStates.USER_DETAILS})
  }

  changeToFirmwareView() {
    this.setState({"viewState": viewStates.FIRMWARE_HISTORY})
  }

  getProfileID() {
    return parse(this.props.location.search, {ignoreQueryPrefix: true}).id
  }

  render() {

    const userButton = this.state.viewState === viewStates.USER_DETAILS ? s.highlightButton : s.normalButton;
    const firmwareButton = this.state.viewState === viewStates.FIRMWARE_HISTORY ? s.highlightButton : s.normalButton;

    return (
      <div className={s.root}>
        <h1 className="page-title">Profile: <small>{this.state.targetAddress}</small></h1>
        {/*TODO update the User Profile title above to give the users name (ideally) or address*/}
        <Grid container={true} style={{justifyContent: 'center', paddingBottom: '20px'}}>
          <Grid item xs={2}>
            <Button className={userButton} color="link" onClick={this.changeToUserView}>User Profile</Button>
          </Grid>
          <Grid item xs={2}>
            <Button className={firmwareButton} color="link" onClick={this.changeToFirmwareView}>Firmware History</Button>
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
  currentUserAddr: state.ethereum.ethereumAddress,
});

export default connect(mapStateToProps)(Profile);