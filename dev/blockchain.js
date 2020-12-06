
class Blockchain {

    constructor() {
    
        this.chain = []; // Se guardan todos los bloques
        this.newTransactions = []; // Se guardan las transacciones antes de guardarlas en el bloque
    }


   createNewBlock (nonce, previousBlockHash, hash) {
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.newTransactions,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash
        };

        this.newTransactions = [];
        this.chain.push(newBlock);

        return newBlock;
   }

   getLastBlock() {
       return this.chain[this.chain.length - 1];
   }

   createNewTransaction() {
       
   }

}

module.exports = Blockchain;