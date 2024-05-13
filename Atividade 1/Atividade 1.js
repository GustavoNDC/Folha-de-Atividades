function Q4(){
    /*4. Escreva um programa que utilize a instrução console.log() para exibir uma
mensagem de boas-vindas ao usuário.*/

//    console.log("Bem-vindo! Espero que você esteja tendo um ótimo dia!");
    var mBemVindo = "Seja bem vindo"
    document.getElementById("mQ4").innerText = mBemVindo
}


function Q6 (){
    /*6. Escreva um programa que declare uma variável para armazenar um número inteiro
e outra variável para armazenar um número decimal. Em seguida, imprima o tipo
de dado de cada variável.*/

    let numInt = 10;
    let numDec = 3.14;

    var mVar = (typeof numInt) +(" ")+ (typeof numDec);
    document.getElementById("mQ6").innerText = mVar

//    console.log("Tipo da variavel numInt:", typeof numInt);
//    console.log("Tipo da variavel numDec:", typeof numDec);
}

function Q8(){
    /*8. Escreva um programa que solicite ao usuário seu nome e exiba-o no console.*/

    let readline = require('readline-sync');

    let nome = readline.question("Digite seu nome: ");
    console.log("Seu nome é: " + nome);

}

function Q9 (){
    /*9. Escreva um programa que peça ao usuário para digitar sua idade e exiba-a no
    console.*/

    let readline = require('readline-sync');

    let idade = readline.question("Digite sua idade: ");
    console.log("Sua idade é: " + idade);
}

function Q10 (){
    /*10.Escreva um programa que solicite ao usuário o seu nome e sua idade e em seguida
imprima essas informações juntas em uma única linha.*/

    let readline = require('readline-sync');

    let nome = readline.question("Digite seu nome: ");
    let idade = readline.question("Digite sua idade: ");

    console.log("Seu nome é " + nome + " e você tem " + idade + " anos.");

}

function Q11 (){
    /*11.Escreva um programa que solicite ao usuário um número e converta-o para número
usando parseInt(). Em seguida, exiba o número convertido no console.*/

    let readline = require('readline-sync');

    let numStr = readline.question("Digite um numero: ");
    let numInt = parseInt(numStr);

    console.log("Seu numeor é : " + numInt + " , e o tipo da variavel é: " + typeof numInt);
}

function Q12 (){
    /*12.Escreva um programa que peça ao usuário para digitar sua altura em metros e
converta-a para número de ponto flutuante usando parseFloat(). Em seguida, exiba
a altura convertida no console.*/

    let readline = require('readline-sync');

    let alturaStr = readline.question("Dgite sua altura em metros: ");
    let altura = parseFloat(alturaStr);

    console.log("Sua altura é: " + altura + "m");

}

function Q13 (){
    /*13.Escreva um programa que solicite ao usuário sua idade e converta-a para
número usando Number(). Em seguida, exiba a idade no console.*/

    let readline = require('readline-sync');

    let idadeStr = readline.question("Digite sua idade: ");
    let idade = Number(idadeStr);

    console.log("Sua idade e: " + idade);
}