//Variaveis
let found = false; //boolean
let name = "Augusto"; //string
let quantidade = 20; //number
let valeu = null; //null
let total = undefined; //undefined

const list = ["orange", "apple", "juice"]; //array

const person = {
  fristName: "Augusto",
  lastName: "Silva",
};

document.write(person.fristName + " " + person.lastName);
document.write("<br>" + list[1]);

//Função
function square(num) {
  const value = num * num;
  return value;
}

const value = square(2);
document.write("<br>" + value);

const alunos = ["Augusto", "Franca", "Rafael"];

alunos.forEach((aluno) => {
  const alunoMaiusculo = aluno.toUpperCase();
  console.log(alunoMaiusculo);
});
