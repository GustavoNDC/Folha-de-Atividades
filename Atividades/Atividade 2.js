function Q1() {
    var num1 = document.getElementById('num1').value;
    if (num1 % 2 == 0) {
        document.getElementById("mQ1").innerText = ("par");
    }
    else {
        document.getElementById("mQ1").innerText = ("impar");
    }
}

function Q2() {
    var num2 = document.getElementById('num2').value;
    var num22 = document.getElementById('num22').value;
    if (num2 > num22) {
        document.getElementById("mQ2").innerText = (num2 + " é maior que " + num22);
    }
    else if (num2 < num22) {
        document.getElementById("mQ2").innerText = (num22 + " é maior que " + num2);
    }
    else {
        document.getElementById("mQ2").innerText = (num2 + " é Igual a " + num22);
    }
}

function Q3() {
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var nota33 = parseFloat(document.getElementById('nota33').value);
    var nota333 = parseFloat(document.getElementById('nota333').value);
    var media3 = (nota3 + nota33 + nota333) / 3
    if (media3 >= 7) {
        document.getElementById("mQ3").innerText = ("Aprovado");
    }
    if (media3 < 7) {
        document.getElementById("mQ3").innerText = ("Reprovado");
    }
}

function Q4(nascimento) {
    var ano4 = new Date().getFullYear();
    var idade4 = ano4 - nascimento;
    return idade4 >= 18 ? "Maior de idade" : "Menor de idade"
}