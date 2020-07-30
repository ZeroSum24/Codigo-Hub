import React from 'react';
import { connect } from 'react-redux';
import EditProfile from '3box-profile-edit-react';
import Modal from '@material-ui/core/Modal';

class EditProfileDialog extends React.Component {

  render() {
    return (
      <Modal onClose={this.props.onClose} open={this.props.show} isOpen={this.props.show}>
        <div style={{alignItems: 'center', alignSelf: 'center'}}>
          <EditProfileComponent box={this.props.userBox}
                                space={this.props.userSpace}
                                myAddress={this.props.ethereumAddress}/>
        </div>
      </Modal>
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
  ethereumAddress: state.ethereum.ethereumAddress,
  user3Box: state.ethereum.user3Box,
  user3Space: state.ethereum.user3Space,
});

export default connect(mapStateToProps)(EditProfileDialog);
