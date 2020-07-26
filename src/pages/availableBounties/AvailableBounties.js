import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container, Card, CardTitle, CardText, Button } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ThreeBoxComments from '3box-comments-react';
class AvailableBounties extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			code: '',
			checkedArr: [ false, false, false ],
			score: '123',
			adminEthAddr: '0xf7367F3abDB31428Ed56032AbC14B245fCC95BA2',
			box: '123',
			myAddress: '0xf7367F3abDB31428Ed56032AbC14B245fCC95BA2'
		};
	}

	render() {
		const codeString = `Description`;
		return (
			<div>
				Available Bounties
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(AvailableBounties);
