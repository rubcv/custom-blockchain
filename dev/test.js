const Blockchain = require('./blockchain.js');

const salchichain = new Blockchain();

console.log("== Blockchain vacia ==");
console.log(salchichain);

console.log("Rellenando con valores...");
salchichain.createNewBlock(2389,'OIUOEREDHKHKD','78s97d4x6dsf');
salchichain.createNewBlock(2389,'OIUOEREDHKHKD','78s97d4x6dsf');
salchichain.createNewBlock(2389,'OIUOEREDHKHKD','78s97d4x6dsf');


console.log("== Blockchain con valores ==");
console.log(salchichain);

console.log("== Obteniendo el ultimo valor (debe coincidir con el anterior) ==");
console.log(salchichain.getLastBlock());