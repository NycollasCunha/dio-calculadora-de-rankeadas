let winRatio = CalculateWinRatio(1001,100)
let playerLevel = CalculateLevel(winRatio)

console.log("O player tem um saldo de: " + winRatio + " e está no nível: " + playerLevel + "!")


function CalculateWinRatio(wins, losses)
{
  let ratio = wins - losses
  return ratio
}

function CalculateLevel(ratio)
{
  let level = ""

  if (ratio <= 10)
  {
    level = "Ferro"
  }
  else if (ratio <= 20)
  {
    level = "Bronze"
  }
  else if (ratio <= 50)
  {
    level = "Prata"
  }
  else if (ratio <= 80)
  {
    level = "Ouro"
  }
  else if (ratio <= 90)
  {
    level = "Diamante"
  }
  else if (ratio <= 100)
  {
    level = "Lendário"
  }
  else
  {
    level = "Imortal"
  }

  return level
}