import React from 'react';
import { connect } from 'react-redux';
import EditProfile from '3box-profile-edit-react';
import Modal from '@material-ui/core/Modal';

class EditProfileDialog extends React.Component {

  constructor(props) {
    super(props);
    console.log("edit profile props", this.props)
  }

  render() {
    return (
      <Modal onClose={this.props.onClose} open={this.props.show} isOpen={this.props.show}>
          <EditProfileComponent box={this.props.userBox}
                                space={this.props.userBox}
                                myAddress={this.props.ethereumAddress}/>
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
  userBox: state.ethereum.userBox,
  userSpace: state.ethereum.userSpace,
});

export default connect(mapStateToProps)(EditProfileDialog);
