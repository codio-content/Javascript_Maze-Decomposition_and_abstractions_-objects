
function keyPressedEvent(keyCode) {

  if (keyCode == 'C') {
    player.moveUp()
    player.moveRight()
    showMessage('X:' + player.x + ' Y:' + player.y)
  }

}


