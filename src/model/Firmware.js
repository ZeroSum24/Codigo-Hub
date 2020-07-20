export default class Firmware {
  constructor(hash, IPFS_link, description, block, developer, device_type) {
    this.hash = hash;
    this.IPFS_link = IPFS_link;
    this.description = description;
    this.block = block;
    this.developer = developer;
    this.device_type = device_type;
  }
}
