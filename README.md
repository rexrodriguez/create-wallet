## Project Overview

Single-file CLI utility that generates random EVM-compatible cryptocurrency wallets (Ethereum, Base, Arbitrum, BSC, Polygon, etc.) using ethers v6.

## Commands

```bash
# Install dependencies
pnpm install

# Run the wallet generator
node gen-wallet.mjs
```

## Architecture

- **gen-wallet.mjs** — Sole source file. Uses `Wallet.createRandom()` from ethers v6 to generate a wallet, then prints the address, private key, and mnemonic phrase.
- ESM module format (`.mjs`), no build step, no TypeScript.
- Single dependency: `ethers` v6.
- Package manager: `pnpm`.
