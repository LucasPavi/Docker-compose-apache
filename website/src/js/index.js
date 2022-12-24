/* Objetivo - qundo clicarmos na aba temos que mostrar
o conteudo selecionado e esconder e que n;ao esta selecionada.

1 passo- pegar os elementos no HTML;

2 passo- dar um jeito de identificar o clique no elemento;

3 passo- quando clicar , desmarcar a aba selecionada;

4 passo- marcar a aba clicada como selecionado;

5 passo- esconder o conteudo anterior;

6 passo- mostrar o conteudo da aba selecionada;
*/
// passo 1
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    //passo 2
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
      //passo 3
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");

      //passo 4
        aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
      //passo 5
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

      //passo 6
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado");
}

