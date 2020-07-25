import React from 'react';
import { Button } from 'reactstrap';

import { Container, Alert, FormGroup, InputGroup, Input, Label, Spinner } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import Widget from '../../components/Widget';
import Web3 from 'web3';
import { encodeAndAddFirmware } from '../../ipfs/client.js';
import { initWallet } from '../../blockchain/client';
import { hardcoded_device_types, registerFirmware } from '../../blockchain/contracts';

const idleButtonText = 'Add Firmware to Còdigo';
const ipfsUploadText = 'Uploading to IPFS';
const ethPerform = 'Registering firmware to repository';

class AddFirmware extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: {
				position: 'top-right',
				autoClose: 5000,
				closeOnClick: false,
				pauseOnHover: false,
				draggable: true
			},
			description: '',
			deviceType: '',
			hash: '',
			file: null,
			filetype: '',
			buttonText: idleButtonText
		};
		this.changeDescription = this.changeDescription.bind(this);
		this.changeFile = this.changeFile.bind(this);
		this.changeDeviceType = this.changeDeviceType.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {}

	changeFile(event) {
		const file = event.target.files[0];
		this.setState({ file: file, filetype: file == null ? '' : file.type });
	}

	changeDescription(e) {
		this.setState({ description: e.target.value });
	}

	changeDeviceType(e) {
		this.setState({ deviceType: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();
		const reader = new FileReader();
		reader.onloadend = () => {
			const buffer = reader.result;
			const hash = Web3.utils.sha3(Buffer.from(buffer).toString('hex'));
			initWallet()
				.then(() => encodeAndAddFirmware(buffer))
				.then((cid) => {
					this.setState({ buttonText: ethPerform });
					return registerFirmware(hash, cid, this.state.description, this.state.deviceType);
				})
				.then((tx_hash) => alert('Yas transaction succeeded with hash: ' + tx_hash))
				.catch((e) => alert('Failed: ' + e))
				.finally(() => this.setState({ buttonText: idleButtonText }));
		};
		reader.readAsArrayBuffer(this.state.file);
		this.setState({ buttonText: ipfsUploadText });
	}

	render() {
		return (
			<Container>
				<Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Add Firmware</h3>}>
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
			</Container>
		);
	}
}

export default AddFirmware;
