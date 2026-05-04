import { Keypair } from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import bs58 from "bs58";

// Generates a real Solana wallet (Phantom/Solflare-compatible BIP44 path m/44'/501'/0'/0')
const mnemonic = generateMnemonic();
const seed = mnemonicToSeedSync(mnemonic);
const { key } = derivePath("m/44'/501'/0'/0'", seed.toString("hex"));
const keypair = Keypair.fromSeed(key);

console.log("Address:     ", keypair.publicKey.toBase58());
console.log("Private Key: ", bs58.encode(keypair.secretKey));
console.log("Mnemonic:    ", mnemonic);
