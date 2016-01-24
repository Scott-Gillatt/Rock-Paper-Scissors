        var winner;
        var playerChoice;
        var AI;
        var aiAnswer;
        var pc;
        var cc;
        var total = 0;
        var pw = 0;
        var cw = 0;
        var tie = 0;
        
        //Chooseing AI answer by generateing a whole number between 1 - 3
    //Then taking the whole number and assinging it a choice

        /*SS I don't think you need the cc in here. You either return a parameter or set it to a global variable. 
        Returning is better because it allows the method to be repurposed as I did either. 
        I commented out the CC since it is not needed.*/
        function aiChoice(){
            aiAnswer = Math.floor((Math.random() * 3) + 1);
            if (aiAnswer === 1){
               //cc = "paper";
               return "paper";
            }
            else if (aiAnswer === 2){
                //cc = "rock";
                return "rock";
            }
            else if (aiAnswer === 3){
                //cc = "scissors";
               return "scissors";
            }
        }
        
        //Takes the playerChoice answer from the onclick button, excutes the AI choice,
        //passes playerChoice and AI into the game function,
        //Game function then checks all the answers and then which ever is true,
        //Will then asign the var winner who won.
        //declare_winner then takes the winner and then prints it in the span to the page.
        function play(playerChoice){
            pc = playerChoice;
            AI = aiChoice();
            game(playerChoice, AI);
            tally(winner);
            declare_winner(winner);
        }
        
        function game(playerChoice, AI) {
            if (playerChoice === "paper" && AI === "paper") {
                winner = "TIE!!";
            } else if (playerChoice === "paper" && AI === "rock") {
                winner = "Player!";
            } else if (playerChoice === "rock" && AI === "rock") {
                winner = "TIE!!";
            } else if (playerChoice === "rock" && AI === "scissors") {
                winner = "Player!";
            } else if (playerChoice === "scissors" && AI === "scissors") {
                winner = "TIE!!";
            } else if (playerChoice === "scissors" && AI === "paper") {
                winner = "Player!";
            } else {
                winner = "AI";
            }
        }
        
        //prints what the player picked and what the computer picked
        //then tells the player who won
        function declare_winner(winner){
          document.getElementById("pc").textContent = pc;
          document.getElementById("cc").textContent = cc;
          document.getElementById("winner").textContent = winner;
          document.getElementById("ptw").textContent = pw;
          document.getElementById("ties").textContent = tie;
          document.getElementById("ctw").textContent = cw;
          document.getElementById("total").textContent = total;
          
        }
        
        //Takes who the winner, and adds a point their total of wins to player, Computer, or Tie
        //Also adds a point to the total of times game was played
        function tally(winner){
           total = total + 1;
            if (winner === "Player!"){
                pw = pw + 1;
                return
            }
            else if (winner === "AI"){
                cw = cw + 1;
                return
            }
            else {
              tie = tie + 1;  
              return
            }
        }
        /*SS writing this function to test the results across a 1000 tries. Also not the reuse of an earlier function for a slightly different purpose.*/
        function play1000() {
            //Going to run 1000 times to see if all win evenly
            //going to use the aichoice function since it already grabs a random choice. This should illustrate why you make functions have a single responsibility. 
            for (i = 1; i < 1000; i++) {
                play(aiChoice());
            }
        }