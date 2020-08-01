import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { dismissAlert } from '../../actions/alerts';
import s from './Sidebar.module.scss';
import LinksGroup from './LinksGroup';

import logo from '../../images/rsz_4rsz_codigo-01.png';
import { changeActiveSidebarItem } from '../../actions/navigation';
import { logoutUser } from '../../actions/user';

class Sidebar extends React.Component {
	static propTypes = {
		sidebarStatic: PropTypes.bool,
		sidebarOpened: PropTypes.bool,
		dispatch: PropTypes.func.isRequired,
		activeItem: PropTypes.string,
		location: PropTypes.shape({
			pathname: PropTypes.string
		}).isRequired
	};

	static defaultProps = {
		sidebarStatic: false,
		activeItem: ''
	};

	constructor(props) {
		super(props);
		this.doLogout = this.doLogout.bind(this);
	}

	componentDidMount() {
		this.element.addEventListener(
			'transitionend',
			() => {
				if (this.props.sidebarOpened) {
					this.element.classList.add(s.sidebarOpen);
				}
			},
			false
		);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.sidebarOpened !== this.props.sidebarOpened) {
			if (nextProps.sidebarOpened) {
				this.element.style.height = `${this.element.scrollHeight}px`;
			} else {
				this.element.classList.remove(s.sidebarOpen);
				setTimeout(() => {
					this.element.style.height = '';
				}, 0);
			}
		}
	}

	dismissAlert(id) {
		this.props.dispatch(dismissAlert(id));
	}

	doLogout() {
		this.props.dispatch(logoutUser());
	}

	render() {
		return (
			<nav
				className={cx(s.root)}
				ref={(nav) => {
					this.element = nav;
				}}>
				<header className={s.logo}>
					<img src={logo} alt="..." />
					<a href="/">
						Código <span className="fw-bold">Hub</span>
					</a>
				</header>
				<ul className={s.nav}>
					<LinksGroup
						onActiveSidebarItemChange={(activeItem) =>
							this.props.dispatch(changeActiveSidebarItem(activeItem))}
						activeItem={this.props.activeItem}
						header="Home"
						isHeader
						iconName="fi flaticon-home"
						link="/app/main"
						index="main"
					/>
					<h5 className={[ s.navTitle, s.groupTitle ].join(' ')}>Devices</h5>
					<LinksGroup
						onActiveSidebarItemChange={(activeItem) =>
							this.props.dispatch(changeActiveSidebarItem(activeItem))}
						activeItem={this.props.activeItem}
						header="Overview"
						isHeader
						iconName="fi flaticon-network"
						link="/app/device_overview"
						index="core"
					/>
					<h5 className={[ s.navTitle, s.groupTitle ].join(' ')}>Developer</h5>

					<LinksGroup
						onActiveSidebarItemChange={(activeItem) =>
							this.props.dispatch(changeActiveSidebarItem(activeItem))}
						activeItem={this.props.activeItem}
						header="Manage Firmware"
						isHeader
						iconName="fi flaticon-plus"
						link="/app/manage_firmware"
						index="manage_firmware"
					/>
					<LinksGroup
						onActiveSidebarItemChange={(activeItem) =>
							this.props.dispatch(changeActiveSidebarItem(activeItem))}
						activeItem={this.props.activeItem}
						header="Earnings"
						isHeader
						iconName="glyphicon glyphicon-usd"
						link="/app/earnings"
						index="main"
					/>
					<h5 className={[ s.navTitle, s.groupTitle ].join(' ')}>Community</h5>
					<LinksGroup
						onActiveSidebarItemChange={(activeItem) =>
							this.props.dispatch(changeActiveSidebarItem(activeItem))}
						activeItem={this.props.activeItem}
						header="Firmware"
						isHeader
						iconName="fi flaticon-star"
						link="/app/view_firmware"
						index="ui"
					/>

					<LinksGroup
						onActiveSidebarItemChange={(activeItem) =>
							this.props.dispatch(changeActiveSidebarItem(activeItem))}
						activeItem={this.props.activeItem}
						header="Bounties"
						isHeader
						iconName="fi flaticon-layers"
						link="/app/view_bounties"
						index="ui"
					/>

				</ul>
			</nav>
		);
	}
}

function mapStateToProps(store) {
	return {
		sidebarOpened: store.navigation.sidebarOpened,
		sidebarStatic: store.navigation.sidebarStatic,
		alertsList: store.alerts.alertsList,
		activeItem: store.navigation.activeItem
	};
}

export default withRouter(connect(mapStateToProps)(Sidebar));
