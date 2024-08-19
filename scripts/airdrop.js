const { ethers } = require("hardhat");
const eligibleAddresses = require("../utils/eligible");

const contractName = "Dokun";
const contractAddress = "0xcAeCB55A15684777ec00BC02F79645069c12e0B4";

async function main() {
  const token = await hre.ethers.getContractAt(contractName, contractAddress);

  for (let i = 0; i < eligibleAddresses.length; i++) {
    const address = eligibleAddresses[i];

    let initialBalance = await token.balanceOf(address);
    console.log(`Initial balance of ${address}: ${initialBalance.toString()}`);

    let txn = await token.transfer(address, ethers.parseUnits("1000", "ether"));
    await txn.wait();

    let finalBalance = await token.balanceOf(address);
    console.log(`Initial balance of ${address}: ${finalBalance.toString()}`);
  }

  console.log("Airdrop completed");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
