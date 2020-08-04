import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ProfileWithStats} from "../../model/Profile";
import {initProfileView} from "../../actions/view";


class UserReferral extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(initProfileView({profile: this.props.user, history: this.props.history}));
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h4>{this.props.titleStart} by &nbsp;
          <a href="#" onClick={this.handleClick}>
            <span>{this.props.user.name} </span>
            - ({this.props.user.communityScore})
          </a>
        </h4>
      </div>
    );
  }
}


const mapStateToProps = () => ({});

export default connect(mapStateToProps)(UserReferral);

UserReferral.propTypes = {
  user: PropTypes.objectOf(ProfileWithStats).isRequired,
  history: PropTypes.func.isRequired,
  titleStart: PropTypes.string.isRequired
};
