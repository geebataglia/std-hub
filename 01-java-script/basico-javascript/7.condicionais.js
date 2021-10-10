console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 14;
const estaAcompanhada = true;

listaDeDestinos.push(`Curitiba`);

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); //iniciando em 0, 1, 2, 3 (1 é São Paulo)

console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);

let novaCidade = `Ubatuba`

listaDeDestinos.push(novaCidade);
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); //remove pacote vendido
} else if (estaAcompanhada) {
    console.log("Comprador acompanhado");
    listaDeDestinos.splice(1, 1); //remove pacote vendido
} else {
    console.log("Menor de idade, vaza!");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);