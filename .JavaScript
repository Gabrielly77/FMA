alert('Olá! Bem vindo(a)!')
var nome = "Gabrielly"
var notaDoPrimeiroBimestre = 7
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 2

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre +
    notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo " + nome)
console.log(notaFixada)

//Isso é um comentário

//Revisão
//Variáveis, strings, console.log, toFixed, operações matemáticas, concatenação
//Extra

function calcularMedia(){
  var n1 = parseFloat(document.getElementById("nota1").value);
  var n2 = parseFloat(document.getElementById("nota2").value);
  var n3 = parseFloat(document.getElementById("nota3").value);
  var n4 = parseFloat(document.getElementById("nota4").value);
  var notaFinal = (n1 + n2 + n3 + n4) / 4;
  var elementoValorConvertido = document.getElementById("soma").innerText =
      ' sua nota foi = ' + notaFinal
  

  
}
