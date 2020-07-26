import React from 'react';
import { connect } from 'react-redux';
import EditProfile from '3box-profile-edit-react';

import s from '../Profile.module.scss';
import {Grid} from "@material-ui/core";

class UserDetails extends React.Component {

  constructor(props) {
    super(props);
    console.log("Profile ethereum address", this.props.ethereumAddress)

  }

  render() {
    return (
      <div className={s.root}>
        User Details PAge
      </div>
    );
  }
}

//
// <EditProfileComponent box={this.props.userBox}
//                       space={this.props.userSpace}
//                       myAddress={this.props.ethereumAddress}/>

const EditProfileComponent = ({ customFields, box, space, myAddress, myProfile, redirectFn }) => (
  <EditProfile
    // required
    box={box}
    space={space}
    currentUserAddr={myAddress}

    // optional
    customFields={customFields}
    currentUser3BoxProfile={myProfile}
    redirectFn={redirectFn}
  />
);

const mapStateToProps = state => ({
  ethereumAddress: state.ethereum.ethereumAddress,
  user3Box: state.ethereum.user3Box,
  user3Space: state.ethereum.user3Space,
});

export default connect(mapStateToProps)(UserDetails);