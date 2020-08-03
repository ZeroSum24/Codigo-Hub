import React from 'react';
import {
  Table,
  Progress,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Badge,
} from 'reactstrap';

import Widget from '../../../components/Widget';
import s from '../DeviceOverview.module.scss';
import PropTypes from "prop-types";


class BountiesTable extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Widget
        title={<h5>Your <span className="fw-semi-bold">Bounties</span></h5>} close
        bodyClass={s.mainTableWidget}
      >
        <Table striped>
          <thead>
          <tr className="fs-sm">
            <th className="hidden-sm-down">#</th>
            <th>Title</th>
            <th>Model</th>
            <th>Version</th>
            <th>Description</th>
            <th className="hidden-sm-down">ETH Amount</th>
            <th className="hidden-sm-down">Claimed</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.bountyList.map((row, id) =>
              <tr key={id}>
                <td>{id+1}</td>
                <td>
                  <span className="fw-semi-bold">{row.title}</span>
                </td>
                <td>
                  {row.model}
                </td>
                <td>
                  {row.firmwareVersion}
                </td>
                <td>
                  {row.description}
                </td>
                <td className="text-muted">
                  {row.ethAmount}
                </td>
                <td>
                  {/*TODO changed the colour depending on the status which needs to be passed in*/}
                  <Badge color="success" className="text-secondary" pill>Claimed</Badge>
                </td>
                <td align={"center"}>
                  {/*TODO add */}
                  <span className="glyphicon glyphicon-remove-circle" title={"Remove Bounty"} aria-hidden="true"
                        onClick={() => {}} />
                </td>
              </tr>,
            )
          }
          </tbody>
        </Table>
      </Widget>
    );
  }

}

export default BountiesTable;

BountiesTable.propTypes = {
  bountyList: PropTypes.array.isRequired
};
