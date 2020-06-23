function cadastraJogador()
    {
       localStorage.setItem(cNick.value, cNome.value);

       alert("Jogador adicionado.");

    }

    function limpar()
    {
        localStorage.clear();

        localStorage.removeItem(cNome.value, cNick.value, cIdade.value);
        alert("Jogadores removidos.");
    }

    /*function ler()
    {
        var obj = localStorage.getItem(txtChave.value);
        if(obj != null)
            alert(obj)
        else
        alert("O item procurado não existe.")
    }
    function remover()
    {
        localStorage.removeItem(txtChave.value);
        alert("Item removido.");
    }

    function limpar()
    {
        localStorage.clear();
        alert("");
    }*/

    if(typeof(Storage)!=="undefined")
    {
        //o browser suporta HTML 5 Web Storage
    }
    else
    {
        //o browser não suporta HTML 5 Web Storage
    }

//aparecer na outra paginas
function ler(){
/*var obj = localStorage.getItem(cNick.value);*/
var obj = localStorage.getItem(cNick.value);
if(obj != null)
/*alert(obj)*/
  document.getElementById('jogador1').innerHTML = `<strong>${obj}`;
else
  alert("O jogador procurado não existe.")
/*
document.getElementById('cNick').innerHTML = 'dasd' + nome;
*/
}

//jogador 2
