class Device {
  constructor(name, brand, model, serialNumber, latitude= 55.945135, longitude= -3.190010) {
    this.name = name;
    this.brand = brand;
    this.model = model;
    this.serialNumber = serialNumber;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export default Device;
