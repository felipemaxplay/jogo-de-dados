var flag_jogando_jog2;
var flag_jogando_jog1;
var dado1;
var dado2;
var jog1;
var jog2;

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sorteia1 () {
//dado do 1 até o 6
valor_dado1 = getRandomInt(1, 6);

switch (valor_dado1) {

  case 1:
    document.getElementById('img1').src = 'imagens/dado_1.png';
    break;
  case 2:
    document.getElementById('img1').src = 'imagens/dado_2.png';
    break;
  case 3:
    document.getElementById('img1').src = 'imagens/dado_3.png';
    break;
  case 4:
    document.getElementById('img1').src = 'imagens/dado_4.png';
    break;
  case 5:
    document.getElementById('img1').src = 'imagens/dado_5.png';
    break;
  case 6:
    document.getElementById('img1').src = 'imagens/dado_6.png';
    break;

  default:

}

}

function sorteia2 () {
//dado do 1 até o 6
valor_dado2 = getRandomInt(1, 6);

switch (valor_dado2) {

  case 1:
    document.getElementById('img2').src = 'imagens/dado_1.png';
    break;
  case 2:
    document.getElementById('img2').src = 'imagens/dado_2.png';
    break;
  case 3:
    document.getElementById('img2').src = 'imagens/dado_3.png';
    break;
  case 4:
    document.getElementById('img2').src = 'imagens/dado_4.png';
    break;
  case 5:
    document.getElementById('img2').src = 'imagens/dado_5.png';
    break;
  case 6:
    document.getElementById('img2').src = 'imagens/dado_6.png';
    break;

  default:

}

}

//Iniciar Tendo
function inicioGame () {
  var tot= 10

  document.getElementById('tendo').innerHTML = "Total : " + tot;
  document.getElementById('tendo1').innerHTML = "Total : " + tot;
}

//resetar o jogo inteiro reload de pagina
function resetgame () {

  confirm("Perdera todo o progresso atual do jogo.");
  window.location.reload ();
}

//resetar imagens dos dados

function resetDados () {
  document.getElementById('img1').src = 'imagens/dados.gif';
  document.getElementById('img2').src = 'imagens/dados.gif';
}
