import { Keypair, PublicKey } from "@solana/web3.js";
import bs58 from "bs58";

// Converts Solana base58 private keys or addresses into byte-array form.
// Usage: node convert-solana-key.mjs <base58-key-or-address> [more...]
// Accepts either a 64-byte secret key (full keypair) or a 32-byte public key.

const inputs = process.argv.slice(2);

if (inputs.length === 0) {
  console.error("Usage: node convert-solana-key.mjs <base58-key-or-address> [more...]");
  process.exit(1);
}

for (const input of inputs) {
  console.log("Input:       ", input);

  let bytes;
  try {
    bytes = bs58.decode(input);
  } catch (err) {
    console.log("  Error:      not valid base58 —", err.message);
    console.log();
    continue;
  }

  if (bytes.length === 64) {
    const keypair = Keypair.fromSecretKey(bytes);
    console.log("  Type:        secret key (64 bytes)");
    console.log("  Address:    ", keypair.publicKey.toBase58());
    console.log("  Keypair:    ", JSON.stringify(Array.from(keypair.secretKey)));
  } else if (bytes.length === 32) {
    const pubkey = new PublicKey(bytes);
    console.log("  Type:        public key / address (32 bytes)");
    console.log("  Address:    ", pubkey.toBase58());
    console.log("  Bytes:      ", JSON.stringify(Array.from(bytes)));
  } else {
    console.log(`  Error:       expected 32 or 64 bytes, got ${bytes.length}`);
  }
  console.log();
}
