import React from 'react';
import { Button } from 'reactstrap';
import { Alert, FormGroup, InputGroup, Input, Label, Spinner } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import Widget from '../../../components/Widget';
import Web3 from 'web3';
import { hardcoded_device_types } from '../../../blockchain/contracts';
import { upload } from '../../../filecoin/client';
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
      source: null,
      filetype: '',
      buttonText: idleButtonText
    };
  }

  changeSourceCodeFile = (event) => {
    const file = event.target.files[0];
    this.setState({ [event.target.name]: file });
  }

  changeFile = (event) => {
    const file = event.target.files[0];
    this.setState({ [event.target.name]: file, filetype: file == null ? '' : file.type });
  }

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  _reset = () => {
    this.setState({
      description: '',
      deviceType: '',
      hash: '',
      file: null,
      source: null,
      filetype: '',
      buttonText: idleButtonText
    });
  }

  toBytesInt32 (num) {
    const arr = new ArrayBuffer(4); // an Int32 takes 4 bytes
    const view = new DataView(arr);
    view.setUint32(0, num, false); // byteOffset = 0; litteEndian = false
    return new Uint8Array(arr);
  }

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ buttonText: readFileText });
    const buffer = new Uint8Array(await this.state.file.arrayBuffer());
    const sourceCode = await this.state.source.arrayBuffer();

    // join source code and binary, append length of source code
    const joined = new Uint8Array(buffer.byteLength + sourceCode.byteLength + 4);
    joined.set(this.toBytesInt32(sourceCode.byteLength), 0);
    console.log(joined);
    joined.set(new Uint8Array(sourceCode), 4);
    joined.set(new Uint8Array(buffer), sourceCode.byteLength + 4);

    const hash = Web3.utils.sha3(Buffer.from(joined).toString('hex'));
    this.setState({ buttonText: filecoinUploadText });
    const { cid, jobId } = await upload(joined);
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
                  onChange={this.change}
                  type="textarea"
                  required
                  name="description"
                  placeholder="E.g. fixed bug CVSxxx"
                />
              </InputGroup>
            </FormGroup>

            <FormGroup className="mt">
              <Label for="deviceType">Device Type</Label>
              <InputGroup className="input-group-no-border">
                <Input
                  id="deviceType"
                  className="input-transparent pl-3"
                  value={this.state.deviceType}
                  onChange={this.change}
                  type="select"
                  required
                  name="deviceType"
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
                <Input name="file" type="file" required onChange={this.changeFile} />
              </InputGroup>
            </FormGroup>

            <FormGroup className="mt">
              <Label for="file">Source code</Label>
              <InputGroup>
                <Input name="source" type="file" required onChange={this.changeSourceCodeFile} />
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