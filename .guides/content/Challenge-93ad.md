|||challenge
Take a look at the maze on the left. Your job is to somehow get the player to the exit by checting with some code.

You will need to write code so that when the 'C' key is pressed, you escape.

Take a look at the previous page for a clue.

The arrow keys work still, but you are walled in!!

|||

|||guidance
## Solution

```javascript
function keyPressedEvent(keyCode) {

  if (keyCode == 'C') {
    player.x = 5
    player.y = 3
  }
  
}
```
|||