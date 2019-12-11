interface KrustyTheClown {
    alias: string;
    health: number;
    inebriationLevel: number;
    attack: AttackFunction;
}

interface AttackFunction {
    (opponent: ComicBookCharacter, attackWith: number): number;
}

interface OptionalAttributes {
    strength?: number;
    insanity?: number;
    dexterity?: number;
    healingFactor?: number;
}

interface ComicBookCharacter extends OptionalAttributes {
    secretIdentity?: string;
    alias: string;
    health: number;
    attack: AttackFunction;
}

function attack(this: ComicBookCharacter, opponent: ComicBookCharacter, attackWidth: number) {
    opponent.health -= attackWidth;
    console.log(`${this.alias} attacked ${opponent.alias}, who's health = ${opponent.health}`);
    return opponent.health;
}

let superHero: ComicBookCharacter = {
    alias: 'She-Hulk',
    health: 5000,
    strength: 5000,
    attack: attack
};

let superVillain: ComicBookCharacter = {
    secretIdentity: 'Jack Napier',
    alias: 'Joker',
    health: 75,
    insanity: 145,
    attack: attack
};

function getSecretidentity (character: ComicBookCharacter) {
    if (character.secretIdentity) {
        console.log(`${character.alias} is ${character.secretIdentity}`);
    } else {
        console.log(`${character.alias} has no secret identity`);
    }
}

getSecretidentity(superHero);
superHero.attack(superVillain, superHero.strength);