import React, { Component } from 'react';
import { BreadcrumbItem } from 'reactstrap';
import uuid from 'uuid/v4';

class BreadcrumbHistory extends Component {
	renderBreadCrumbs = () => {
		let route = this.props.url
			.split('/')
			.slice(1)
			.map((route) => route.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' '));
		const length = route.length;
		return route.map(
			(item, index) =>
				length === index + 1 ? (
					<BreadcrumbItem key={uuid()} className="active">
						<strong>{item}</strong>
					</BreadcrumbItem>
				) : (
					<BreadcrumbItem key={uuid()}>{item}</BreadcrumbItem>
				)
		);
	};

	render() {
		return <React.Fragment>{this.props.url !== '/app/chat' ? <div /> : null}</React.Fragment>;
	}
}

export default BreadcrumbHistory;
