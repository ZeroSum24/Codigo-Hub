import React from 'react';

/**
 * Implements a standard auth error view with adjustable onclick button
 */
class AuthErrorView extends React.PureComponent {

  constructor(props) {
    super(props);
    this.title = this.props.title;
  }

  render() {
    return (
      <div>
        {/*TODO add in the logo here later*/}
        <div>{this.props.title}</div>
        {this.props.onClick !== undefined ?
          (<button onClick={this.props.onClick}>Enable Ethereum</button>): null}
      </div>)
  }
}

export default AuthErrorView;