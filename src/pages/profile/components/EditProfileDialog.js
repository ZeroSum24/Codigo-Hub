import React from 'react';
import { connect } from 'react-redux';
import EditProfile from '3box-profile-edit-react';
import { Modal, ModalBody } from 'reactstrap';


class EditProfileDialog extends React.Component {

  render() {
    return (
      <Modal isOpen={this.props.show} toggle={() => this.props.onClose()}>
        <ModalBody>
          <EditProfileComponent box={this.props.userBox}
                                space={this.props.userSpace}
                                myAddress={this.props.ethereumAddress}
          />
        </ModalBody>
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
