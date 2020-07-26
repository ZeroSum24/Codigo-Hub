import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ProfileHover from "profile-hover";
import AutoCompleteText from './AutoCompleteText';
import {
	Navbar,
	Nav,
	NavItem,
	NavLink,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Input,
	UncontrolledAlert,
	Dropdown,
	Collapse,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Badge,
	ButtonGroup,
	Button,
	Form,
	FormGroup
} from 'reactstrap';

import Notifications from '../Notifications';
import { logoutUser } from '../../actions/user';
import {
	openSidebar,
	closeSidebar,
	changeSidebarPosition,
	changeSidebarVisibility,
	setProfileTargetAddress
} from '../../actions/navigation';
import 'animate.css';
import s from './Header.module.scss';
import 'animate.css';

class Header extends React.Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		sidebarPosition: PropTypes.string.isRequired
	};

	constructor(props) {
		super(props);

		this.doLogout = this.doLogout.bind(this);
		this.onDismiss = this.onDismiss.bind(this);
		this.toggleMessagesDropdown = this.toggleMessagesDropdown.bind(this);
		this.toggleSupportDropdown = this.toggleSupportDropdown.bind(this);
		this.toggleAccountDropdown = this.toggleAccountDropdown.bind(this);
		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.toggleSearchOpen = this.toggleSearchOpen.bind(this);

		this.state = {
			visible: true,
			messagesOpen: false,
			supportOpen: false,
			settingsOpen: false,
			searchFocused: false,
			searchOpen: false,
			notificationsOpen: false
		};
	}

	toggleNotifications = () => {
		this.setState({
			notificationsOpen: !this.state.notificationsOpen
		});
	};

	onDismiss() {
		this.setState({ visible: false });
	}

	doLogout() {
		this.props.dispatch(logoutUser());
	}

	toggleMessagesDropdown() {
		this.setState({
			messagesOpen: !this.state.messagesOpen
		});
	}

	toggleSupportDropdown() {
		this.setState({
			supportOpen: !this.state.supportOpen
		});
	}

	toggleAccountDropdown() {
		this.setState({
			accountOpen: !this.state.accountOpen
		});
	}

	toggleSearchOpen() {
		this.setState({
			searchOpen: !this.state.searchOpen
		});
	}

	toggleSidebar() {
		this.props.isSidebarOpened ? this.props.dispatch(closeSidebar()) : this.props.dispatch(openSidebar());
	}

	moveSidebar(position) {
		this.props.dispatch(changeSidebarPosition(position));
	}

	toggleVisibilitySidebar(visibility) {
		this.props.dispatch(changeSidebarVisibility(visibility));
	}

	render() {
		const Firmwares = [
			{ title: 'Uno' },
			{ title: 'Nordic' },
			{ title: 'GL-04' },
			{ title: 'SR-04' },
			{ title: 'PI 3' }
		];
		return (
			<Navbar className={`d-print-none ${s.root}`}>
				<Collapse className={`${s.searchCollapse} ml-lg-0 mr-md-3`} isOpen={this.state.searchOpen}>
					<InputGroup className={`${s.navbarForm} ${this.state.searchFocused ? s.navbarFormFocused : ''}`} />
				</Collapse>
				<Form className="d-md-down-none mr-3 ml-3" inline>
					<AutoCompleteText firmwares={Firmwares} />
				</Form>

				<Nav className="ml-md-0 d-flex nav-responsive">
					<Dropdown
						nav
						isOpen={this.state.notificationsOpen}
						toggle={this.toggleNotifications}
						id="basic-nav-dropdown"
						className={`${s.notificationsMenu}`}
						style={{ marginRight: 'auto' }}
					>
						<DropdownToggle nav caret style={{ color: '#f4f4f5', padding: 0 }}>
							<Link to={{pathname: "/app/profile?id=" + this.props.ethereumAddress}}>
									<ProfileHover
										address={this.props.ethereumAddress}
										orientation="bottom"
										noCoverImg
										showName>
									</ProfileHover>
							</Link>
						</DropdownToggle>
					</Dropdown>
					<NavItem className="d-lg-none d-md-block d-sm-none">
						<NavLink onClick={this.toggleSearchOpen} className={s.navItem} href="#">
							<i className="glyphicon glyphicon-search text-white" />
						</NavLink>
					</NavItem>
					<Dropdown nav isOpen={this.state.messagesOpen} toggle={this.toggleMessagesDropdown}>
						<DropdownMenu className={`${s.dropdownMenu} ${s.messages}`} />
					</Dropdown>
					<NavItem className={`${s.divider} text-white`} />
					<Dropdown nav isOpen={this.state.supportOpen} toggle={this.toggleSupportDropdown}>
						<DropdownMenu right className={`${s.dropdownMenu} ${s.support}`} />
					</Dropdown>
					<Dropdown nav isOpen={this.state.settingsOpen} toggle={this.toggleSettingsDropdown}>
						<DropdownToggle nav className={`${s.navItem} text-white`}>
							<i className="glyphicon glyphicon-cog" />
						</DropdownToggle>
						<DropdownMenu className={`${s.dropdownMenu} ${s.settings}`}>
							<h6>Sidebar on the</h6>
							<ButtonGroup size="sm">
								<Button color="primary" onClick={() => this.moveSidebar('left')} className={this.props.sidebarPosition === 'left' ? 'active' : ''}>Left</Button>
								<Button color="primary" onClick={() => this.moveSidebar('right')} className={this.props.sidebarPosition === 'right' ? 'active' : ''}>Right</Button>
							</ButtonGroup>
							<h6 className="mt-2">Sidebar</h6>
							<ButtonGroup size="sm">
								<Button color="primary" onClick={() => this.toggleVisibilitySidebar('show')} className={this.props.sidebarVisibility === 'show' ? 'active' : ''}>Show</Button>
								<Button color="primary" onClick={() => this.toggleVisibilitySidebar('hide')} className={this.props.sidebarVisibility === 'hide' ? 'active' : ''}>Hide</Button>
							</ButtonGroup>
						</DropdownMenu>
					</Dropdown>
					<Dropdown nav isOpen={this.state.supportOpen} toggle={this.toggleSupportDropdown}>
						<DropdownToggle nav className={`${s.navItem} text-white`}>
							<i className="glyphicon glyphicon-globe" />
							<span className={s.count}>8</span>
						</DropdownToggle>
					</Dropdown>
					<NavItem>
						<NavLink onClick={this.doLogout} className={`${s.navItem} text-white`} href="#">
							<i className="glyphicon glyphicon-off" />
						</NavLink>
					</NavItem>
					<NavItem className="d-md-none">
						<NavLink onClick={this.toggleSidebar} className={`${s.navItem} text-white`} href="#">
							<i className="fa fa-bars" />
						</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		);
	}
}

function mapStateToProps(store) {
	return {
		isSidebarOpened: store.navigation.sidebarOpened,
		sidebarVisibility: store.navigation.sidebarVisibility,
		sidebarPosition: store.navigation.sidebarPosition,
		ethereumAddress: store.ethereum.ethereumAddress
	};
}

export default withRouter(connect(mapStateToProps)(Header));
