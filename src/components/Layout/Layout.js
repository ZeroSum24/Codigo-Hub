import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';

import Dashboard from '../../pages/dashboard';
import Profile from '../../pages/profile';
import ViewFirmware from '../../pages/viewFirmware';
import DeviceOverview from '../../pages/deviceOverview';
import Earnings from '../../pages/earnings';
import FilecoinInteractions from '../../pages/filecoinInteractions/FilecoinInteractions';
import ViewBounties from '../../pages/viewBounties';
import Firmware from '../../pages/firmware';
import Search from '../../pages/search';
import Bounty from '../../pages/bounty';
import ErrorPage from '../../pages/error';


import Header from '../Header';
import Sidebar from '../Sidebar';
import BreadcrumbHistory from '../BreadcrumbHistory';
import { openSidebar, closeSidebar } from '../../actions/navigation';
import s from './Layout.module.scss';

class Layout extends React.Component {
	static propTypes = {
		sidebarStatic: PropTypes.bool,
		sidebarOpened: PropTypes.bool,
		dispatch: PropTypes.func.isRequired
	};

	static defaultProps = {
		sidebarStatic: false,
		sidebarOpened: false
	};
	constructor(props) {
		super(props);

		this.handleSwipe = this.handleSwipe.bind(this);
	}

	handleSwipe(e) {
		if ('ontouchstart' in window) {
			if (e.direction === 4 && !this.state.chatOpen) {
				this.props.dispatch(openSidebar());
				return;
			}

			if (e.direction === 2 && this.props.sidebarOpened) {
				this.props.dispatch(closeSidebar());
				return;
			}

			this.setState({ chatOpen: e.direction === 2 });
		}
	}

	render() {
		return (
			<div
				className={[
					s.root,
					'sidebar-' + this.props.sidebarPosition,
					'sidebar-' + this.props.sidebarVisibility
				].join(' ')}
			>
				<div className={s.wrap}>
					<Header />
					{/* <Chat chatOpen={this.state.chatOpen} /> */}
					{/* <Helper /> */}
					<Sidebar />
					<Hammer onSwipe={this.handleSwipe}>
						<main className={s.content}>
							<BreadcrumbHistory url={this.props.location.pathname} />
							<TransitionGroup>
								<CSSTransition key={this.props.location.key} classNames="fade" timeout={200}>
									<Switch>
										<Route
											path="/app/main"
											exact
											render={() => <Redirect to="/app/main/dashboard" />}
										/>
										<Route path="/app/main/dashboard" exact component={Dashboard} />
										<Route path="/app/device_overview" exact component={DeviceOverview} />
										<Route path="/app/view_firmware" exact component={ViewFirmware} />
										<Route path="/app/manage_firmware" exact component={FilecoinInteractions} />
										<Route path="/app/profile" exact component={Profile} />
										<Route path="/app/earnings" exact component={Earnings} />
										<Route path="/app/view_bounties" exact component={ViewBounties} />
										<Route path="/app/firmware" exact component={Firmware} />
										<Route path="/app/search" exact component={Search} />
										<Route path="/app/bounty" exact component={Bounty} />
										<Route path="/app/error" exact component={ErrorPage} />


									</Switch>
								</CSSTransition>
							</TransitionGroup>
							<footer className={s.contentFooter}>Código Admin Panel</footer>
						</main>
					</Hammer>
				</div>
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		sidebarOpened: store.navigation.sidebarOpened,
		sidebarPosition: store.navigation.sidebarPosition,
		sidebarVisibility: store.navigation.sidebarVisibility
	};
}

export default withRouter(connect(mapStateToProps)(Layout));
