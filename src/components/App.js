import React from 'react';
import {connect, Provider} from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

/* eslint-disable */
import ErrorPage from '../pages/error';
/* eslint-enable */

import '../styles/theme.scss';
import LayoutComponent from '../components/Layout';
import Login from '../pages/login';
import Register from '../pages/register';
import Loader from "./Loader";

import { enableUserEthereum } from '../actions/user';

import { logoutUser } from '../actions/user';
import { getWeb3 } from '../blockchain/client';
import AuthErrorView from "../pages/error/AuthErrorView";

try {
  // init blockchain read only access on load
  getWeb3();
} catch (e) {
  alert(e);
}

const PrivateRoute = ({dispatch, component, ...rest }) => {
    if (!Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
        dispatch(logoutUser());
        return (<Redirect to="/login"/>)
    } else {
        return ( // eslint-disable-line
            <Route {...rest} render={props => (React.createElement(component, props))}/>
        );
    }
};

const CloseButton = ({closeToast}) => <i onClick={closeToast} className="la la-close notifications-close"/>

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleEthereumEnable = this.handleEthereumEnable.bind(this);
  }

  handleEthereumEnable() {
    // console.log('enabling ethereum');
    this.props.dispatch(enableUserEthereum());
  }

  componentDidMount() {
    if (this.props.isFetching && !this.props.isEthereumEnabled) {
      // this represents the loading state
      this.handleEthereumEnable();
    }
  }

  render() {

    let appView;

    if (this.props.isEthereumEnabled) {
      // the user has successfully authenticated with ethereum
      appView = (<MainAppView dispatch={this.props.dispatch}/>);
    } else if (this.props.isFetching && !this.props.isEthereumEnabled) {
      // begin enable ethereum process (default application state at beginning of user flow)
      // console.log('loading fetching')
      appView = (<Loader loadingText={"Loading Código"}/>);
    } else {
      //  An error has occurred logging users in with ethereum
      appView = (<AuthErrorView onClick={this.handleEthereumEnable} title={"Ethereum Account Access Denied"}/>);
    }


    return (
        <div>
            <ToastContainer
                autoClose={5000}
                hideProgressBar
                closeButton={<CloseButton/>}
            />
          {appView}
        </div>
    );
  }
}

/**
 * Defines the primary route paths of the application.
 * @param props
 * @returns {*}
 * @constructor
 */
function MainAppView(props) {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/app/main"/>}/>
        <Route path="/app" exact render={() => <Redirect to="/app/main"/>}/>
        <PrivateRoute path="/app" dispatch={props.dispatch} component={LayoutComponent}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/error" exact component={ErrorPage}/>
        <Route component={ErrorPage}/>
        <Redirect from="*" to="/app/main/dashboard"/>
      </Switch>
    </HashRouter>);
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isEthereumEnabled: state.ethereum.isEthereumEnabled,
  isFetching: state.ethereum.isFetching,
});

export default connect(mapStateToProps)(App);
