import React from 'react';
import { connect } from 'react-redux';

import Results from "./components/Results";

class Search extends React.PureComponent {

	constructor(props) {
		super(props);
	}

	renderResultStatus(props) {
		switch(props) {
			case props.searchCompleted:
				return (<Results />);
			case !props.searchCompleted && props.errorMessage !== '':
				// TODO display some kind of error state
				return 'bar';
			default:
				// TODO display a temporary results loader view
				return 'foo';
		}
	}

	render() {
		return (
			<div>
				<div style={{paddingBottom: '35px'}}>
					<h1 align="centre" className="page-title">
						Search Page &nbsp;
					</h1>
					<h4>Displaying results for <i>{this.props.searchText}</i></h4>
				</div>
				{this.renderResultStatus(this.props)}
			</div>
		);
	}
}


const mapStateToProps = state => ({
	searchCompleted: state.search.searchCompleted,
	searchText: state.search.searchText,
	errorMessage: state.search.errorMessage
});

export default connect(mapStateToProps)(Search);
