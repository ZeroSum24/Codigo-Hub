import React from 'react';
import { connect } from 'react-redux';
import {Grid} from "@material-ui/core";
import EditIcon from '@material-ui/icons/EditRounded';
import {Button} from 'reactstrap';

import s from '../Profile.module.scss';
import EditProfileDialog from "./EditProfileDialog";

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    console.log("User Profile addresses", this.props.profile);
    this.state = {showEditDialog: false};
  }

  showEditProfileDialog = () => {
    this.setState({showEditDialog: true});
  };

  closeEditProfileDialog = () => {
    this.setState({showEditDialog: false});
  };

  render() {

    const isCurrentUser = (this.props.profile.address === this.props.currentUserAddr);

    return (
      <div className={s.root}>
        <Grid container={true}>
          <Grid item xs={11}>
            {/*TODO add in user profile display*/}
          </Grid>
          <Grid item xs={1}>
            {isCurrentUser ? (
              <Button className={s.EditButton} color="link" onClick={this.showEditProfileDialog}>
                <EditIcon/>
              </Button>): null}
          </Grid>
        </Grid>
        <EditProfileDialog show={this.state.showEditDialog}  onClose={this.closeEditProfileDialog} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  currentUserAddr: state.ethereum.ethereumAddress
});

export default connect(mapStateToProps)(UserProfile);