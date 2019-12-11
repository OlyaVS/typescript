interface SuperHero {
    powers: string[];
    saveTheDay: () => void;
}

interface BadGuy {
    badDeeds: string[];
    getRandomBadDeed: () => string;
    commitBadDeed: () => void;
}

let dazzler: SuperHero = {
    powers: ['transduces sonic vibrations into light'],
    saveTheDay() {console.log(`Dazzler ${this.powers} to save the day!!!`);}
};

let badGuy: BadGuy = {
    badDeeds: ['farts on old folks', 'does not picks up his dogs poop', 'steals from babes'],
    getRandomBadDeed() { return this.badDeeds[Math.floor(Math.random() * this.badDeeds.length)]},
    commitBadDeed() { console.log(`BadGuy ${this.getRandomBadDeed()}`); }
};

function saveDayORBadDeed(something: SuperHero | BadGuy) {
    if ((something as SuperHero).powers) {
        (something as SuperHero).saveTheDay();
    } else {
        (something as BadGuy).commitBadDeed();
    }
}

saveDayORBadDeed(dazzler);
saveDayORBadDeed(badGuy);