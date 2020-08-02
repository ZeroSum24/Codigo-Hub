import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';


class TableView extends React.PureComponent {

  constructor(props) {
    super(props);
  }
	
	render() {
		return (
			<div>
        <Grid container>
          <Grid item xs={11}>
            <div className="page-title">
              <h1><span className="fw-semi-bold">{this.props.title}</span></h1>
              <h5>{this.props.usageExplanation}</h5>
            </div>
          </Grid>
          <Grid item xs={1}>
            <span className="glyphicon glyphicon-plus" style={{fontSize: '24px', paddingRight: '10px'}}
                  title={this.props.addFunctionExplanation} aria-hidden="true" onClick={this.props.addFunction} />
          </Grid>
        </Grid>
				<Container fluid={true}>
					<Row>
						<Col xs={12} sm={12} md={12}>
              {this.props.tableView}
					  </Col>
					</Row>
					<Row />
			 </Container>
        {this.props.addView}
      </div>
		);
	}
}

export default TableView;

TableView.propTypes = {
  tableView: PropTypes.element.isRequired,
  addView: PropTypes.element.isRequired,
  addFunction: PropTypes.func.isRequired,
  addFunctionExplanation: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  usageExplanation: PropTypes.string.isRequired
};

