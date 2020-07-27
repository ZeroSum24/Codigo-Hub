import { requestFirmwareUpgrade } from '../../../mqtt/client';
import { Button, FormGroup, Input, InputGroup, Label } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { retrieveAllAvailableFirmware } from '../../../blockchain/contracts';
import Widget from '../../../components/Widget';
import { getFirmwareAsByteBuffer } from '../../../filecoin/client';
import Modal from '@material-ui/core/Modal';

/**
 *
 * @param {Device} device
 * @param {boolean} show
 * @param {Function} onClose
 * @return {*}
 * @constructor
 */
export default function FirmwareUpgradeDialog({device, onClose, show}) {
  const [selectedFirmware, setSelectedFirmware] = useState(null);
  const [availableFirmware, setAllAvailableFirmware] = useState([]);
  //TODO: filter available firmware according to device / mode type
  useEffect(() => {retrieveAllAvailableFirmware().then(fs => setAllAvailableFirmware(fs))}, [device]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const firmwareBuffer = await getFirmwareAsByteBuffer(selectedFirmware.IPFS_link);
    requestFirmwareUpgrade(device.name, firmwareBuffer.buffer);
    onClose();
  }
  const onChangeSelectedFirmware = (block) => {
    const fw = availableFirmware.filter(f => f.block === block);
    setSelectedFirmware(fw[0]);
  }
  return (
    <Modal open={show} onClose={onClose}>
      <Widget className="widget-auth mx-auto" style={{background: '#212529', marginTop: '30px'}} title={<h3 className="mt-0">Upgrade Firmware</h3>}>
        <p className="widget-auth-info">
          Please fill all fields below.
        </p>
        <form onSubmit={handleSubmit}>
          <FormGroup className="mt">
            <Label >Select firmware to deploy to {device.name}:</Label>
            <InputGroup className="input-group-no-border">
              <Input type='select'
                     className="input-transparent pl-3"
                     value={selectedFirmware == null ? '' : selectedFirmware.block}
                     onChange={e => onChangeSelectedFirmware(e.target.value)}
                     required name="Device Name">
                <option value={''} disabled>Select firmware</option>
                {availableFirmware.map(firmware => <option key={firmware.block} value={firmware.block}>{firmware.description}</option>)}
              </Input>
            </InputGroup>
          </FormGroup>

          <div className="bg-widget-transparent auth-widget-footer">
            <Button type="submit" color="warning" className="auth-btn"
                    disabled={selectedFirmware == null}
                    size="sm" style={{color: '#fff'}}>{'Deploy'}</Button>
            <p className="widget-auth-info mt-4">
            </p>
          </div>
        </form>
      </Widget>
    </Modal>
  );
}
