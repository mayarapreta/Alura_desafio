var Paulo = {
  nome: 'Paulo',
 vitoria: 0,
 empate: 0,
 derrota:0,
 pontos:0
};
var Rafa = {
  nome: 'Rafa',
 vitoria: 0,
 empate: 0,
 derrota:0,
 pontos:0
};

var Renato = {
  nome: 'Renato',
 vitoria: 0,
 empate: 0,
 derrota:0,
 pontos:0
};

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();
function exibirNaTela(){
elementoTabela.innerHTML =
 `
<tr>
       <td>${Paulo.nome}</td>
       <td>${Paulo.vitoria}</td>
       <td>${Paulo.empate}</td>
       <td>${Paulo.derrota}</td>
       <td>${Paulo.pontos}</td>
       <td><button onClick="adicionarVitoria(Paulo)">Vitória</button></td>
       <td><button onClick="adicionarEmpate(Paulo)">Empate</button></td>
       <td><button onClick="adicionarDerrota(Paulo)">Derrota</button></td>
     </tr>

`;
}



function adicionarVitoria(jogador){
 jogador.vitoria++;
 jogador.pontos = jogador.pontos + 3;
 exibirNaTela();
}
function adicionarEmpate(jogador){
 jogador.empate++;
 jogador.pontos++
 exibirNaTela()
}
function adicionarDerrota(jogador){
 jogador.derrota++
 exibirNaTela()
}