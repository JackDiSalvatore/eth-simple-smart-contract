pragma solidity >=0.4.22 <0.8.0;

contract SimpleSmartContract {
    string public data;
    uint[] public ids;

    // Transaction (changes state)
    function set(string memory _data) public {
        data = _data;
    }

    // Call (reads state)
    function get() view public returns (string memory) {
        return data;
    }

    // Transaction to add ID to array
    function addId(uint id) public {
        ids.push(id);
    }

    // Call to read ID by position
    // This is reduntant becuase all member variables come
    // with built in getter functions
    function getId(uint index) view public returns (uint) {
        return ids[index];
    }

    // Call to read all IDs
    function getIds() view public returns (uint[] memory) {
        return ids;
    }

    // Call to read ID array length
    function getIdLength() view public returns (uint) {
        return ids.length;
    }
}
