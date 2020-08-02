
export default class Profile {
  constructor(address, name, description, image, website) {
    this.address = address;
    this.name = name;
    this.description = description;
    this.image = image;

    this.website = "N/A";
    if (website !== undefined && website !== "") {
      this.website = website
    }
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
