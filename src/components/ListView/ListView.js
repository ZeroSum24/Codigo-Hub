import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import FilterList from "./components/FilterList";

class ListView extends React.Component {

	constructor(props) {
		super(props);
	}

	static propTypes = {
		items: PropTypes.array.isRequired,
		emptyText: PropTypes.string.isRequired,
		customWidget: PropTypes.element.isRequired
	};

	static defaultProps = {
		size: 120
	};

	renderListComponent() {

		let itemList;
		if (this.props.items.length > 0) {
			itemList = this.props.items.map((item) => React.cloneElement(this.props.customWidget,{ object: item }));
		} else {
			itemList = <div style={{align: 'center', justify: 'center', textAlign:'center'}}>{this.props.emptyText}</div>;
		}
		return itemList;
	}

	render() {

		return (
				<Grid container style={{marginTop: '50px'}}>
					<Grid container >
						<Grid xs={10}>
						</Grid>
						<Grid xs={2}>
							{(this.props.items.length > 0) ? (<FilterList/>): null}
						</Grid>
					</Grid>
					{/*TODO make the sub items be centered in the page*/}
					<Grid style={{justifyContent:'center', alignContent: 'center', alignItems: 'center'}}>{this.renderListComponent()}</Grid>
				</Grid>
		);
	}
}

export default ListView;