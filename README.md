## Project Overview

Single-file CLI utilities that generate random cryptocurrency wallets:
- **EVM** (Ethereum, Base, Arbitrum, BSC, Polygon, etc.) using ethers v6
- **Solana** using @solana/web3.js with BIP44 mnemonic derivation

## Commands

```bash
# Install dependencies
pnpm install

# Generate an EVM wallet
node gen-wallet.mjs

# Generate a Solana wallet
node gen-solana-wallet.mjs

# Convert base58 Solana private keys / addresses to byte arrays
node convert-solana-key.mjs <base58-key-or-address> [more...]
```

## Architecture

- **gen-wallet.mjs** — Uses `Wallet.createRandom()` from ethers v6 to generate an EVM wallet, then prints the address, private key, and mnemonic phrase.
- **gen-solana-wallet.mjs** — Generates a BIP39 mnemonic, derives an Ed25519 keypair via the Phantom/Solflare-compatible path `m/44'/501'/0'/0'`, then prints the address, base58 secret key, and mnemonic phrase.
- **convert-solana-key.mjs** — Decodes one or more base58 inputs. A 64-byte secret key prints the matching address plus the JSON keypair array used by `solana-keygen`; a 32-byte public key prints its byte array.
- ESM module format (`.mjs`), no build step, no TypeScript.
- Dependencies: `ethers` v6, `@solana/web3.js`, `bip39`, `ed25519-hd-key`, `bs58`.
- Package manager: `pnpm`.
