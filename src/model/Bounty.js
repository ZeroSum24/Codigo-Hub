
class Bounty {
  constructor(title, description, model, ethAmount, firmwareVersion, bountySetterAddress=0, block_num=0) {
    this.title = title;
    this.description = description;
    this.model = model;
    this.ethAmount = ethAmount;
    this.firmwareVersion = firmwareVersion;
    this.bountySetter = bountySetterAddress;
    this.block_num = block_num;
  }
}

export default Bounty
