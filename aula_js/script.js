let paragrafo = document.getElementById("paragrafo-01")

let texto = "meu texto"
let numero = 1234567
let booleano = true
let meuArray = [-1, 2, 0, 3.1, -5.8]


if (paragrafo != null){
    paragrafo.innerText  = texto + "-" + numero + "-" + booleano;
}

let valor  = 7

if(valor >0 && valor <10){
    valor = 10
}
else if (valor <0 && valor <12){
    valor = 12
} else {
    valor = 0
}