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

Space.prototype.changeToX = function(space) {
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
    if (turn ===0) {
    Board1.Space[1].SpaceOnBoard = "X";
    $("#square1").html(Board1.Space[1].SpaceOnBoard);
    turnChange()
  } else {
    Board1.Space[1].SpaceOnBoard = "O";
    $("#square1").html(Board1.Space[1].SpaceOnBoard);
    turnChange()
  }
  });

  $("button.Square2").click(function() {
    if (turn ===0) {
      Board1.Space[2].SpaceOnBoard = "X";
      $("#square2").html(Board1.Space[2].SpaceOnBoard);
      turnChange()
    } else {
      Board1.Space[2].SpaceOnBoard = "O";
      $("#square2").html(Board1.Space[2].SpaceOnBoard);
      turnChange()
    }
  });

  $("button.Square3").click(function() {
    if (turn ===0) {
      Board1.Space[3].SpaceOnBoard = "X";
      $("#square3").html(Board1.Space[3].SpaceOnBoard);
      turnChange()
    } else {
      Board1.Space[3].SpaceOnBoard = "O";
      $("#square3").html(Board1.Space[3].SpaceOnBoard);
      turnChange()
    }
  });
  $("button.Square4").click(function() {
    if (turn ===0) {
      Board1.Space[4].SpaceOnBoard = "X";
      $("#square4").html(Board1.Space[4].SpaceOnBoard);
      turnChange()
    } else {
      Board1.Space[4].SpaceOnBoard = "O";
      $("#square4").html(Board1.Space[4].SpaceOnBoard);
      turnChange()
    }
  });
  $("button.Square5").click(function() {
    if (turn ===0) {
      Board1.Space[5].SpaceOnBoard = "X";
      $("#square5").html(Board1.Space[5].SpaceOnBoard);
      turnChange()
    } else {
      Board1.Space[5].SpaceOnBoard = "O";
      $("#square5").html(Board1.Space[5].SpaceOnBoard);
      turnChange()
    }
  });

  $("button.Square6").click(function() {
    if (turn ===0) {
      Board1.Space[6].SpaceOnBoard = "X";
      $("#square6").html(Board1.Space[6].SpaceOnBoard);
      turnChange()
    } else {
      Board1.Space[6].SpaceOnBoard = "O";
      $("#square6").html(Board1.Space[6].SpaceOnBoard);
      turnChange()
    }
  });
  $("button.Square7").click(function() {
    if (turn ===0) {
      Board1.Space[7].SpaceOnBoard = "X";
      $("#square7").html(Board1.Space[7].SpaceOnBoard);
      turnChange()
    } else {
      Board1.Space[7].SpaceOnBoard = "O";
      $("#square7").html(Board1.Space[7].SpaceOnBoard);
      turnChange()
    }
  });
  $("button.Square8").click(function() {
    if (turn ===0) {
      Board1.Space[8].SpaceOnBoard = "X";
      $("#square8").html(Board1.Space[8].SpaceOnBoard);
      turnChange()
    } else {
      Board1.Space[8].SpaceOnBoard = "O";
      $("#square8").html(Board1.Space[8].SpaceOnBoard);
      turnChange()
    }
  });
  $("button.Square9").click(function() {
    if (turn ===0) {
      Board1.Space[9].SpaceOnBoard = "X";
      $("#square9").html(Board1.Space[9].SpaceOnBoard);
      turnChange()
    } else {
      Board1.Space[9].SpaceOnBoard = "O";
      $("#square9").html(Board1.Space[9].SpaceOnBoard);
      turnChange()
    }
  });
});