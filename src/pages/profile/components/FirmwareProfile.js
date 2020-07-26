import React from 'react';
import { connect } from 'react-redux';

import s from '../Profile.module.scss';
import {Grid} from "@material-ui/core";

class FirmwareProfile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.root}>
        Firmware Profile
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(FirmwareProfile);