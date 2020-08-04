import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

class ListView extends React.Component {

  static propTypes = {
    emptyText: PropTypes.string.isRequired,
  };

  static defaultProps = {
    size: 120
  };

  render() {
    return (
      <Grid container>
        {/*TODO make the sub items be centered in the page*/}
        <Grid style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center'
        }}>{this.props.children.length > 0 ? this.props.children :
          <div style={{ align: 'center', justify: 'center', textAlign: 'center' }}>{this.props.emptyText}</div>}</Grid>
      </Grid>
    );
  }
}

export default ListView;
