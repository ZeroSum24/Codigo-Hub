import React from 'react';

import ListView from "../../../components/ListView";
import FirmwareWidget from "../../../components/CustomWidgets/FirmwareWidget";

class FirmwareHistory extends React.Component {
  
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
