import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Container,
    Alert,
    Button,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    Label,
} from 'reactstrap';

import Widget from '../../components/Widget';
import {registerUser, registerError, linkUserToFirmware, registerPending} from '../../actions/register';
import Login from '../login';
import s from "./Register.module.scss";
import Loader from "../../components/Loader";

class Register extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            confirmPassword: '',
            linkDeveloperCheckBox: false,
            developerAddress: '',
            developerKey: ''
        };

        this.doRegister = this.doRegister.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.isPasswordValid = this.isPasswordValid.bind(this);
        this.changeLinkDeveloperCheckBox = this.changeLinkDeveloperCheckBox.bind(this);
        this.changeDeveloperAddress = this.changeDeveloperAddress.bind(this);
        this.changeDeveloperKey = this.changeDeveloperKey.bind(this)
    }

    changePassword(event) {
        this.setState({password: event.target.value});
    }

    changeConfirmPassword(event) {
        this.setState({confirmPassword: event.target.value});
    }

    changeLinkDeveloperCheckBox(event) {
        this.setState({linkDeveloperCheckBox: !this.state.linkDeveloperCheckBox});

    }
    changeDeveloperAddress(event) {
        this.setState({developerAddress: event.target.value});
    }

    changeDeveloperKey(event) {
        this.setState({developerKey: event.target.value});
    }

    checkPassword() {
        if (!this.isPasswordValid()) {
            if (!this.state.password) {
                this.props.dispatch(registerError("Password field is empty"));
            } else {
                this.props.dispatch(registerError("Passwords are not equal"));
            }
            setTimeout(() => {
                this.props.dispatch(registerError());
            }, 3 * 1000)
        }
    }

    checkDeveloperLink() {
        if (this.state.developerAddress !== '') {
            this.props.dispatch(registerError("The developer address field is empty."));
        } else {
            this.props.dispatch(registerError("The developer key field is empty."));
        }
    }

    isPasswordValid() {
       return this.state.password && this.state.password === this.state.confirmPassword;
    }

    doRegister(e) {
        e.preventDefault();
        if (!this.isPasswordValid()) {
            this.checkPassword();
        } else {
          this.props.dispatch(registerPending());

            // Triggers the link of the developer account providing the requisite information is available in the UI.
          if (this.state.linkDeveloperCheckBox) {
            if (this.state.developerAddress === '' || this.state.developerKey === '') {
              this.checkDeveloperLink()
            } else {
              // Triggers a loading screen whilst the user registers their account
              this.props.dispatch(linkUserToFirmware(this.state.developerAddress, this.state.developerKey,
                {creds: {password: this.state.password}, history: this.props.history},
                this.props.userSpace));
            }
          } else {this.props.dispatch(registerUser(
              {creds: {password: this.state.password}, history: this.props.history},
              this.props.userSpace));
          }
        }
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/app'}}; // eslint-disable-line

        // cant access login page while logged in
        if (Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
            return (
                <Redirect to={from}/>
            );
        }
        let loadingText = this.props.linkingDeveloperAccount ? "Linking Developer Account": "Registering Account";

        return (
            <div className="auth-page">
              {this.props.registerPending ? <Loader loadingText={loadingText}/>:
                <Container>
                    <Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Register with Código Hub</h3>}>
                        <p className="widget-auth-info">
                            Please fill all fields below.
                        </p>
                        <form onSubmit={this.doRegister}>
                            {
                                this.props.errorMessage && (
                                    <Alert className="alert-sm widget-middle-overflow rounded-0" color="danger">
                                        {this.props.errorMessage}
                                    </Alert>
                                )
                            }
                            <FormGroup className="mt">
                                <Label for="text">Ethereum Address</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-user text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="threeBoxAddress" className="input-transparent pl-3"
                                                 value={this.props.ethereumAddress}
                                                 type="text" required name="threeBoxAddress"
                                                 placeholder="0x6DdD06..." readOnly/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-lock text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="password" className="input-transparent pl-3" value={this.state.password}
                                           onChange={this.changePassword} type="password"
                                           required name="password" placeholder="Password"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="confirmPassword">Confirm</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-lock text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="confirmPassword" className="input-transparent pl-3" value={this.state.confirmPassword}
                                           onChange={this.changeConfirmPassword} onBlur={this.checkPassword} type="password"
                                           required name="confirmPassword" placeholder="Confirm Password"/>
                                </InputGroup>
                            </FormGroup>
                            <hr className={`${s.divider} text-white`} />
                            <FormGroup>
                                <Label for="linkDeveloperCheckBox">Link Código Developer Account</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-link text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <InputGroupText>
                                        <Input addon type="checkbox" value={this.state.linkDeveloperCheckBox}
                                               onChange={this.changeLinkDeveloperCheckBox}
                                               aria-label="Checkbox for following text input" />
                                    </InputGroupText>
                                </InputGroup>
                            </FormGroup>
                            {this.state.linkDeveloperCheckBox ? (
                              <div>
                                <FormGroup>
                                  <Label for="developerAddress">Developer Address</Label>
                                  <InputGroup className="input-group-no-border">
                                      <InputGroupAddon addonType="prepend">
                                          <InputGroupText>
                                              <i className="la la-link text-white"/>
                                          </InputGroupText>
                                      </InputGroupAddon>
                                      <Input id="developerAddress" className="input-transparent pl-3" value={this.state.developerAddress}
                                             onChange={this.changeDeveloperAddress} onBlur={this.changeDeveloperAddress}
                                             type="text" required name="developerAddress" placeholder="0x8B2D35..."/>
                                  </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                  <Label for="developerKey">Developer Private Key</Label>
                                  <InputGroup className="input-group-no-border">
                                      <InputGroupAddon addonType="prepend">
                                          <InputGroupText>
                                              <i className="la la-link text-white"/>
                                          </InputGroupText>
                                      </InputGroupAddon>
                                      {/*TODO updae placeholder to hex*/}
                                      <Input id="developerKey" className="input-transparent pl-3" value={this.state.developerKey}
                                             onChange={this.changeDeveloperKey} onBlur={this.changeDeveloperKey}
                                             type="text" required name="developerKey" placeholder="0x4E7A62D53B7..."/>
                                  </InputGroup>
                                </FormGroup>
                              </div>): null}
                            <div className="bg-widget-transparent auth-widget-footer">
                                <Button type="submit" color="danger" className="auth-btn"
                                        size="sm" style={{color: '#fff'}}>{this.props.isFetching ? 'Loading...' : 'Register'}</Button>
                                <p className="widget-auth-info mt-4">
                                    Already have the account? Login now!
                                </p>
                                <Link className="d-block text-center mb-4" to="login">Enter the account</Link>
                            </div>
                        </form>
                    </Widget>
                </Container>}
                <footer className="auth-footer">
                    2020 &copy; Código Hub.
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.register.isFetching,
        errorMessage: state.register.errorMessage,
        ethereumAddress: state.ethereum.ethereumAddress,
        linkingDeveloperAccount: state.register.linkingDeveloperAccount,
        userSpace: state.ethereum.userSpace,
        registerPending: state.register.registerPending
    };
}

export default withRouter(connect(mapStateToProps)(Register));
