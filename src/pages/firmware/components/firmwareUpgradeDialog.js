import { requestFirmwareUpgrade } from '../../../mqtt/client';
import { Button, FormGroup, Input, InputGroup, Label } from 'reactstrap';
import React, { useState } from 'react';
import Widget from '../../../components/Widget';
import { getFirmwareAsByteBuffer } from '../../../filecoin/client';
import Modal from '@material-ui/core/Modal';

/**
 *
 * @param {Device[]} deviceList
 * @param {Firmware} firmware
 * @param {boolean} show
 * @param {Function} onClose
 * @return {*}
 * @constructor
 */
export default function FirmwareUpgradeDialog({deviceList, firmware, onClose, show}) {
  const [selectedDevice, setSelectedDevice] = useState(null);
  //TODO: filter available firmware according to device / mode type
  const handleSubmit = async (e) => {
    e.preventDefault();
    const firmwareBuffer = await getFirmwareAsByteBuffer(firmware.IPFS_link);
    requestFirmwareUpgrade(selectedDevice.name, firmwareBuffer.buffer);
    onClose();
  }
  const onChangeSelectedFirmware = (name) => {
    const device = deviceList.filter(d => d.name === name);
    setSelectedDevice(device[0]);
  }
  return (
    <Modal open={show} onClose={onClose}>
      <Widget className="widget-auth mx-auto" style={{background: '#212529', marginTop: '30px'}} title={<h3 className="mt-0">Upgrade Firmware</h3>}>
        <p className="widget-auth-info">
          Please fill all fields below.
        </p>
        <form onSubmit={handleSubmit}>
          <FormGroup className="mt">
            <Label >Select device to deploy to:</Label>
            <InputGroup className="input-group-no-border">
              <Input type='select'
                     className="input-transparent pl-3"
                     value={selectedDevice == null ? '' : selectedDevice.name}
                     onChange={e => onChangeSelectedFirmware(e.target.value)}
                     required name="Device Name">
                <option value={''} disabled>Select firmware</option>
                {deviceList.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
              </Input>
            </InputGroup>
          </FormGroup>

          <div className="bg-widget-transparent auth-widget-footer">
            <Button type="submit" color="warning" className="auth-btn"
                    disabled={selectedDevice == null}
                    size="sm" style={{color: '#fff'}}>{'Deploy'}</Button>
            <p className="widget-auth-info mt-4">
            </p>
          </div>
        </form>
      </Widget>
    </Modal>
  );
}
