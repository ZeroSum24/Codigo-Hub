import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';

import Dashboard from '../../pages/dashboard';
import TopFirmware from '../../pages/topFirmware';
import DeviceOverview from '../../pages/deviceOverview';
import Earnings from '../../pages/earnings';
import AddFirmware from '../../pages/addFirmware';
import AddBounty from '../../pages/addBounty';
import AvailableBounties from '../../pages/availableBounties';
import AddDevice from '../../pages/deviceOverview/components/AddDevice';
import Firmware from '../../pages/firmware';
import Search from '../../pages/search';
import Results from '../../pages/results';
import Bounty from '../../pages/bounty';



import Header from '../Header';
import Sidebar from '../Sidebar';
import BreadcrumbHistory from '../BreadcrumbHistory';
import { openSidebar, closeSidebar } from '../../actions/navigation';
import s from './Layout.module.scss';
import BalanceSheet from '../../pages/filecoin/balance';

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
										<Route path="/app/top_firmware" exact component={TopFirmware} />
										<Route path="/app/add_firmware" exact component={AddFirmware} />
										<Route path="/app/earnings" exact component={Earnings} />
										<Route path="/app/availableBounties" exact component={AvailableBounties} />
										<Route path="/app/add_bounty" exact component={AddBounty} />
										<Route path="/app/firmware" exact component={Firmware} />
										<Route path="/app/search" exact component={Search} />
										<Route path="/app/results" exact component={Results} />
										<Route path="/app/bounty" exact component={Bounty} />
									</Switch>
								</CSSTransition>
							</TransitionGroup>
							<footer className={s.contentFooter}>Còdigo Admin Panel</footer>
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
