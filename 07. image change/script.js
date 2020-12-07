var normalMonster = document.getElementById('monster');
var normalPlayer = document.getElementById('player');

monster.addEventListener('click', function (monster) {
  monster.target.classList.toggle('attack');
});

normalPlayer.addEventListener('click', function (player) {
  player.target.classList.toggle('playerAttack');
});
