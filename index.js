let player1Score = 0
let player2Score = 0
let player3Score = 0
let player1Turn = true
let player2Turn = true



const message = document.getElementById("message")
const container1 = document.getElementsByClassName("container")
const containerThree = document.getElementById("containerThree")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player3Scoreboard = document.getElementById("player3Scoreboard")
const player3 = document.getElementById("player3")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player3Dice = document.getElementById("player3Dice")
const rollBtn = document.getElementById("rollBtn")
const rollBtn3 = document.getElementById("rollBtn3")
const resetBtn = document.getElementById("resetBtn")
const resetBtn3 = document.getElementById("resetBtn3")
const player2Btn = document.getElementById("player2Btn")
const player3Btn = document.getElementById("player3Btn")


player3Btn.addEventListener("click", function(){
    containerThree.classList.remove("container") 
    containerThree.classList.add("containerThree")
    player3.style.display="block"
    player3Btn.style.display ="none"
    player2Btn.style.display ="block"
    rollBtn3.style.display ="block"
    restart()
    rollBtn.style.display = "none"
  })
  

player2Btn.addEventListener("click", function() {
    containerThree.classList.remove("containerThree")
    containerThree.classList.add("container")
    player3Btn.style.display ="block"
    player2Btn.style.display ="none"
    rollBtn3.style.display ="none"
    resetBtn3.style.display ="none"
    player3.style.display ="none"
    restart()
})


function displayRestart() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    rollBtn3.style.display =  "none"
    resetBtn3.style.display ="none"
}

function displayRestart3() {
    rollBtn3.style.display = "none"
    resetBtn3.style.display ="block"
}


rollBtn.addEventListener("click", function(){
   const randomNumber = Math.floor(Math.random() * 6 ) + 1
 


  if (player1Turn) {
      player1Score += randomNumber
      player1Scoreboard.textContent = player1Score
      player1Dice.textContent = randomNumber
      message.textContent = "Player 2 Turn"
      player1Dice.classList.remove("active")
      player2Dice.classList.add("active")
    
      
  } else if (player2Turn) {
      player2Score += randomNumber
      player2Scoreboard.textContent = player2Score
      player2Dice.textContent = randomNumber
      message.textContent = "Player 1 Turn"
      player2Dice.classList.remove("active")
      player1Dice.classList.add("active")
      
    }
    player1Turn =!player1Turn

    if(player1Score >= 20) {
    message.textContent = "Player 1 has won! 🔥"
    displayRestart()
    } else if(player2Score >=20) {
    message.textContent = "Player 2 has won! 🔥"
    displayRestart()
    }

})

rollBtn3.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random() * 6 ) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        message.textContent = "Player 2 Turn"
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
   } else if (player2Turn) {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        message.textContent = "Player 3 Turn"
        player2Dice.classList.remove("active")
        player3Dice.classList.add("active")
        player2Turn =! player2Turn
        player1Turn =! player1Turn
    } else {
        player3Score += randomNumber
        player3Scoreboard.textContent = player3Score
        player3Dice.textContent = randomNumber
        message.textContent = "Player 1 Turn"
        player3Dice.classList.remove("active")
        player1Dice.classList.add("active")
        player2Turn =! player2Turn
   
   
    }
        player1Turn =! player1Turn      


    if (player1Score >= 20) {
        message.textContent = "Player 1 has won! 🔥"
        displayRestart3()
        } else if(player2Score >=20) {
        message.textContent = "Player 2 has won! 🔥"
        player2Turn = true
        displayRestart3()
        } else if (player3Score >=20) {
        message.textContent = "Player 3 has won! 🔥"
        displayRestart3()
    }
})


resetBtn.addEventListener("dblclick", function(){
    restart()
})

resetBtn3.addEventListener("dblclick", function() {
    restart()
    restart3()
})

function restart () {
    message.textContent = "Player 1 Turn"
    player1Score = 0
    player2Score = 0
    player3Score = 0
    resetBtn.style.display ="none"
    rollBtn.style.display ="block"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player3Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player3Dice.textContent = "-"
    player2Dice.classList.remove("active")
    player3Dice.classList.remove("active")
    player1Dice.classList.add("active")
    player1Turn = true
}



function restart3 () {
    resetBtn.style.display = "none"
    rollBtn.style.display ="none"
    rollBtn3.style.display ="block"
    resetBtn3.style.display ="none"
    
}




