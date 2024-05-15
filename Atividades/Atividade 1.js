function toggleAnswer(question) {
    question.parentElement.classList.toggle('open');
}

function Q4() {
    /*4. Escreva um programa que utilize a instrução console.log() para exibir uma
mensagem de boas-vindas ao usuário.*/

    var mBemVindo = "Seja bem vindo"
    document.getElementById("mQ4").innerText = mBemVindo
}


function Q6() {
    /*6. Escreva um programa que declare uma variável para armazenar um número inteiro
e outra variável para armazenar um número decimal. Em seguida, imprima o tipo
de dado de cada variável.*/

    let numInt = 10;
    let numDec = 3.14;

    var mVar = (typeof numInt) + (" ") + (typeof numDec) + (", Isso acontece porque independente se é inteiro ou decimal, javascript entende como 'number' ");
    document.getElementById("mQ6").innerText = mVar

}

function Q8() {
    /*8. Escreva um programa que solicite ao usuário seu nome e exiba-o no console.*/

    var name8 = document.getElementById('nome8').value;
    document.getElementById("mQ8").innerText = name8


}

function Q9() {
    /*9. Escreva um programa que peça ao usuário para digitar sua idade e exiba-a no
    console.*/

    var age9 = document.getElementById('idade9').value;
    document.getElementById("mQ9").innerText = age9
}

function Q10() {
    /*10.Escreva um programa que solicite ao usuário o seu nome e sua idade e em seguida
imprima essas informações juntas em uma única linha.*/

    var name10 = document.getElementById('nome10').value;
    var age10 = document.getElementById('idade10').value;
    document.getElementById("mQ10").innerText = ("Seu nome é " + name10 + " e você tem " + age10 + " anos.");

}

function Q11() {
    /*11.Escreva um programa que solicite ao usuário um número e converta-o para número
usando parseInt(). Em seguida, exiba o número convertido no console.*/

    let numInt11 = parseInt(document.getElementById('num11').value);
    document.getElementById("mQ11").innerText = ("Seu numero é : " + numInt11 + " , e o tipo da variavel é: " + typeof numInt11);

}

function Q12() {
    /*12.Escreva um programa que peça ao usuário para digitar sua altura em metros e
converta-a para número de ponto flutuante usando parseFloat(). Em seguida, exiba
a altura convertida no console.*/

    document.getElementById("mQ12").innerText = ("Sua altura em metros é: " + ((document.getElementById("altura12").value) / 100) + "m");

}

function Q13() {
    /*13.Escreva um programa que solicite ao usuário sua idade e converta-a para
número usando Number(). Em seguida, exiba a idade no console.*/

    let idadeInt13 = parseInt(document.getElementById('idade13').value);
    document.getElementById("mQ13").innerText = ("Sua idade é : " + idadeInt13 + " , e o tipo da variavel é: " + typeof idadeInt13);

}