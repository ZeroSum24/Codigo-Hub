import React from 'react';
import {connect} from "react-redux";

class AddBounty extends React.PureComponent  {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div></div>
     );
   }
}


const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AddBounty);
