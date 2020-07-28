import React from 'react';

import s from '../Profile.module.scss';
import ListView from "../../../components/ListView";
import FirmwareWidget from "../../../components/CustomWidgets/FirmwareWidget";

class FirmwareHistory extends React.Component {
  
  render() {
    return (
      <div className={s.root}>
        <ListView items={this.props.firmwareHistory} customWidget={FirmwareWidget}
                  emptyText={"Sorry, there have been no firmware contributions made by this user."}/>
      </div>
    );
  }
}

export default FirmwareHistory;
