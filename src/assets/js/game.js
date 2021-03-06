'use strict';
/* Memory Game Models and Business Logic */


function Tile(title) {
  this.title = title;
  this.flipped = false;
}

Tile.prototype.flip = function () {
  this.flipped = !this.flipped;
}



function Game(tileNames) {
  var tileDeck = makeDeck(tileNames);

  this.grid = makeGrid(tileDeck);
  this.message = Game.MESSAGE_CLICK;
  this.unmatchedPairs = tileNames.length;  

  this.flipTile = function (tile) {
    if (tile.flipped) {
      return;
    }

    tile.flip();

    if (!this.firstPick || this.secondPick) {

      if (this.secondPick) {
        this.firstPick.flip();
        this.secondPick.flip();
        this.firstPick = this.secondPick = undefined;
      }

      this.firstPick = tile;
      this.message = Game.MESSAGE_ONE_MORE;

    } else {

      if (this.firstPick.title === tile.title) {
        this.unmatchedPairs--;
        this.message = (this.unmatchedPairs > 0) ? Game.MESSAGE_MATCH : Game.MESSAGE_WON;
        this.firstPick = this.secondPick = undefined;
      } else {
        this.secondPick = tile;
        this.message = Game.MESSAGE_MISS;
      }
    }
  }    
}

Game.MESSAGE_CLICK = 'Escolha uma carta.';
Game.MESSAGE_ONE_MORE = 'Selecione mais uma carta.'
Game.MESSAGE_MISS = 'Tente novamente.';
Game.MESSAGE_MATCH = 'Bom trabalho! Continue assim.';
Game.MESSAGE_WON = 'Você venceu!';



/* Create an array with two of each tileName in it */
function makeDeck(tileNames) {
  var tileDeck = [];
  tileNames.forEach(function (name) {
    tileDeck.push(new Tile(name));
    tileDeck.push(new Tile(name));
  });

  return tileDeck;
}


function makeGrid(tileDeck) {
  var gridDimension = Math.sqrt(tileDeck.length),
    grid = [];

  for (var row = 0; row < gridDimension; row++) {
    grid[row] = [];
    for (var col = 0; col < gridDimension; col++) {
      grid[row][col] = removeRandomTile(tileDeck);
    }
  }

  return grid;
}


function removeRandomTile(tileDeck) {
  var i = Math.floor(Math.random() * tileDeck.length);
  return tileDeck.splice(i, 1)[0];
}

function getRandomizer(bottom, top) {
  var rand =  Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
 
  if(tileNames.indexOf(rand) >= 0) {
    while(tileNames.indexOf(rand) >= 0) {
      rand =  Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;      
    }
  }  

  return rand;
}

var tileNames = [];
tileNames.push(getRandomizer(1, 16));
tileNames.push(getRandomizer(1, 16));
tileNames.push(getRandomizer(1, 16));
tileNames.push(getRandomizer(1, 16));
tileNames.push(getRandomizer(1, 16));
tileNames.push(getRandomizer(1, 16));
tileNames.push(getRandomizer(1, 16));
tileNames.push(getRandomizer(1, 16));


var game = new Game(tileNames);

