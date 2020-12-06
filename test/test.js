const Blockchain = require('../lib/blockchain.js');

const salchichain = new Blockchain();

const ALICE = "ALICE";
const BOB = "BOB";

console.log("Sending transaction from ALICE to BOB");
console.log(salchichain.createNewTransaction(ALICE, BOB));

console.log("Sending transaction from BOB to ALICE");
console.log(salchichain.createNewTransaction(BOB, ALICE));

