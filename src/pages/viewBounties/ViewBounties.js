import React from 'react';
import BountyWidget from '../../components/CustomWidgets/BountyWidget'
import { Row, Col, Container } from 'reactstrap';
import ListView from "../../components/ListView";
import {connect} from "react-redux";

class ViewBounties extends React.PureComponent {
	
	render() {
		return (
			<div>
				<h1 align="centre" className="page-title">
					Available Bounties &nbsp;
				</h1>
				<Container fluid={true}>
					<Row>
						<Col xs={12} sm={12} md={12}>
							<ListView emptyText={"Sorry, no bounties are currently available. Please check back soon!"}>
                {this.props.bountyList.map(e => <BountyWidget item={e} />)}
              </ListView>
					  </Col>
					</Row>
					<Row />
			 </Container>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	bountyList: state.model.bountyList
});

export default connect(mapStateToProps)(ViewBounties);
