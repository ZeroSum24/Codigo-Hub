import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Progress, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { dismissAlert } from '../../actions/alerts';
import s from './Sidebar.module.scss';
import LinksGroup from './LinksGroup';

import avatar from '../../images/rsz_4rsz_codigo-01.png';
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
				}}
			>
				<header className={s.logo}>
				<img src={avatar} alt="..." />
					<a href="/">
						Código <span className="fw-bold">User Panel</span>
					</a>
				</header>
				<ul className={s.nav}>
					<LinksGroup
						onActiveSidebarItemChange={(activeItem) =>
							this.props.dispatch(changeActiveSidebarItem(activeItem))}
						activeItem={this.props.activeItem}
						header="Home"
						isHeader
						iconName="flaticon-home"
						link="/app/main"
						index="main"
					/>
					<h5 className={[s.navTitle, s.groupTitle].join(' ')}>Devices</h5>
					<LinksGroup
						onActiveSidebarItemChange={(activeItem) =>
							this.props.dispatch(changeActiveSidebarItem(activeItem))}
						activeItem={this.props.activeItem}
						header="Overview"
						isHeader
						iconName="flaticon-network"
						link="/app/device_overview"
						index="core"
					/>
					<LinksGroup
						onActiveSidebarItemChange={(activeItem) =>
							this.props.dispatch(changeActiveSidebarItem(activeItem))}
						activeItem={this.props.activeItem}
						header="Add a Device"
						isHeader
						iconName="flaticon-network"
						link="/app/add_device"
						index="core"
					/>
					<h5 className={[s.navTitle, s.groupTitle].join(' ')}>Developer</h5>
					<LinksGroup
						onActiveSidebarItemChange={(activeItem) =>
							this.props.dispatch(changeActiveSidebarItem(activeItem))}
						activeItem={this.props.activeItem}
						header="Top Firmware"
						isHeader
						iconName="flaticon-layers"
						link="/app/top_firmware"
						index="ui"
					/>
					<LinksGroup
						onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
						activeItem={this.props.activeItem}
						header="Add Firmware"
						isHeader
						iconName="flaticon-menu"
						link="/app/add_firmware"
						index="add_firmware" />
					<LinksGroup
						onActiveSidebarItemChange={(activeItem) =>
							this.props.dispatch(changeActiveSidebarItem(activeItem))}
						activeItem={this.props.activeItem}
						header="Earnings"
						isHeader
						iconName="flaticon-list"
						link="/app/earnings"
						index="main"
					/>
					<h5 className={[s.navTitle, s.groupTitle].join(' ')}>Community</h5>
					<LinksGroup
						onActiveSidebarItemChange={(activeItem) =>
							this.props.dispatch(changeActiveSidebarItem(activeItem))}
						activeItem={this.props.activeItem}
						header="Top Bounties"
						isHeader
						iconName="flaticon-layers"
						link="/app/top_bounties"
						index="ui"
					/>
					<LinksGroup
						onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
						activeItem={this.props.activeItem}
						header="Add a Bounty"
						isHeader
						iconName="flaticon-menu"
						link="/app/add_bounty"
						index="add_bounty" />
				</ul>

				{}
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
