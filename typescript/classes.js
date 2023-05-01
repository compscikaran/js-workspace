class Player {

    #score = 0;
    numLives = 10;
    static description = 'Player';

    constructor(first, last) {
        console.log("In constructor");
        this.first = first;
        this.last = last;
        this.#secret();
    }

    taunt() {
        console.log("BOO YAH");
    }

    loseLife() {
        this.numLives -= 1;
        this.#score += 10;
    }

    getScore() {
        return this.#score;
    }

    get score() {
        return this.#score;
    }

    set score(newScore) {
        if(newScore > 0)
            this.#score = newScore;
    }

    #secret() {
        console.log("SECRET...")
    }

    static whatAmI() {
        console.log("I am a Player");
    }

}

const p1 = new Player("Karan", "Gupta");
p1.loseLife()
console.log(p1)
p1.score = 1000;
console.log(p1.score)
p1.score = -12344;
console.log(p1.score)
Player.whatAmI();
console.log('I am a', Player.description)

class AdminPlayer extends Player{
    isAdmin = true;

    constructor(powers) {
        super('','');
        this.powers = powers;
    }
}

const p2 = new AdminPlayer(['scold', 'eliminate']);
console.log(p2);
