import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Loader.module.scss';
import { Grid } from '@material-ui/core';

class Loader extends React.Component {
	static propTypes = {
		size: PropTypes.number.isRequired
	};

	static defaultProps = {
		size: 120
	};

	render() {
		return (
			<Grid
				style={{
					margin: '0',
					position: 'absolute',
					top: '45%'
				}}
				container
			>
				<div className={cx(s.root, this.props.className)}>
					<i className="la la-spinner la-spin" style={{ fontSize: this.props.size }} />
					<a style={{ fontSize: '36px' }}> Loading Còdigo </a>
				</div>
			</Grid>
		);
	}
}

export default Loader;
