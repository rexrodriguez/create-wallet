import { Wallet } from "ethers";

// Generates a real EVM wallet (Ethereum / Base / Arbitrum / BSC / Polygon, etc.)
const wallet = Wallet.createRandom();

console.log("Address:     ", wallet.address);
console.log("Private Key: ", wallet.privateKey);

if (wallet.mnemonic?.phrase) {
  console.log("Mnemonic:    ", wallet.mnemonic.phrase);
} else {
  console.log("Mnemonic:     (not available)");
}

