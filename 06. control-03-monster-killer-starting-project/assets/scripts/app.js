// some const are in all caps with underscores, to express they will never be changed or reasign. Individual practice and not a requirement.

const ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
}
attackBtn.addEventListener('click', attackHandler);
