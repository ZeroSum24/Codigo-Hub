import React from 'react';

import ListView from "../../../components/ListView";
import FirmwareWidget from "../../../components/CustomWidgets/FirmwareWidget";
import PropTypes from "prop-types";

class FirmwareHistory extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <ListView emptyText={"Sorry, there have been no firmware contributions made by this user."}>
          {this.props.firmwareHistory.map(i => <FirmwareWidget key={i.block} item={i} />)}
        </ListView>
      </div>
    );
  }
}

export default FirmwareHistory;

FirmwareHistory.propTypes = {
  firmwareHistory: PropTypes.array.isRequired
};
