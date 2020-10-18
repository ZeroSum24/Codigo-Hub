import * as React from 'react';
import { getPG } from '../../../filecoin/client';
import { Input, Button, Alert, FormGroup, Label, InputGroup } from 'reactstrap';
import Widget from '../../../components/Widget';
import Modal from '@material-ui/core/Modal';

const SELECT_MENU_OPTIONS = [
  { value: 'bls', name: 'BLS' },
  { value: 'secp256k1', name: 'SECP256K1' },
];

export default class CreateFilecoinAddressDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', type: SELECT_MENU_OPTIONS[0].value, makeDefault: false };
  }

  _handleCreateAddress = async (e) => {
    e.preventDefault();
    const PG = getPG();
    const response = await PG.ffs.newAddr(
      this.state.name,
      this.state.type,
      this.state.makeDefault
    );
    this.setState({ name: '', type: SELECT_MENU_OPTIONS[0].value, makeDefault: false});
    this.props.onClose();
    console.log(response);
  };

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Modal open={this.props.isOpen} onClose={this.props.onClose}>
        <Widget className="widget-auth mx-auto" style={{background: '#212529', marginTop: '30px'}} title={<h3 className="mt-0">Add Filecoin address</h3>}>
          <p className="widget-auth-info">
            Please fill all fields below.
          </p>
          <form onSubmit={this._handleCreateAddress}>
            {
              this.props.errorMessage && (
                <Alert className="alert-sm widget-middle-overflow rounded-0" color="danger">
                  {this.props.errorMessage}
                </Alert>
              )
            }
            <FormGroup className="mt">
              <Label for="name">Address Name</Label>
              <InputGroup className="input-group-no-border">
                <Input className="input-transparent pl-3"
                       value={this.state.name}
                       onChange={this._handleChange}
                       type="text"
                       required
                       name="name"
                       id={"name"}
                       placeholder="E.g. First address"/>
              </InputGroup>
            </FormGroup>

            <FormGroup className="mt">
              <Label for="type">Brand</Label>
              <InputGroup className="input-group-no-border">
                <Input
                  className="input-transparent pl-3"
                  value={this.state.type}
                  onChange={this._handleChange}
                  type="select"
                  required
                  name="type"
                  id="type"
                >
                  {SELECT_MENU_OPTIONS.map((dt) => <option key={dt.name}>{dt.name}</option>)}
                </Input>
              </InputGroup>
            </FormGroup>

            <FormGroup className="mt">
              <Label for="makeDefault">Default wallet</Label>
              <InputGroup className="input-group-no-border">
                <Input
                  className="input-transparent pl-3"
                  value={this.state.makeDefault}
                  onChange={this._handleChange}
                  type="checkbox"
                  id="makeDefault"
                  name="makeDefault"/>
              </InputGroup>
            </FormGroup>

            <div className="bg-widget-transparent auth-widget-footer">
              <Button type="submit"
                      color="warning"
                      className="auth-btn"
                      size="sm"
                      style={{ color: '#fff' }}>{this.props.isFetching ? 'Loading...' : 'Add Address'}</Button>
              <p className="widget-auth-info mt-4">
              </p>
            </div>
          </form>
        </Widget>
      </Modal>
    );
  }
}