
var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) {
        fight(enemyNames[i]);
    }
}
// ask player if they would like to fight or skip
var promptFight = window.prompt("would you like to fight or skip this battle?");
  
    //if player chooses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
      
    //remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
          playerName + " attacked " + enemyNames[0] + ". " + enemyNames[0] + " now has " + enemyHealth + " health remaining."

      );
      //check enemy's health
      if (enemyHealth <= 0){
          window.alert(enemyNames[0] + " has died!");
          
      } else {
          window.alert(enemyNames[0] + " still has " + enemyHealth + " health remaining");
        }
     //remove player's health by subtracting the amount set in the enemyAttack variable
     playerHealth = playerHealth - enemyAttack;
     console.log(
         enemyNames[0] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining");
     
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
             playerMoney = playerMoney - 10;
             console.log("playerMoney" , playerMoney);
             
         }
         //if no (false), ask questio again by running fight() again
         else {
             fight();
         }
     } else {
         window.alert("You need to choose a valid option. Try again!");
     }
  

for (var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}