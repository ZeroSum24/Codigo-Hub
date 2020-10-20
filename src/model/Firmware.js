export default class Firmware {
  constructor(hash, IPFS_link, description, block, developer, device_type) {
    this.name = 'Firmware for ' + device_type;
    this.version = 'v0.0.1';
    this.hash = hash;
    this.IPFS_link = IPFS_link;
    this.description = description;
    this.block = block;
    this.developer = developer;
    this.device_type = device_type;
    //TODO: Needs fixing, we need this to be stored in the smart contract
    this.github_URL = "https://bryantson.github.io/reactjs-tutorials/react-markdown-viewer/docs/walkthrough.md";
  }
}

export class FirmwareWithThumbs extends Firmware {
  constructor(hash, IPFS_link, description, block, developer, device_type, thumbs_up=0, thumbs_down=0) {
    super(hash, IPFS_link, description, block, developer, device_type);
    this.thumbs_up = thumbs_up;
    this.thumbs_down = thumbs_down;
    this.communityScore = '322';
    this.amountOfDownloads = '5000';
  }
}
