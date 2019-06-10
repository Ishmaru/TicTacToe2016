(function () {
console.log("linked");
//set Var
var gameOn = true;

var gameboard = [{b0}, {b1}, {b2},
                 {b3}, {b4}, {b5},
                 {b6}, {b7}, {b8}];

var player = null;
var aiOn = false;
var b0 = document.getElementById('b0');
    b0.addEventListener('click', function() {
    getInput(b0, 0);
});
var b1 = document.getElementById('b1');
    b1.addEventListener('click', function() {
    getInput(b1, 1);
});
var b2 = document.getElementById('b2');
    b2.addEventListener('click', function() {
    getInput(b2, 2);
});
var b3 = document.getElementById('b3');
    b3.addEventListener('click', function() {
    getInput(b3, 3);
});
var b4 = document.getElementById('b4');
    b4.addEventListener('click', function() {
    getInput(b4, 4);
});
var b5 = document.getElementById('b5');
    b5.addEventListener('click', function() {
    getInput(b5, 5);
});
var b6 = document.getElementById('b6');
    b6.addEventListener('click', function() {
    getInput(b6, 6);
});
var b7 = document.getElementById('b7');
    b7.addEventListener('click', function() {
    getInput(b7, 7);
});
var b8 = document.getElementById('b8');
    b8.addEventListener('click', function() {
    getInput(b8, 8);
});

function getInput(target, index) {
  if ((gameboard[index].value === null) && gameOn === true) {
    gameboard[index].value = player;
    target.textContent = player;
    if (player === "X") {
      gameboard[index].value = "X"
      target.textContent = "X";
      check();
    } else {
      gameboard[index].value = "O";
      target.textContent = "O";
      check();
    };
  };
};

//Set up play space
function gameInit() {
  for (var i = 0; i < gameboard.length; i++) {
    gameboard[i].name = "n" + i;
    gameboard[i].value = null;
    // .name sets a name to call later
    // .value contains game token (null, x ,y)
    console.log(gameboard);
    console.log(gameboard[i]);
  }
  console.log(gameboard);
  getStart(player);
}

//select a player to start
function getStart() {
  var random = Math.random();
  if (random < 0.5) {
    player = "X";
  } else {
    player = "O";
  }
  console.log(player);
  check(player);
};

// switch players
function switchPlayer() {
  if (player == 'X') {
    player = 'O';
    if ((aiOn === true) && (gameOn === true)) {
      ranSel();
    };
  } else if (player == 'O') {
    player = 'X';
  };
  if (gameOn === true) {
    var currentP = document.getElementById('xy');
    currentP.textContent = player;
  };
};

function check() {
// check if rows are equal
  if (((gameboard[0].value !== null) && (gameboard[0].value === gameboard[1].value && gameboard[1].value === gameboard[2].value)) ||
   ((gameboard[3].value !== null) && gameboard[3].value === gameboard[4].value && gameboard[3].value === gameboard[5].value) ||
    ((gameboard[6].value !== null) && gameboard[6].value === gameboard[7].value && gameboard[6].value === gameboard[8].value)) {
      console.log("YOU WIN! " + player);
      endGame();
  } else if (((gameboard[0].value !== null) && (gameboard[0].value === gameboard[3].value && gameboard[0].value === gameboard[6].value)) ||
   ((gameboard[1].value !== null) && gameboard[1].value === gameboard[4].value && gameboard[1].value === gameboard[7].value) ||
    ((gameboard[2].value !== null) && gameboard[2].value === gameboard[5].value && gameboard[2].value === gameboard[8].value)) {
      console.log("YOU WIN! " + player);
      endGame();
  } else if (((gameboard[0].value !== null) && (gameboard[0].value === gameboard[4].value && gameboard[0].value === gameboard[8].value)) ||
   ((gameboard[2].value !== null) && gameboard[2].value === gameboard[4].value && gameboard[2].value === gameboard[6].value)) {
      console.log("YOU WIN! " + player);
      endGame();
  } else {
    switchPlayer();
  };
};



// Below this section is for AI Only
var ai = document.getElementById('ai');
    ai.addEventListener('click', function() {
      if (aiOn === false){
      ai.textContent = ("Ai On");
      aiOn = true;
        if (player = "O") {
          ranSel();
        }
     } else {
      ai.textContent = ("Ai Off");
      aiOn = false;
     }
});


function ranSel() {
    for (var i = 0; i < 9; i++) {
      var n = Math.random();
      console.log(n);
      if (n > 0.85) {
        var t = 0;
      } else if (n > 0.79) {
        t = 1;
        i = 10;
      } else if (n > 0.64) {
        t = 2;
        i = 10;
      } else if (n > 0.58) {
        t = 3;
        i = 10;
      } else if (n > 0.43) {
        t = 4;
        i = 10;
      } else if (n > 0.37) {
        t = 5;
        i = 10;
      } else if (n > 0.22) {
        t = 6;
        i = 10;
      } else if (n > 0.16) {
        t = 7;
        i = 10;
      } else if (n > 0) {
        t = 8;
        i = 10;
      };
 cpuInput(t);
 return(0);
    };
};

function cpuInput(input) {
  if (gameboard[input].value === null) {
    gameboard[input].value = player;
    input = document.getElementById('b' + input)
    input.textContent = 'O';
    console.log(input);
    check();
  } else {
    ranSel();
  };
};

gameInit();

function endGame(){
  console.log("cry")
  var currentP = document.getElementById('xy');
  gameOn = false;
  currentP.textContent = (player + " WINS!");
  return(0);
};

})();
