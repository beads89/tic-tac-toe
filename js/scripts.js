let turn = 0

function turnChange() {
	if (turn === 0) {
  turn = 1
  $("#turnToggle").text("Player 2 Turn");
  } else {
  turn = 0
  $("#turnToggle").text("Player 1 Turn");
  }  
}

function Board() {
  this.Space = {};
}

let Board1 = new Board();

function Space(value) {
  this.SpaceOnBoard = value;
  console.log(value)
}

let Space1 = new Space("1");
let Space2 = new Space("2");
let Space3 = new Space("3");
let Space4 = new Space("4");
let Space5 = new Space("5");
let Space6 = new Space("6");
let Space7 = new Space("7");
let Space8 = new Space("8");
let Space9 = new Space("9");

Board.prototype.addSpace = function(Space) {
  this.Space[Space.SpaceOnBoard] = Space
 }

Space.prototype.changeToX = function() {
  this.SpaceOnBoard = "X"
}


function changeBoardX(Space) {
	Board.Space1 = "X"
}

Board1.addSpace(Space1)
Board1.addSpace(Space2)
Board1.addSpace(Space3)
Board1.addSpace(Space4)
Board1.addSpace(Space5)
Board1.addSpace(Space6)
Board1.addSpace(Space7)
Board1.addSpace(Space8)
Board1.addSpace(Space9)

$(document).ready(function() {

  $("button.Square1").click(function() {
    changeBoardX()
    $("#square1").html(Board1.Space[1].SpaceOnBoard);
    turnChange()
  });
});