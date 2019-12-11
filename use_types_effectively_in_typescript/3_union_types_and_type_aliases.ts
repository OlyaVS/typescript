let thing: string;

// union type
let thing2: string | number | string[] | boolean;

let returnSomeThing = (someThing: string | number | string[] | boolean) =>{
    return someThing;
};

// aliases
type thing3 = string | number | string[] | boolean;
let returnSomeThing2 = (someThing: thing3) => someThing;

//console.log(returnSomeThing2('coolGuy'));


// use type guard for func to act different
let returnSomeThing3 = (someThing: thing3) => {
    if (typeof someThing === "string" ||
        typeof someThing === "number" ||
        typeof someThing === "boolean") {
        console.log('something =', someThing);
    }

    if (someThing instanceof Array) {
       let joinedThings = '';

       someThing.forEach((thing) => {
           joinedThings += ` ${thing}`;
       });

       console.log('jointThings:', joinedThings);
    }
};

//returnSomeThing3(234);
//returnSomeThing3(['wonder', 'woman', 'rocks!!!']);

let returnSomeThing4 = (someThing: thing3) => {
    if (someThing instanceof Array) {
        let joinedThings = '';

        someThing.forEach((thing) => {
            joinedThings += ` ${thing}`;
        });

        console.log('jointThings:', joinedThings);
    } else {
        console.log('something =', someThing);
    }
};

returnSomeThing4(false);
returnSomeThing4(['wonder', 'woman', 'rocks again!!!']);

// don't union type objects with not objects
type stuff = string | {name: string;};

let gimmeStuff = (stuff: stuff) => {
    typeof stuff === 'string';
    typeof stuff.name === 'string'; // error -> string does not have a name property
};

//don't union type object literals that don't share common parameter
type coolThings = {name: string;} | {id: number;};
let gimmeCoolThings = (thing: coolThings) => {
    if (typeof thing.name === 'string') { // error -> type {id: string;} doesn't have a name property
        return thing.name;
    }

    if (typeof thing.id === 'number') { // error -> type {name: string;} doesn't have an id property
        return thing.id;
    }
};

// you can access common parameter, but not the  uncommon
type stuffAndThings = {cool: string; meh: string} | {cool: string; lame: string}
let gimmeStuffAndThings = (sat: stuffAndThings) => {
    //return sat.cool || sat.lame; // error -> lame is not a common prop
    return sat.cool;
};