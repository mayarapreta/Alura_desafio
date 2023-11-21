//enquanto o chute for diferente do numero secreto
var numeroSecreto = parseInt(Math.random()*1001);

while (chute != numeroSecreto){
var chute = prompt("digite um numero entre 1 e 1000")
//se o chute for igual o numero secreto

if (chute == numeroSecreto){
  alert("acertou!") 

}else if (chute > numeroSecreto){
  alert("Errou.. numero secreto  é maior") 
}else if( chute < numeroSecreto){
  alert("numero serecto é menor")
}  }
  