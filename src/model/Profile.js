
export default class Profile {
  constructor(address, name, brand, image, website) {
    this.address = address;
    this.name = name;
    this.description = brand;
    this.image = image;
    this.website = website;
  }
}

export class ProfileWithStats extends Profile {
  constructor(address, name, brand, image, communityScore, amountOfCommentUpvotes, amountOfFirmwareContributions) {
    super(address, name, brand, image);
    this.communityScore = communityScore;
    this.amountOfCommentUpvotes = amountOfCommentUpvotes;
    this.amountOfFirmwareContributions = amountOfFirmwareContributions;
  }
}
