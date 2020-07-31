import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import FilterList from './components/FilterList';

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
        <Grid container>
          <Grid xs={10}>
          </Grid>
          <Grid xs={2}>
            {(this.props.children.length > 0) ? (<FilterList/>) : null}
          </Grid>
        </Grid>
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
