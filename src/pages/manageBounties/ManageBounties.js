import React from 'react';
import { connect } from 'react-redux'

import { addBounty } from '../../blockchain/contracts';
import AddBounty from './addBounty/AddBounty';
import TableView from "../../components/TableView";

class ManageBounties extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};

  }

  onAddBounty = async (bounty) => {
    this.setState({isOpen: false});
    if (!bounty) return;
    console.log(bounty);
    try {
      const tx = await addBounty(bounty);
      alert('Transaction committed with id ' + tx +'. Press the refresh button when the transaction is successful.');
    } catch (e) {
      alert(e);
    }
  };

  openAddBounty() {
    this.setState({isOpen: true});
  }
	
	render() {
		return (
			<div>
        <TableView tableView={ManageBountiesTable}
                   addView={<AddBounty isOpen={this.state.isOpen}
                                       onClose={this.onAddBounty}/>}
                   addFunction={ this.openAddBounty.bind(this)}
                   addFunctionExplanation={"Add new Bounty"}
                   title={"Manage Bounties"}
                   usageExplanation={"Monitor the status of your bounties. " +
                   "Add or remove bounties at your leisure."} />
      </div>
		);
	}
}

function ManageBountiesTable() {
  return (<div></div>);
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ManageBounties);
