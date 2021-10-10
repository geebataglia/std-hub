console.log("Trabalhando com atribuição de variáveis");

const idade = 34;
let nome = "Guilherme"; // para mudar precisa ser let não const
let ano = 2021;
const sobrenome = "Bataglia";

console.log(nome + " " + sobrenome);

console.log(nome, sobrenome);

console.log(`Meu nome é ${nome}`); // lembrar de usar a crase (lado direito do P) não o apóstrofo

nome = nome + sobrenome;

console.log(`Meu nome é ${nome}`);

//primeiroNome
//segundoNome
// boas praticas atribuir variaveis descritas claramente para evitar confusão

let varIdade; //declarando uma var
varIdade = 34; //atribuindo um valor somente para "let"