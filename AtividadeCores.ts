import readlinkSync = require('readline-sync')

const cores: Array<string> = new Array<string>();


cores.push(readlinkSync.question("Digite a primeira cor: "));
cores.push(readlinkSync.question("Digite a segunda cor: "));
cores.push(readlinkSync.question("Digite a terceira cor: "));
cores.push(readlinkSync.question("Digite a quarta cor: "));
cores.push(readlinkSync.question("Digite a quinta cor:  "));
console.log("************************"));

console.log("\nLista de Cores: ")

for(let cor of cores){
   console.log(cor);
}




console.log("\nCores Ordenadas: ")
cores.sort();

for(let cor of cores){
   console.log(cor);
}






