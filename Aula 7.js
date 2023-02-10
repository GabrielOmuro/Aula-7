function media(){
let nota1 = Number(document.getElementById('nota1').value);
let nota2 = Number(document.getElementById('nota2').value);
let nota3 = Number(document.getElementById('nota3').value);
let soma = (nota1 + nota2 + nota3);

alert('A média é ' + (soma / 3));
}
