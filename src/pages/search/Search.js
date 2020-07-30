import React from 'react';
import { connect } from 'react-redux';

import Results from "./components/Results";
import SearchLoader from "../../components/SearchLoader";
import {SearchStatus} from "../../actions/search";

class Search extends React.PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			"searchStatus": this.props.searchStatus
		};

		this.renderResultStatus = this.renderResultStatus.bind(this);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if (nextProps.searchStatus !== this.state.searchStatus) {
			this.setState({ "searchStatus": nextProps.searchStatus });
		}
	}

	renderResultStatus(searchStatus) {
		switch(searchStatus) {
			case SearchStatus.COMPLETED:
				return  (<Results history={this.props.history}/>);
			case SearchStatus.ERROR:
				// TODO display some kind of error state
				return ('bar');
			default:
				// TODO update SearchLoader view to stylistically match search view
				return (<SearchLoader loadingText={"Searching"}/>);
		}
	}

	render() {

		return (
			<div>
				<div style={{paddingBottom: '35px'}}>
					<h1 align="centre" className="page-title">
						Search Page &nbsp;
					</h1>
					<h4>Displaying results for <i><strong>{this.props.searchText}</strong></i></h4>
				</div>
				{this.renderResultStatus(this.state.searchStatus)}
			</div>
		);
	}
}


const mapStateToProps = state => ({
	searchStatus: state.search.searchStatus,
	searchText: state.search.searchText,
	errorMessage: state.search.errorMessage
});

export default connect(mapStateToProps)(Search);
