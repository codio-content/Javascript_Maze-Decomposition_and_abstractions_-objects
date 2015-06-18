
function checkWall(where) {
  var x = player.x
  var y = player.y
  var hit = false

  switch (where.toUpperCase()) {
    case 'L':
      if ( tiles[x-1][y].type == 'wall') {
        hit = true
      }
      break
      case 'R':
      if ( tiles[x+1][y].type == 'wall') {
        hit = true
      }
      break
      case 'A':
      if ( tiles[x][y-1].type == 'wall') {
        hit = true
      }
      break
      case 'B':
      if ( tiles[x][y+1].type == 'wall') {
        hit = true
      }
      break
  }
  return hit
} 

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
             
  keyPressed (function (keyCode) {
    keyPressedEvent(keyCode)       
  })        
  createEmptyMaze(12, 8)
  addWall(1,1)
  addWall(4,2)
  addWall(6,2)
  addWall(5,5)
  addGoal()
  addPlayer()

  var goalFound = false;
  
  // don't need to flush_stack to server
  window._flushStack = function() {
    goalFound = true;
  }
  
  for(var i = 0; i < 100; i++) {
    resetKeys();
    // C
    keyevent({ which: 67, type: 'keydown' });    
    update()
    
    if(goalFound) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, 'Well done!');      
    }
  
  }      

  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  
})
.fail(function (jqxhr, settings, exception) {
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});