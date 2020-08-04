import React from 'react';
import { Col, Container } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ffsOptions, ffsTypes } from '@textile/powergate-client';

import { getPG } from '../../filecoin/client';
import CreateFilecoinAddressDialog from './components/createFilecoinAddressDialog';
import BalanceSheet from './components/balanceSheet';
import AddFirmwareDialog from './components/AddFirmwareDialog';
import { registerFirmware } from '../../blockchain/contracts';
import ListFilecoinUploads from './components/ListFilecoinUploads';
import TableView from "../../components/TableView";
import FirmwareTable from "./components/FirmwareTable";
import {connect} from "react-redux";

class FilecoinInteractions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreate: false,
      showUpload: false,
      balancesList: [],
      recordsList: [],
    };
  }

  componentDidMount = () => {
    this._refresh();
  };

  _closeUploadDialog = async (hash, description, deviceType, cid, jobId) => {
    this.setState({ showUpload: false });
    this._refresh();
    if (cid == null || jobId == null) return;
    (await getPG()).ffs.watchJobs((job) => {
      console.log(job);
      if (job.status === ffsTypes.JobStatus.JOB_STATUS_CANCELED) {
        alert('File storage deal job canceled');
      } else if (job.status === ffsTypes.JobStatus.JOB_STATUS_EXECUTING) {
        console.log("job executing");
      } else if (job.status === ffsTypes.JobStatus.JOB_STATUS_QUEUED) {
        console.log("job queued");
      } else if (job.status === ffsTypes.JobStatus.JOB_STATUS_FAILED) {
        alert('File storage deal job failed');
      } else if (job.status === ffsTypes.JobStatus.JOB_STATUS_SUCCESS) {
        console.log("job success!");
      } else {
        console.log("unknown job status", job);
      }
    }, jobId);
    // here or after success?
    return registerFirmware(hash, cid, description, deviceType)
      .then(tx_hash => alert('Yas transaction succeeded with hash: ' + tx_hash))
      .catch(e => alert('Failed '+ e))
  };

  _refresh = async () => {
    const PG = await getPG();
    const { info } = await PG.ffs.info();
    let storageList = null;
    if (info.balancesList.length > 0) {
      const includeFinal = ffsOptions.withIncludeFinal(true);
      const includePending = ffsOptions.withIncludePending(true);
      const addresses = info.balancesList.map(b => b.addr.addr);
      const fromAddresses = ffsOptions.withFromAddresses(...addresses);
      storageList = await PG.ffs.listStorageDealRecords(
        includeFinal,
        includePending,
        fromAddresses,
      );
    }
    console.log(info, storageList);
    this.setState({ balancesList: info.balancesList, ...storageList });
  };

  openAddFirmware() {
    this.setState({ showUpload: true });
  }

  render() {
    const myAddress = this.props.currentUserAddr;
    return (
      <div>
        <TableView
          tableView={<FirmwareTable recordsList={this.state.recordsList} balancesList={this.state.balancesList}/>}
          addView={<AddFirmwareDialog isOpen={this.state.showUpload} onClose={this._closeUploadDialog}/>}
          addFunction={ this.openAddFirmware.bind(this)}
          addFunctionExplanation={"Upload new firmware"}
          title={"Manage Firmware"}
          usageExplanation={"Upload new Firmware and manage your Filecoin Storage Contracts."} />
      </div>
    );
  }
}


// <Container>
//   <h1 className="page-title" style={{ display: 'inline', paddingRight: '10px' }}>Filecoin Storage Deals</h1>
//   <span className="glyphicon glyphicon-plus"
//         style={{ fontSize: '24px', marginBottom: '10px', paddingRight: '10px' }} title="Upload new firmware"
//         aria-hidden="true" onClick={() => />
//     <span className="glyphicon glyphicon-refresh" style={{ fontSize: '24px', marginBottom: '10px' }}
//     title="Refresh storage deals" onClick={this._refresh} aria-hidden="true"/>
//     <Col>
//   {this.state.recordsList.length > 0 ?
//     <ListFilecoinUploads recordsList={this.state.recordsList} balancesList={this.state.balancesList} />
//     :
//     "You have no firmware uploaded to Codigo :("
//   }
//     </Col>
//     </Container>


const mapStateToProps = state => ({
  firmwareList: state.model.firmwareList,
  currentUserAddr: state.ethereum.ethereumAddress
});

export default connect(mapStateToProps)(FilecoinInteractions);
