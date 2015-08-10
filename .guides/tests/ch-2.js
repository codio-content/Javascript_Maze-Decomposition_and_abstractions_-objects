
var fs = require('fs');

var up = false;
var down = false
var left = false;
var right = false;

var i = 0;
var check = '';

global.checkWall = function(c) {
  return check == c;
}

var player = { 
  moveUp: function() {
    up = true; 
  },
  moveDown: function() {
    down = true; 
  },
  moveLeft: function() {
    left = true; 
  },
  moveRight: function() {
    right = true; 
  }
}

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-2.js', 'utf8');
  eval(data);
  
  check = 'U';
  keyPressedEvent();
  check = 'D';
  keyPressedEvent();
  check = 'L';
  keyPressedEvent();
  check = 'R';
  keyPressedEvent();
    
  if(up && right) {   
    process.stdout.write('Well done!');  
    process.exit(0);
  }
}
catch(e) {
  console.log(e)
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
