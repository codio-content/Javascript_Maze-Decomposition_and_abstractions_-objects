
function keyPressedEvent(keyCode) {

  if( !checkWall('A') )
    player.moveUp()
  else if( !checkWall('R') )
    player.moveRight()
  else if( !checkWall('L') )
    player.moveLeft()
  else if( !checkWall('B') )
    player.moveDown()

}



