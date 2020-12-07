const Blockchain = require('../lib/blockchain.js');

const salchichain = new Blockchain();

console.log("Blockchain and genesis Block only");
console.log(salchichain);

const ALICE = "ALICE";
const BOB = "BOB";

console.log("Sending transaction from ALICE to BOB");
const tx_1 = salchichain.createNewTransaction(ALICE, BOB);
console.log(tx_1);

console.log("Sending transaction from BOB to ALICE");
const tx_2 = salchichain.createNewTransaction(BOB, ALICE);
console.log(tx_2);

console.log("Creating new block");
salchichain.createNewBlock();

console.log("Retrieving last block");
const last_block = salchichain.getLastBlock();
console.log(last_block);

console.log("Searching by block_id...");
const block = salchichain.getBlock(1);
console.log(block);


console.log("Searching tx_1...");
console.log(salchichain.getTransaction(tx_1.tx_id, tx_1.block_id));
