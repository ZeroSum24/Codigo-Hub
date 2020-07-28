import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Loader.module.scss';
import {Grid} from '@material-ui/core';
import {
	Row,
	Container
}
from 'reactstrap';

import CodigoImage from './images/codigo.png';

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
					top: '40%'}}
				container>
			<Container fluid={true}>
			<Row>
				<div className={cx(s.root, this.props.className)}>
				  <img src={CodigoImage} alt="..." />
				</div>
			</Row>
			<Row>
			<div className={cx(s.root, this.props.className)}>
				<i className="la la-spinner la-spin" style={{ fontSize: this.props.size }} />
				<a style={{ fontSize: '36px' }}>{this.props.loadingText} </a>
			</div>
			</Row>
			</Container>
			</Grid>
		);
	}
}

export default Loader;
