import React from 'react';
import {
  Table,
  Badge,
} from 'reactstrap';

import Widget from '../../../components/Widget';
import s from '../MangeFirmware.module.scss';
import PropTypes from "prop-types";
import { collectBounty } from '../../../blockchain/contracts';
import { web3 } from '../../../blockchain/client';
import {downloadFirmwareBinary, removeFromFilecoin} from "../../../filecoin/client";



const dealsColumns = [
  {
    name: 'Address',
  },
  {
    name: 'Status',
  },
  {
    name: 'Time',
  },
  {
    name: 'Size',
  },
  {
    name: 'Price per epoch',
  },
  {
    name: 'Download',
  },
  {
    name: 'Remove',
  },
];

class FirmwareTable extends React.Component {

  render() {

    // if (this.props.balancesList == null) return <div>"You have no Filecoin addresses :("</div>;
    const recordsList = this.props.recordsList;
    const balanceList = this.props.balancesList;

    return (
      <Widget
        title={<h5>Your <span className="fw-semi-bold">Firmware Contracts</span></h5>} close
        bodyClass={s.mainTableWidget}
      >
        <Table striped>

          <thead>
            <tr className="fs-sm">
              {dealsColumns.map(c => <th key={c.name}>{c.name}</th>)}
            </tr>
          </thead>
          <tbody>
          {recordsList.map(d =>
            <tr key={d.rootCid}>
              <th scope='row'>{balanceList.findIndex(b => b.addr.addr === d.addr)}</th>
              <th>{d.pending ? 'Pending' : 'Submitted'}</th>
              <th>{new Date(d.time * 1000).toLocaleDateString()}</th>
              <th>{d.dealInfo.size}</th>
              <th>{d.dealInfo.pricePerEpoch}</th>
              <th><span className={'glyphicon glyphicon-download'}
                        onClick={() => downloadFirmwareBinary(d.rootCid, 'binary.bin')}/></th>
              <th><span className={'glyphicon glyphicon-remove'}
                        onClick={() => removeFromFilecoin(d.rootCid).catch(alert)}/></th>
            </tr>)}
          </tbody>
        </Table>
      </Widget>
    );
  }
}

export default FirmwareTable;

FirmwareTable.propTypes = {
  recordsList: PropTypes.array.isRequired,
  balancesList: PropTypes.array.isRequired
};
