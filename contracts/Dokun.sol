// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

//This is my ERC20 token contract with Name: Dokun and Ticker DKN
contract Dokun is ERC20 {
    uint256 constant _initial_supply = 100000 * (10 ** 18);

    constructor() ERC20("Dokun", "DKN") {
        _mint(msg.sender, _initial_supply);
    }
}
