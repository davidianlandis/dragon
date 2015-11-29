// settings
var playerHealth = 25;
var dragonHealth = 50;
var playerMaxDmg = 25;
var dragonMaxDmg = 10;

// initiate any other variables
var gameOver = false;

// feedback elements
var playerHPbox = document.getElementById('playerHP');
var dragonHPbox = document.getElementById('dragonHP');
var box = document.getElementById('result');

// display intial values
playerHPbox.innerHTML = playerHealth;
dragonHPbox.innerHTML = dragonHealth;


// round of fighting the dragon
function attack(){

  // if someone is dead - game is over, so refresh the page to start over
  if(gameOver == true){
    return false;
  }
  
  // current feedback
  var current = box.innerHTML;

  // new result
  var result = "";

  // random chance to hit the dragon - 0=false, 1=true
  var youHit = Math.floor(Math.random() * 2);  

  // did you hit the dragon
  if (youHit) {
    // how much damage to apply if we do hit the dragon
    var damageToDragonThisRound = Math.floor(Math.random() * playerMaxDmg +1);
    result += "You have HIT the dragon for " + damageToDragonThisRound + "HP!";
    // update dragon HP
    dragonHealth -= damageToDragonThisRound;
    // dragon ded?
    if (dragonHealth <= 0) {
      result += "You have slewn the Dragon!!!";
      gameOver = true;
    }
  } else {
    result += "You MISSED!";
  }

  // how much damage are you taking this round - the dragon always hits you, it's a dragon
  var damageToPlayerThisRound = Math.floor(Math.random() * dragonMaxDmg +1);
  result += " The dragon has hit you for " + damageToPlayerThisRound + "HP!"
  // update player HP
  playerHealth -= damageToPlayerThisRound;
  // you ded?
  if(playerHealth <= 0) {
    result += " The dragon has eaten you."
    gameOver = true;
  }

  // append result
  box.innerHTML = current + "<div>" + result + "</div>";

  // negatives look ugly - so clean up before displaying
  playerHealth = playerHealth < 0 ? 0 : playerHealth;
  dragonHealth = dragonHealth < 0 ? 0 : dragonHealth;

  // display new HP
  playerHPbox.innerHTML = playerHealth;
  dragonHPbox.innerHTML = dragonHealth;

}