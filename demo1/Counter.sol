// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Counter {
    uint256 public counter;
    // 默认值
    uint256 private init;

    // 传入初始值
    constructor(uint256 num) {
        counter = num;
        init = num;
    }

    // 传入值与counter相加并复制给counter
    function add(uint256 x) public {
        require((counter + x) <= type(uint256).max, unicode"相加后超过最大值");
        counter += x;
    }

    // 恢复默认值
    function defaultCounter() public {
        counter = init;
    }
}
