// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;

contract ZombieFactory {

    event NewZombie(uint zombieId, string name, uint dna);

    address public owner;

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    constructor(){
        owner = msg.sender;
    }

    function _createZombie(string memory _name, uint _dna) private {
        zombies.push(Zombie({name: _name, dna: _dna}));
        uint id = zombies.length - 1;
        emit NewZombie(id, _name, _dna);
    }

    function _generateRandomDna(string memory _str) private view returns (uint) {
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % dnaModulus;
    }

    function createRandomZombie(string memory _name) public {
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }

    function updateName(uint _zombieId, string memory _newName) public {
        zombies[_zombieId].name = _newName;
    }

}
