
pragma solidity ^0.4.26;
import "./firmware_repo.sol";
contract BountyRepo {

    struct Bounty {
        string title;
        string description;
        string device_type;
        uint256 stake;
        address author;
        uint256 block_num;
    }

    Bounty[] bounties;
    FirmwareRepo fr;
    constructor(FirmwareRepo _fr) public {
        fr = _fr;
    }

    function add_bounty(string title, string description, string device_type) external payable {
        require(msg.value > 0, 'Need to pay a stake, who works for free?');
        bounties.push(Bounty(title, description, device_type, msg.value, msg.sender, block.number));
    }

    function get_number_bounties() view external returns (uint256) {
        return bounties.length;
    }

    function get_bounty(uint256 index) view external returns (string, string, string, uint256, address, uint256) {
        Bounty memory bounty = bounties[index];
        return (bounty.title, bounty.description, bounty.device_type, bounty.stake, bounty.author, bounty.block_num);
    }


    function collectBounty(uint256 block_num) external {
        for (uint256 i = 0; i < bounties.length; i++) {
            Bounty storage bounty = bounties[i];
            if (bounty.block_num == block_num){
                //                require(bounty.stake > 0, 'Already collected');
                if (msg.sender == bounty.author) {
                    // retrieving prize from expired bounty
                    cancelBounty(bounty);
                    delete bounties[i];
                    bounties.length--;
                } else {
                    // trying to satisfy bounty, theoretically here we should check that there is an upload of this developer to the 
                    // firmware repo smart contract
                    require(canCollect(bounty.device_type, bounty.block_num));
                    msg.sender.transfer(bounty.stake);
                    bounty.stake = 0;
                }
            }
        }
    }

    function cancelBounty(Bounty bounty) internal {
        // expected block time: 10sec, can cancel after ~12 weeks, plenty of time for development
        uint256 timeTillCancelable = 12 weeks * 6 * 0;
        //        require(bounty.block_num - bounty.block_num > timeTillCancelable, 'Need to wait before canceling');
        msg.sender.transfer(bounty.stake);
    }

    function canCollect(string device_type, uint256 bounty_block) public view returns (bool) {
        (,,,uint256 block_number) = fr.get_firmware(device_type, msg.sender, true);
        return block_number > bounty_block;
    }
}