import React from 'react';
import { connect } from 'react-redux';
import {Grid} from "@material-ui/core";
import EditIcon from '@material-ui/icons/EditRounded';
import s from '../Profile.module.scss';
import EditProfileDialog from "./EditProfileDialog";
import {Button,Container,Col,Row} from 'reactstrap';
import logo from '../../../images/1.png';
import Widget from '../../../components/Widget';
import ExampleComponent from "react-rounded-image";
class  UserStats extends React.Component {

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
      <div></div>
    );
  }
}


const mapStateToProps = state => ({
  currentUserAddr: state.ethereum.ethereumAddress
});

export default connect(mapStateToProps)(UserStats);
