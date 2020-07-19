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
import { logoutUser } from '../actions/user';
import Loader from "./Loader";

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
    this.state = {isEthereumEnabled: false, wasEthereumError: false};
  }

  handleEthereumEnable() {
      try {
          // Request account access if needed
          window.ethereum.enable();
          // Accounts now exposed
          this.setState({isEthereumEnabled: true});
      } catch (error) {
          // User denied account access...
          this.setState({wasEthereumError: false});
      }
    }

  render() {
    const isEthereumEnabled = this.state.isEthereumEnabled;
    const wasEthereumError = this.state.wasEthereumError;
    let appView;
    if (isEthereumEnabled) {
      console.log("EthereumEnabledState", isEthereumEnabled);
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
    } else if (wasEthereumError) {
    appView = (<div>
                {/*TODO add in the logo here later*/}
                <div>Ethereum Account Access Denied</div>
                <button onClick={this.handleEthereumEnable}>Enable Ethereum</button>
               </div>);
    } else {
      {/*TODO make sure the loader is centered in the middle of the screen*/}
      appView = (<Loader/>);
      this.handleEthereumEnable()
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
});

export default connect(mapStateToProps)(App);
