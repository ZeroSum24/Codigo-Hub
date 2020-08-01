import React from 'react';
import { Container, Form, FormGroup, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import s from './ErrorPage.module.scss';
import error from '../../images/error.png';

class ErrorPage extends React.Component {
	render() {
		return (
			<div className={s.errorPage}>
				<Container>
					<div className={`${s.errorContainer} mx-auto`}>
						<p className={s.errorInfo}>Opps, it seems that we couldn't find what you're looking for</p>
					</div>
					<div align="center">
						<img src={error} alt="..." />
					</div>
					<footer className={s.pageFooter}>2020 &copy; Código Hub</footer>
				</Container>
			</div>
		);
	}
}

export default ErrorPage;
