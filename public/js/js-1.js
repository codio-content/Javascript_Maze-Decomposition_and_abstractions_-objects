
function keyPressedEvent(keyCode) {

  if (keyCode == 'C') {
    showMessage('X:' + player.x + ' Y:' + player.y)
    player.moveUp()
    player.moveRight()
  }
  
}


