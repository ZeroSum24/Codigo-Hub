import React from 'react';
import { connect } from 'react-redux'

import { addBounty } from '../../blockchain/contracts';
import AddBounty from './components/AddBounty';
import TableView from "../../components/TableView";
import BountiesTable from "./components/BountiesTable";

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
    const myAddress = window.ethereum.selectedAddress.toLowerCase();
		return (
			<div>
        <TableView
          tableView={<BountiesTable bountyList={this.props.bountyList.filter(b => b.bountySetter.toLowerCase() === myAddress)}/>}
          addView={<AddBounty isOpen={this.state.isOpen} onClose={this.onAddBounty}/>}
          addFunction={ this.openAddBounty.bind(this)}
          addFunctionExplanation={"Add new Bounty"}
          title={"Manage Bounties"}
          usageExplanation={"Monitor the status of your bounties. Add or remove bounties at your leisure."} />
      </div>
		);
	}
}

const mapStateToProps = state => ({bountyList: state.model.bountyList});

export default connect(mapStateToProps)(ManageBounties);
