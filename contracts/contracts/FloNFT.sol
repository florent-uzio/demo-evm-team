// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FloNFT is ERC1155, Ownable {
    uint256 public totalSupply;

    constructor() ERC1155("") Ownable() {}

    function mint() public {
        unchecked {
            ++totalSupply;
        }
        _mint(owner(), totalSupply, 1, "");
    }
}
