import React from 'react';
import { Button } from 'reactstrap';
import { Alert, FormGroup, InputGroup, Input, Label, Spinner } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import Widget from '../../../components/Widget';
import Web3 from 'web3';
import { hardcoded_device_types } from '../../../blockchain/contracts';
import { getPG, upload } from '../../../filecoin/client';
import Modal from '@material-ui/core/Modal';

const idleButtonText = 'Add Firmware to Còdigo';
const readFileText = 'Reading File';
const filecoinUploadText = 'Uploading to Filecoin';

class AddFirmwareDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      deviceType: '',
      hash: '',
      file: null,
      filetype: '',
      buttonText: idleButtonText
    };
  }

  changeFile = (event) => {
    const file = event.target.files[0];
    this.setState({ file: file, filetype: file == null ? '' : file.type });
  }

  changeDescription = (e) => {
    this.setState({ description: e.target.value });
  }

  changeDeviceType = (e) => {
    this.setState({ deviceType: e.target.value });
  }

  _reset = () => {
    this.setState({
      description: '',
      deviceType: '',
      hash: '',
      file: null,
      filetype: '',
      buttonText: idleButtonText
    });

  }

  onSubmit = async (e) => {
    e.preventDefault();
    const PG = await getPG();
    this.setState({ buttonText: readFileText });
    const buffer = new Uint8Array(await this.state.file.arrayBuffer());
    const hash = Web3.utils.sha3(Buffer.from(buffer).toString('hex'));
    this.setState({ buttonText: filecoinUploadText });
    const { cid, jobId } = await upload(buffer);
    this.props.onClose(hash, this.state.description, this.state.deviceType, cid, jobId);
    this._reset();
  }

  render() {
    return (
      <Modal open={this.props.isOpen} onClose={this.props.onClose}>
        <Widget className="widget-auth mx-auto" style={{background: '#212529', marginTop: '30px'}} title={<h3 className="mt-0">Add Firmware</h3>}>
          <p className="widget-auth-info">Please fill all fields below.</p>
          <form onSubmit={this.onSubmit}>
            {this.props.errorMessage && (
              <Alert className="alert-sm widget-middle-overflow rounded-0" color="danger">
                {this.props.errorMessage}
              </Alert>
            )}
            <FormGroup className="mt">
              <Label for="description">Description</Label>
              <InputGroup className="input-group-no-border">
                <Input
                  id="description"
                  className="input-transparent pl-3"
                  value={this.state.description}
                  onChange={this.changeDescription}
                  type="textarea"
                  required
                  name="Description"
                  placeholder="E.g. fixed bug CVSxxx"
                />
              </InputGroup>
            </FormGroup>

            <FormGroup className="mt">
              <Label for="devtype">Device Type</Label>
              <InputGroup className="input-group-no-border">
                <Input
                  id="devtype"
                  className="input-transparent pl-3"
                  value={this.state.deviceType}
                  onChange={this.changeDeviceType}
                  type="select"
                  required
                  name="Device Type"
                >
                  {hardcoded_device_types.map((dt) => <option key={dt}>{dt}</option>)}
                </Input>
              </InputGroup>
            </FormGroup>

            <FormGroup className="mt">
              <Label for="file">Binary file</Label>
              {this.state.file ?
                <div style={{ marginBottom: 24 }}>
                  <div>
                    <div>Name: {this.state.file.name}</div>
                  </div>

                  <div>
                    <div>File size: {this.state.file.size}</div>
                  </div>
                </div>
                : null}
              <InputGroup>
                <Input id="file" type="file" required onChange={this.changeFile} />
              </InputGroup>
            </FormGroup>

            <div className="bg-widget-transparent auth-widget-footer">
              <Button
                type="submit"
                color="danger"
                className="auth-btn"
                size="sm"
                style={{ color: '#fff' }}
              >
                {this.state.buttonText}
                {this.state.buttonText !== idleButtonText ? (
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                ) : null}
              </Button>
              <p className="widget-auth-info mt-4" />
            </div>
          </form>
        </Widget>
      </Modal>
    );
  }
}

export default AddFirmwareDialog;