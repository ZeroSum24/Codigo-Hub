import React from 'react';
import {
  Table,
  Badge,
} from 'reactstrap';

import Widget from '../../../components/Widget';
import s from '../ManageBounties.module.scss';
import PropTypes from "prop-types";
import { collectBounty } from '../../../blockchain/contracts';
import { web3 } from '../../../blockchain/client';


class BountiesTable extends React.Component {

  collect = async (block_num) => {
    // 3628800 blocks ~12 weeks~ need to be created before a bounty is cancelable
    const timeToBountyCancelable = 3628800;
    const timeSinceCreation = (await web3.eth.getBlockNumber()) - block_num;
    const remainingBlocks = timeToBountyCancelable - timeSinceCreation;
    if (remainingBlocks <= 0) {
      collectBounty(block_num);
    } else {
      alert('You need to wait ' + remainingBlocks + ' more blocks before the bounty can be canceled. ' +
        'Developers are working hard to implement your bounty.');
    }
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
              <tr key={row.block_num}>
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
                  {web3.utils.fromWei(row.ethAmount, 'ether')}
                </td>
                <td>
                  {row.ethAmout == 0 ?
                    <Badge color="info" className="text-secondary" pill>Claimed</Badge>
                  :
                    <Badge color="success" className="text-secondary" pill>Active</Badge>
                  }
                </td>
                <td align={"center"}>
                  <span className="glyphicon glyphicon-remove-circle" title={"Remove Bounty"} aria-hidden="true"
                        onClick={() => this.collect(row.block_num)} />
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