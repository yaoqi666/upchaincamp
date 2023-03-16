const { expect } = require("chai");
let bank;
describe("Bank1", function () {
  async function init() {
    const Bank = await ethers.getContractFactory("Bank");
    bank = await Bank.deploy();
    await bank.deployed();
    console.log("Bank:" + bank.address);
  };

  before(async function () {
    await init();
  });

  it("Transfer and show all", async function () {
    let overrides = {
      value: 1
    };
    expect(await bank.set(overrides));
    expect(await bank.getBalance()).to.equal(1);
    expect(await bank.getAll());
    expect(bank.on("total", (from, amount) => {
      console.log(from + ":" + amount);
    }));
  });

  it("Non-contract owner to withdraw", async function () {
    const [owner, other] = await ethers.getSigners();
    let overrides = {
      value: 1
    };
    expect(await bank.set(overrides));
    expect(await bank.connect(other).withdraw(other.address));
  });

})



