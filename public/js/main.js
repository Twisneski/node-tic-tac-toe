let playerOne = "Player One";
let back;
let currentArray;
let winner = false;
let turns = 9;
let player1 = [];
let player2 = [];

let combos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

$("#container h2").html(playerOne + "'s Turn!");

function containsAll(needles, haystack){
  for(var i = 0 , len = needles.length; i < len; i++){
     if($.inArray(needles[i], haystack) == -1) return false;
  }
  return true;
}


$(".box").click(function() {
  let currentBox = $(this);

  if (playerOne === "Player One") {
    back = "x.png";
  } else {
    back = "o.png";
  }

  currentBox.css({"background-image": "url(../images/" + back + ")", "background-size": "cover"});

  var boxNum = currentBox.attr("id").slice(3);

  if (playerOne === "Player One") {
    player1.push(parseInt(boxNum));
    currentArray = player1;
  } else {
    player2.push(parseInt(boxNum));
    currentArray = player2;
  }

  console.log("Player 1: ", player1);
  console.log("Player 2: ", player2);

  for (var i = 0; i < combos.length; i++) {
    console.log(combos[i]);
    console.log(currentArray);
    let result = containsAll(combos[i], currentArray);
    console.log(result);
    if (result === true) {
      winner = true;
      combos[i].forEach( num => {
        $("#box" + num).css("background-color", "blue");
      });
      break;
    }
  }

  turns -= 1;

  if (winner === true) {
    $("#container h2").html(playerOne + " Wins!").css("color", "red");
  } else if (turns === 0) {
    $("#container h2").html("Sorry...No Winner. Game Over!").css("color", "red");
  } else if (turns === 0 && winner === true) {
    $("#container h2").html(playerOne + " Wins! Game Over!").css("color", "red");
  } else {
    if (turns % 2 === 0) {
      playerOne = "Player Two";
    } else {
      playerOne = "Player One";
    }
    $("#container h2").html(playerOne + "'s Turn!");
  }


});
