import React from 'react';
import { connect } from 'react-redux';
import {Grid} from "@material-ui/core";

import s from '../Profile.module.scss';
import EditProfileDialog from "./EditProfileDialog";

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    console.log("User Profile addresses", this.props.currentUserAddr, 'temp', this.props.targetAddress, 'out');
    this.state = {showEditDialog: false};
  }

  showEditProfileDialog = () => {
    this.setState({showEditDialog: true});
  };

  closeEditProfileDialog = () => {
    this.setState({showEditDialog: false});
  };

  render() {

    const isCurrentUser = (this.props.targetAddress === this.props.currentUserAddr);

    return (
      <div className={s.root}>
        <Grid container={true}>
          <Grid item xs={11}>
            ......................................
          </Grid>
          <Grid item xs={1}>
            {isCurrentUser ? (
              <button onClick={this.showEditProfileDialog}>Edit Profile</button>): null}
            {/*  TODO update this button to have an edit profile icon */}
          </Grid>
        </Grid>
        <EditProfileDialog show={this.state.showEditDialog}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  targetAddress: state.navigation.targetProfileAddress,
  currentUserAddr: state.ethereum.ethereumAddress,
});

export default connect(mapStateToProps)(UserProfile);