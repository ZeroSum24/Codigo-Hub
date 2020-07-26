
class Bounty {
  constructor(description, brand, model, ethAmount, bountySetterAddress, firmwareVersion) {
    this.description = description;
    this.brand = brand;
    this.model = model;
    this.ethAmount = ethAmount;
    this.bountySetter = bountySetterAddress;
    this.firmwareVersion = firmwareVersion;
  }
}

export default Bounty