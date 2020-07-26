import { requestFirmwareUpgrade } from '../../../mqtt/client';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { retrieveAllAvailableFirmware } from '../../../blockchain/contracts';
import AddDevice from './AddDevice';

/**
 *
 * @param {Device} device
 * @param {boolean} show
 * @param {Function} onClose
 * @return {*}
 * @constructor
 */
export default function FirmwareUpgradeDialog({device, show, onClose}) {
  const [selectedFirmware, setSelectedFirmware] = useState();
  const [availableFirmware, setAllAvailableFirmware] = useState([]);
  //TODO: filter available firmware according to device / mode type
  useEffect(() => {retrieveAllAvailableFirmware().then(fs => setAllAvailableFirmware(fs))}, [device]);
  const handleSubmit = () => {
    onClose();
    requestFirmwareUpgrade(device.name, selectedFirmware)
  }
  if (!show) return null;
  return (
    <Modal isOpen={show} toggle={onClose} >
      <ModalHeader toggle={onClose}>Upgrade firmware</ModalHeader>
      <ModalBody>
        <div>Select firmware to deploy to {device.name}:</div>
        <select value={selectedFirmware} onChange={e => setSelectedFirmware(e.target.value)}>
          {availableFirmware.map(firmware => <option key={firmware.block} value={firmware.hash}>{firmware.description}</option>)}
        </select>
        <AddDevice />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={onClose}>Cancel</Button>
        <Button color="primary" onClick={handleSubmit}>Deploy</Button>{' '}
      </ModalFooter>
    </Modal>
  );
}
