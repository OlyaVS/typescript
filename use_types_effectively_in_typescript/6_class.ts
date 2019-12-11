interface Opponent {
    alias: string;
    health: number;
}

class ComicBookCharacter {
    private team: {
        name: string,
        members: ComicBookCharacter[]
    };

    constructor(public alias: string, public health: number, public strength: number, private secretIdentity: string) {}

    static createAndAssignTeam(teamName: string, members: ComicBookCharacter[]) {
        let team =  {
            name: teamName,
            members: members
        };

        members.forEach((member) => {
            member.team = team;
        });
    }

    getTeamName() {
        console.log(`${this.alias} is on the Team ${this.team.name}`);
    }

    getSecretIdentity() {
        console.log(`${this.alias}'s secret identity is ${this.secretIdentity}`);
    }

    attackFunc(opponent: Opponent, attackWidth: number) {
        opponent.health -= attackWidth;
        console.log(`${this.alias} attacked ${opponent.alias}, who's health = ${opponent.health}`);
    }
}

let theBlob = new ComicBookCharacter('The Blob', 1000, 5000, 'Fred J.Dukes');
let storm = new ComicBookCharacter('Storm', 100, 100, 'Ororo Munroe');
//storm.secretIdentity = 'Ororo Munroe'; //can't access private props outside the class

storm.attackFunc(theBlob, storm.strength);
storm.getSecretIdentity();

// static methods on instance in unavailable. only on class itself
// static props have access to the instance's private props
//storm.createAndAssignTeam();

ComicBookCharacter.createAndAssignTeam('oddCouple', [storm, theBlob]);
console.log(theBlob.getTeamName());