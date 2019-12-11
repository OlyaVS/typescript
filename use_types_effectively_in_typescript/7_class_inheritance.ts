class ComicBookCharacter {
    constructor(
        public alias: string,
        public health: number,
        public strength: number,
        protected secretIdentity: string) {
    }
}

// we can add some spesific props
// can't access inherited private props, because can't access private modifier outside of containing class
// protected props can't be accessed outside the class, but CAN be accessed in derived class
class SuperHero extends ComicBookCharacter {
    traits = ['empathy', 'strong moral code'];

    getSecretId() {
        console.log(this.secretIdentity);
    }
}

class SuperVillain extends ComicBookCharacter {
    flaws = ['hubris', 'always explains evil plan'];

    constructor(a, b, c, d) {
        super(a, b, c, d);
        console.log(`${this.alias} eats kittens!!!`)
    }
}

let jubilee = new SuperHero('Jubilee', 23, 233, 'Jubilation Lee');
let scarletWitch = new SuperVillain(' Scarlet Witch', 233, 4444, "Wanda Maximoff");

console.log(jubilee.getSecretId());
console.log(scarletWitch);