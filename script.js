document.querySelector("#play").addEventListener("click", () => {
  let cosas = ["Rock", "Paper", "Scissor"]

  function list() {
    let message = ""
    for (let i = 0; i < cosas.length; i++) {
      message = message.concat(`${i + 1}- ${cosas[i]}`, "\n")
    }
    return message
  }

  let userChoice = ""
  do {
    userChoice = prompt(`Choose one: \n${list()}`)
    console.log(typeof userChoice)
  } while (userChoice == "")

  let computerChoice = getRandomInt(0, 3)

  alert(`Computer has choosen ${cosas[computerChoice]}`)

  if (computerChoice == userChoice % 3) {
    alert("You loose")
  } else if (computerChoice == userChoice - 1) {
    alert("Draw")
  } else {
    alert("You win")
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }
})
