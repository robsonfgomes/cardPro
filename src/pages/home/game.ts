/*
export class Game {

    MESSAGE_CLICK = 'Click on a tile.';
    MESSAGE_ONE_MORE = 'Pick one more card.'
    MESSAGE_MISS = 'Try again.';
    MESSAGE_MATCH = 'Good job! Keep going.';
    MESSAGE_WON = 'You win!';
    title;
    flipped;

    Tile(title): void {
        this.title = title;
        this.flipped = false;
    }

    flip(): void {
        this.flipped = !this.flipped;
    }

    constructor(public tileNames: Array<String>) {
        let tileDeck = this.makeDeck(tileNames);

        this.grid = makeGrid(tileDeck);
        this.message = Game.MESSAGE_CLICK;
        this.unmatchedPairs = tileNames.length;

        this.flipTile = function (tile) {
            if (tile.flipped) {
                return;
            }

            this.flip();

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


    makeDeck(tileNames): Array<String> {
        var tileDeck = [];
        tileNames.forEach(function (name) {
            tileDeck.push(new Tile(name));
            tileDeck.push(new Tile(name));
        });

        return tileDeck;
    }

}
*/