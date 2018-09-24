const telaStart = document.querySelector('.pushStart');
const play = document.querySelector('.start');
const telaGame = document.querySelector('.game');

let game = document.querySelector('.counter');
let surpresa = document.querySelector('.surprise');
let meme = document.querySelector('.madafaca');
let memeNome = document.querySelector('.q');
let count, loop;

play.onclick = iniciar;

function iniciar() {
  telaStart.classList.remove('center');
  telaStart.classList.add('out-left');
  telaGame.classList.toggle('out-right');
  telaGame.classList.toggle('center');

  count = Math.trunc(Math.random() * 10) + 1;

  function gameLoop(count) {
    count <= 10
      ? (loop = setTimeout(function() {
          game.innerHTML = count;
          count++;
          gameLoop(count);
        }, 300))
      : gameLoop(1);
  }
  gameLoop(count);

  game.addEventListener('click', function() {
    clearTimeout(loop);
    // game.classList.add('get-out');
    game.style.display = 'none';
    surpresa.classList.add('get-in');
    switch (parseInt(game.innerHTML)) {
      case 1:
        meme.src = 'img/erou.jpeg';
        meme.alt = 'Errouuu';
        memeNome.innerHTML = meme.alt;
        break;
      case 2:
        meme.src = 'img/pioresconselhos.jpg';
        meme.alt = 'Você não precisa estudar se copiar do stackoverflow';
        memeNome.innerHTML = meme.alt;
        break;
      case 3:
        meme.src = 'img/interrogacao.jpg';
        meme.alt = 'Impacta???';
        memeNome.innerHTML = meme.alt;
        break;
      case 4:
        meme.src = 'img/erou.jpeg';
        meme.alt = 'Errouuu';
        memeNome.innerHTML = meme.alt;
        break;
      case 5:
        meme.src = 'img/erou.jpeg';
        meme.alt = 'Errouuu';
        memeNome.innerHTML = meme.alt;
        break;
      case 6:
        meme.src = 'img/erou.jpeg';
        meme.alt = 'Errouuu';
        memeNome.innerHTML = meme.alt;
        break;
      case 7:
        meme.src = 'img/erou.jpeg';
        meme.alt = 'Errouuu';
        memeNome.innerHTML = meme.alt;
        break;
      case 8:
        meme.src = 'img/erou.jpeg';
        meme.alt = 'Errouuu';
        memeNome.innerHTML = meme.alt;
        break;
      case 9:
        meme.src = 'img/erou.jpeg';
        meme.alt = 'Errouuu';
        memeNome.innerHTML = meme.alt;
        break;
      case 10:
        meme.src = 'img/nazare.jpg';
        meme.alt = 'Sociedade e Sustentabilidade';
        memeNome.innerHTML = meme.alt;
        break;
      default:
        meme.src = 'img/nazare.jpg';
        meme.alt = 'What have you done??';
        memeNome.innerHTML = meme.alt;
        break;
    }
  });
}
// function contar() {
//   for (let count = 1; count <= 10; count++) {
//     game.innerHTML = count;
//     if (count == 10) count = 1;
//   }
// } OMG THIS SHIT DOESNT STOP

// let gameLoop = setInterval(function() {
//   game.innerHTML = count;
//   count++;
//   if (count > 10) {
//     clearInterval(gameLoop);
//     count = 1;
//   }
// }, 500); Outro Fail
