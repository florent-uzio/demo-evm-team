// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FloNFT is ERC1155, Ownable {
    uint256 public totalSpply;

    constructor() ERC1155("") Ownable() {}

    function mint() public {
        unchecked {
            ++totalSpply;
        }
        _mint(
            owner(),
            1,
            1,
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWllOG5nMXFhM3p0eTlyemxrZm1obmZlMDAxMW1hb3RxaXRxc3hldSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gNke2UrUTopOg/giphy.gif"
        );
    }
}
