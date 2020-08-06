pragma solidity ^0.4.0;

contract CodigoLikes {

    // user address -> firmware block_num -> 1(like) / -1 (dislike)
    mapping(address => mapping(uint256 => int256)) likes;
    // block_num -> [#likes, #dislikes]
    mapping(uint256 => int256[2]) overallLikes;

    /**
    * @dev Called by users to like or dislike an existing firmware.
    * @param thumb 1 -> thumbs up, -1 -> thumbs down, 0 -> neutral
    * @param block_num Block number of Codigo firmware
    */

    function thumbs_up_down(int256 thumb, uint256 block_num) external {
        require(thumb == 1 || thumb == 0 || thumb == -1);
        int256 like = likes[msg.sender][block_num];
        if (thumb == 1) {
            // if currently disliking it, remove a dislike
            if (like == -1) overallLikes[block_num][1]--;
            // add a like, unless currently liking it
            if (like != 1) overallLikes[block_num][0]++;
            // set the user's like
            likes[msg.sender][block_num] = 1;
        } else if (thumb == -1) {
            // if currently liking it, remove a like
            if (like == 1) overallLikes[block_num][0]--;
            // add a dislike, unless currently disliking it
            if (like != -1) overallLikes[block_num][1]++;
            // set the user's dislike
            likes[msg.sender][block_num] = -1;
        } else {
            if (like == -1) overallLikes[block_num][1]--;
            else if (like == 1) overallLikes[block_num][0]--;
            likes[msg.sender][block_num] = 0;
        }
    }

    function get_like_for_user(uint256 block_num) external view returns (int256) {
        return likes[msg.sender][block_num];
    }

    function get_all_likes(uint256 block_num) external view returns (int256, int256, int256) {
        return (overallLikes[block_num][0], overallLikes[block_num][1], likes[msg.sender][block_num]);
    }
}
