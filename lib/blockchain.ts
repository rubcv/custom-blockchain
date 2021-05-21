const { time } = require('console');
const sha256 = require('sha256');

module.exports = class Blockchain {
    newTransactions: any[];
    lastBlockHash: string;
    chain: any;

    constructor() {
        this.newTransactions = []; // Se guardan las transacciones antes de guardarlas en el bloque
        this.lastBlockHash = '0'; // Hash del ultimo bloque
        // Se crea el genesis block
        this.chain = [{
            index: 0,
            timestamp: Date.now(),
            transactions: this.newTransactions,
            hash: this.lastBlockHash
        }]; // Se guardan todos los bloques
    }

    // Crea un nuevo bloque de transacciones en la blockchain
    createNewBlock() {
        this.calculateBlockHash();

        const newBlock = {
            index: this.chain.length,
            timestamp: Date.now(),
            transactions: this.newTransactions,
            hash: this.lastBlockHash,
        };
        this.newTransactions = [];
        this.chain.push(newBlock);

        return newBlock;
    }

    // Devuelve el ultimo bloque
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    // Devuelve el bloque
    getBlock(block_id) {
        return this.chain[block_id];
    }

    // Calcula el hash del bloque nuevo
    calculateBlockHash() {
        // El hash del bloque nuevo sera el hash sha256 de todas las transacciones del ultimo
        this.lastBlockHash = sha256(JSON.stringify(this.getLastBlock()['transactions']));
    }

    // Crea una nueva transaccion
    createNewTransaction(sender, receiver, content) {
        var timestamp = Date.now();
        var tx_id = sender + ":" + receiver + ":" + timestamp;
        tx_id = sha256(tx_id);

        const newTransaction = {
            tx_id: tx_id,
            timestamp: timestamp,
            sender: sender,
            receiver: receiver,
            content: content
        }

        this.newTransactions.push(newTransaction);

        // Block ID de donde se va a guardar la transaccion
        var block_id = this.getLastBlock()['index'] + 1;
        var tx = { "tx_id": tx_id, "block_id": block_id }
        return tx;
    }

    // Devuelve la transaccion buscando por tx_id y block_id
    getTransaction(tx_id, block_id) {
        let tx_array = this.getBlock(block_id)['transactions'];
        let tx_result = tx_array.find(tx => tx.tx_id === tx_id);

        return tx_result;
    }
}
