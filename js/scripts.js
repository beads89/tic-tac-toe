let turn = 0

function turnChange() {
	if (turn === 0) {
  turn = 1
  } else {
  turn = 0
  }  
}


$("button").click(function() {
	if(turn === 0) {
  	$("#turnToggle").text("Player 2 Turn");
    turn = 1;
  }
  else {
  	$("#turnToggle").text("Player 1 Turn");
    turn = 0;
  }
});