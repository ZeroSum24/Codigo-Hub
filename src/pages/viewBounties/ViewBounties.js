import React from 'react';
import BountyWidget from '../../components/CustomWidgets/BountyWidget';
import { Col, Container, Row } from 'reactstrap';
import ListView from '../../components/ListView';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { addBounty } from '../../blockchain/contracts';
import AddBounty from './addBounty/AddBounty';
import { setBounties } from '../../actions/model';

class ViewBounties extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};

    this.refreshComponent = this.refreshComponent.bind(this);
  }

  refreshComponent() {
    this.props.dispatch(setBounties());
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
  }
	
	render() {
		return (
			<div>
        <Grid container>
          <Grid item xs={11}>
            <h1 className="page-title"><span className="fw-semi-bold">Available Bounties</span></h1>
          </Grid>
          <Grid item xs={1}>
            <span className="glyphicon glyphicon-plus" style={{fontSize: '24px', paddingRight: '10px'}} title="Add new bounty" aria-hidden="true" onClick={() => this.setState({isOpen: true})} />
            <span className="glyphicon glyphicon-refresh" style={{ fontSize: '24px'}} title="Refresh bounties" onClick={this.refreshComponent} aria-hidden="true" />
          </Grid>
        </Grid>
				<Container fluid={true}>
					<Row>
						<Col xs={12} sm={12} md={12}>
							<ListView emptyText={"Sorry, no bounties are currently available. Please check back soon!"}>
                {this.props.bountyList.map(e => <BountyWidget key={e.block_num} item={e} history={this.props.history}/>)}
              </ListView>
					  </Col>
					</Row>
					<Row />
			 </Container>
        <AddBounty isOpen={this.state.isOpen} onClose={this.onAddBounty} />
      </div>
		);
	}
}

const mapStateToProps = state => ({
	bountyList: state.model.bountyList
});

export default connect(mapStateToProps)(ViewBounties);
