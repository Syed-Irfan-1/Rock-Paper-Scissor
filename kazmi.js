const game = () => {
  let pScore = 0
  let cScore = 0

  const startGame = () => {
    const playBtn = document.querySelector(".intro button")
    const introScreen = document.querySelector(".intro")
    const match = document.querySelector(".match")

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut")
      match.classList.add("fadeIn")
    })
  }

  //play match

  const playMatch = () => {
    const options = document.querySelectorAll(".options button")
    const playerHand = document.querySelector(".player-hand")
    const computerHand = document.querySelector(".computer-hand")
    const hands = document.querySelectorAll(".hands img")

    for (let i = 0; i < hands.length; i++) {
      hands[i].addEventListener("animationend", (e) => {
        console.log(e)
        e.target.style.animation = ""
      })
    }

    //computer option
    const computerOptions = ["rock", "paper", "scissors"]

    for (let i = 0; i < options.length; i++) {
      options[i].addEventListener("click", (e) => {
        const computerNumber = Math.floor(Math.random() * 3)
        const computerChoice = computerOptions[computerNumber]
        compareHands(e.target.textContent, computerChoice)

        playerHand.src = `./images/${e.target.textContent}.png`
        computerHand.src = `./images/${computerChoice}.png`

        playerHand.style.animation = "shakePlayer 2s ease"
        computerHand.style.animation = "shakeComputer 2s ease"
      })
    }
  }

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner")
    if (playerChoice === "reset"){
      winner.textContent = "start again :)"
      pScore=0
      cScore=0
      updateScore()
      return
    }
    if (playerChoice === computerChoice) {
      winner.textContent = "tie!"
      return
    }

    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "you win"
        pScore++
        updateScore()
        return
      } else {
        winner.textContent = "computer win"
        cScore++
        updateScore()
        return
      }
    }

    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "computer win"
        cScore++
        updateScore()
        return
      } else {
        winner.textContent = "you win"
        pScore++
        updateScore()
        return
      }
    }

    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "you win"
        pScore++
        updateScore()
        return
      } else {
        winner.textContent = "computer win"
        cScore++
        updateScore()
        return
      }
    }
  }

  const updateScore = () => {
    console.log("score updated")
    const playerScore = document.querySelector(".player-score p")
    const computerScore = document.querySelector(".computer-score p")
    playerScore.textContent = pScore
    computerScore.textContent = cScore
  }

  startGame()
  playMatch()
  //   updateScore()
}

game()
