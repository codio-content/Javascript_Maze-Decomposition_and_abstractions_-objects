The next challenge will test your ability to solve a complex, but fun coding problem.

## Escape the maze
We have generated a simple maze and you have to get to the exit. However, we've disabled the arrow keys.


## Helper function
We have provided a helper function `checkWall()` that checks whether there is a wall up, down, left or right as you make a move. To check if there is a wall above, you would call `checkWall('U')`. You can also check 'L', 'R' and 'D'.

```javascript
if ( checkWall('A') == false) {
  player.moveUp
}
```

which you can also write in shorthand (the `!` character means 'not') as

```javascript
if ( ! checkWall('A') ) {
  player.moveUp
}
```

This is asking "if there is **not** (that's the `!` remember) a wall above the player, then move up.

{Check It!|assessment}(test-2365830075)


|||guidance
## One possible solution

```javascript
function keyPressedEvent(keyCode) {

  if( !checkWall('U') )
    player.moveUp()
  else if( !checkWall('R') )
    player.moveRight()
  else if( !checkWall('L') )
    player.moveLeft()
  else if( !checkWall('D') )
    player.moveDown()

}
```
|||