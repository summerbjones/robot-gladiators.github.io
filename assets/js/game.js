//player info
var playerName = window.prompt("What is your robot's name?");
var promptFight = window.prompt("Do you want to fight? Enter 'FIGHT' to fight or 'SKIP' to skip")
var playerHealth = 10;
var playerAttack = 10;
var playerMoney = 10;
//enemy info
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12


var fight = function(enemyName){
  //if player chooses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
      //remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
          playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."

      );
      //check enemy's health
      if (enemyHealth <=0){
          window.alert(enemyName + " has died!");
      } else {
          window.alert(enemyName + " still has " + enemyHealth + " health remaining");
        }
     //remove player's health by subtracting the amount set in the enemyAttack variable
     {playerHealth = playerHealth - enemyAttack;
     console.log(
         enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining");}
     
     // check players health
     if (playerHealth <=0){
         window.alert(playerName + " has died!");
     }   else {
         window.alert(playerName + " still has " + playerHealth + " health remaining.");
     } 
    }
     else if (promptFight === "skip" || promptFight === "SKIP") {
         //confirm the player wants to skip
         var confirmSkip = window.confirm("Are you sure you'd like to quit?")
         //if yes(true), leave fight
         if (confirmSkip){
             window.alert(playerName + " has decided to skip this fight. Goodbye!");
             //subtract money from playerMoney for skipping
             playerMoney = playerMoney - 2;
         }
         //if no (false), ask questio again by running fight() again
         else {
             fight();
         }
     } else {
         window.alert("You need to choose a valid option. Try again!");
     }
  }
for (var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}