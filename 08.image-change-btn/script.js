let img = document.getElementById('monster1');
let playerImage = document.getElementById('player1');
let btnAttack = document.getElementById('btnAttack');
let btnStrong = document.getElementById('btnStrongAttack');

btnAttack.addEventListener('click', function () {
  img.src = './monster2.png';
  setTimeout(function () {
    playerImage.src = './player2.png';
  }, 200);
  console.log('button clicked');
});

btnStrong.addEventListener('click', function () {
  img.src = './player1.png';
  setTimeout(function () {
    playerImage.src = './monster1.png';
  }, 200);
  console.log('strong attack button clicked');
});
