import readlinkSync = require('readline-sync')

const numeros: Set<number> = new Set<number>();
let contador


for(contador = 0; contador < 10; contador++){
    numeros.add(readlinkSync.questionInt("Digite o numero: "));
    
}

console.log("\nLista dos numeros: ")

for(let numero of numeros){
   console.log(numero);

}










