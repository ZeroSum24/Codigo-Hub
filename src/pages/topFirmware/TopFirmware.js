import React from 'react';
import AvailableBountiesWidget from './components/AvailableBountyWidget'
import { Row, Col, Container } from 'reactstrap';

class TopFirmware extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			users:[],
			bounties: [
				{id:'name', value: 'Name'},
				{id:'author', value: 'author'},
				{id:'version', value: 'version'}
			],
			requests: []
		};
	}

	render() {
		return (
			<div>
				<h1 align="centre" className="page-title">
					Available Bounties &nbsp;
				</h1>
				<Container fluid={true}>
					<Row>
						<Col xs={12} sm={12} md={12}>
								<BountiesListView bounties={this.state.bounties}/>
					  </Col>
					</Row>
					<Row />
			 </Container>
			</div>
		);
	}
}

function BountiesListView(props) {
    let view;
    if (props.bounties.length > 0) {
      		view = (props.bounties.map((item) => <AvailableBountiesWidget bounty={item}/>));
    } else {
      view = (<div align ="center">Sorry, no bounties are currently available. Please check back soon!</div>);
    }
  return view
}

export default TopFirmware;
