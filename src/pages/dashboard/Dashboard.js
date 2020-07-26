import React from 'react';
import Demo from './demo';
import { Row, Col } from 'reactstrap';

import s from './Dashboard.module.scss';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={s.root}>
				<h1 align="centre" className="page-title">
					Welcome to the Código Admin Panel &nbsp;
				</h1>

			</div>
		);
	}
}

export default Dashboard;
