pragma solidity >=0.4.22 <0.8.0;

contract SimpleSmartContract {
    string public data;

    // Transaction (changes state)
    function set(string memory _data) public {
        data = _data;
    }

    // Call (reads state)
    function get() view public returns (string memory) {
        return data;
    }
}
