var nb1;
var nb2;

console.log("*****  Application Opérateurs *****");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Veuillez saisir le premier nombre…', (nb1) => {
  // TODO: Log the answer in a database


  rl.close();
});

rl.question('Veuillez saisir le second nombre…', (nb2) => {
  // TODO: Log the answer in a database

  rl.close();
});

console.log(nb1, nb2);
