
$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
   
  keyPressed (function (keyCode) {    
    if ( keyCode == 'LEFT' ) {
      player.moveLeft()
    } 
    if ( keyCode == 'RIGHT' ) {
      player.moveRight()
    } 
    if ( keyCode == 'UP' ) {
      player.moveUp()
    } 
    if ( keyCode == 'DOWN' ) {
      player.moveDown()
    }  
    keyPressedEvent(keyCode)

  })
  createEmptyMaze(10, 6)
  addWall(1, 2)
  addWall(2, 2)
  addWall(3, 2)
  addWall(3, 3)
  addWall(3, 4)
  addWall(3, 5)
  addGoal()
  addPlayer()
  
  
  // fake the keyevent
  resetKeys();
  keyevent({ which: 67, type: 'keydown' });

  // one update event to process key event
  update();

  if(player.x == 5 && player.y == 3) {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, 'Well done!');      
  }
  
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  
})
.fail(function (jqxhr, settings, exception) {
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});