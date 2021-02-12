var Game = /** @class */ (function () {
    function Game() {
        this.teams = [];
        for (var index = 0; index < 2; index++) {
            this.teams.push(new Team(index));
        }
    }
    return Game;
}());
var Team = /** @class */ (function () {
    function Team(id) {
        this.players = [];
        this.id = id;
        for (var index = 0; index < 10; index++) {
            this.players.push(new Player(index));
        }
    }
    return Team;
}());
var Player = /** @class */ (function () {
    function Player(id) {
        this.score = 0;
        this.balls = 0;
        this.ballscore = [null, null, null, null, null, null];
        this.id = id;
    }
    return Player;
}());
document.getElementById("create-game").addEventListener("click", function () {
    var game = new Game();
    console.log(game);
});
