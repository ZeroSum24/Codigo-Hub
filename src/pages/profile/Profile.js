import React from 'react';
import { connect } from 'react-redux';
import EditProfile from '3box-profile-edit-react';

import s from './Profile.module.scss';

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">User Profile &nbsp;
          <small>
            <small>Edit your user profile here</small>
          </small>
        </h1>
        <EditProfileComponent box={this.props.userBox}
                              space={this.props.userSpace}
                              myAddress={this.props.ethereumAddress}/>
      </div>
    );
  }
}

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
  ethereumAddress: state.ethereum.isEthereumEnabled,
  user3Box: state.ethereum.user3Box,
  user3Space: state.ethereum.user3Space,
});

export default connect(mapStateToProps)(Profile);