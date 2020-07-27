import React from 'react';
import { Row, Col } from 'reactstrap';

import s from './Dashboard.module.scss';
import Displaypage from './displaypage.png';

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
				<img src={Displaypage} alt="display picture" />
			</div>
		);
	}
}

export default Dashboard;
