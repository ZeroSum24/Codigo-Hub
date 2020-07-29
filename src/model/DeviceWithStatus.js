import Device from './Device';

export default class DeviceWithStatus extends Device {
  constructor(name, brand, model, serialNumber, isActive) {
    super(name, brand, model, serialNumber);
    this.isActive = isActive;
  }
}