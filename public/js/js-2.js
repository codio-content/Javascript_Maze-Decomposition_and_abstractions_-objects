
function initGame() {
  
  gameDetails = new Object
  
}

function turnTaken() {

  gameDetails.x = player.x
  gameDetails.y = player.y
  gameDetails.score = score
  gameDetails.energy = energy
  gameDetails.lastKey = ''

  showMessage('X:' + gameDetails.x + ' Y:' + gameDetails.y)
  
}


