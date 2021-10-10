console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioJaneiro = `Rio de Janeiro`;

// console.log(salvador, saoPaulo, rioJaneiro);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`);

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); //iniciando em 0, 1, 2, 3 (1 é São Paulo)

console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);

