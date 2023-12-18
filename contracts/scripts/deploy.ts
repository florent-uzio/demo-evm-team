import { ethers } from "hardhat";

async function main() {
  const floNft = await ethers.deployContract("FloNFT");

  await floNft.waitForDeployment();

  console.log(`FloNFT deployed to ${floNft.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
