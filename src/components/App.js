import React from 'react';
import { connect } from 'react-redux';
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
import {loginUser, logoutUser} from '../actions/user';
import Loader from "./Loader";

import { enableUserEthereum } from '../actions/user';


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
      appView = (<HashRouter>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/app/main"/>}/>
          <Route path="/app" exact render={() => <Redirect to="/app/main"/>}/>
          <PrivateRoute path="/app" dispatch={this.props.dispatch} component={LayoutComponent}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/error" exact component={ErrorPage}/>
          <Route component={ErrorPage}/>
          <Redirect from="*" to="/app/main/dashboard"/>
        </Switch>
      </HashRouter>);
    } else if (this.props.isFetching && !this.props.isEthereumEnabled) {
      // begin enable ethereum process (default application state at beginning of user flow)
      // console.log('loading fetching')
      appView = (<Loader/>); {/*TODO make sure the loader is centered in the middle of the screen*/}
    } else {
      //  An error has occurred logging users in with ethereum
      appView = (<div>
                  {/*TODO add in the logo here later*/}
                  <div>Ethereum Account Access Denied</div>
                  <button onClick={this.handleEthereumEnable}>Enable Ethereum</button>
                 </div>);
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isEthereumEnabled: state.ethereum.isEthereumEnabled,
  isFetching: state.ethereum.isFetching,
});

export default connect(mapStateToProps)(App);
