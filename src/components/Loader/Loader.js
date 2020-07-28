import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Loader.module.scss';
import { Grid } from '@material-ui/core';
import Welcome from 'react-welcome-page';
import CodigoImage from './images/codigo.png';

class Loader extends React.Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		size: PropTypes.number.isRequired
	};

	static defaultProps = {
		size: 120
	};

	render() {
		return (
			<React.Fragment>
				<Welcome
					loopDuration={2100}
					data={[
						{
							imageAnimation: 'flipInX',
							backgroundColor: 'rgb(73, 49, 91)',
							textColor: '#EE79EA',
							text: this.props.loadingText,
							textAnimation: 'fadeInUp',
							image: CodigoImage
						}
					]}
				>
					{' '}
				</Welcome>
			</React.Fragment>
		);
	}
}

export default Loader;
