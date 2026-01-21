let level = "Ferro"
let winRatio = CalculateWinRatio(25, 20)


function CalculateWinRatio(wins, losses)
{
  let ratio = wins - losses
  return console.log(ratio)
}