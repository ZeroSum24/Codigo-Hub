import React from 'react';
import { connect } from 'react-redux';

class TopFirmware extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return <div />;
	}
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(TopFirmware);
