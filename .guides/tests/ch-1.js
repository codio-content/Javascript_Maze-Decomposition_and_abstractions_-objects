
var fs = require('fs');

var player = { x: 1, y: 5 }

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-1.js', 'utf8');
  eval(data);
  
  keyPressedEvent('C');
  
  if(!(player.x <= 3 && player.y >= 2)) {   
    process.stdout.write('Well done!');  
    process.exit(0);
  }
}
catch(e) {
  
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
