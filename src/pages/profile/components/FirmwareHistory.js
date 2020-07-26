import React from 'react';

import s from '../Profile.module.scss';
import Widget from "../../../components/Widget";

class FirmwareHistory extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={s.root}>
        <FirmwareListView firmwareHistory={this.props.firmwareHistory}/>
      </div>
    );
  }
}

function FirmwareListView(props) {
  console.log("Firmware List Props", props);

  let view;

  if (props.firmwareHistory.length > 0) {
    view = (props.firmwareHistory.map((item) =>
        // TODO update widget to be a firmware widget and unpack history values
        <Widget key={item.serialNumber} />)
    );
  } else {
    view = (<div align ="center">Sorry, there have been no firmware contributions made by this user.</div>);
  }
  return view
}

export default FirmwareHistory;