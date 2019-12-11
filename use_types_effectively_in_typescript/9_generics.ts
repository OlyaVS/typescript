// first argument is T type, second argument is an array of T types
// T - is the same type fro both arguments
// tell the compiler that we are going to use the specific type,
// but not going to tell what type until the func is called

function pushSomethingIntoCollection<T>(something: T, collection: T[]) {
    collection.push(something);
    console.log(collection);
}

let jeanGrey = { name: 'Jean Grey'};
let wolverine = { name: 'Wolverine'};

let superHerous = [jeanGrey];
let powers = ['telekinesis', 'esp'];

// we can call the func with anyting and array before we define generic types
pushSomethingIntoCollection(wolverine, superHerous);
pushSomethingIntoCollection('adamantium claws', powers);

pushSomethingIntoCollection('cool', superHerous); // error -> 1 arg - string, 2 arg - array of objects
pushSomethingIntoCollection('adamantium claws', []);

// create interface because type can get larger
// generics allow to write reusable code with types what we set when the function is called
interface SuperHero { name: string }

// we can set the generic value when the func is called
pushSomethingIntoCollection<{name: string}>('cool', superHerous); // error
pushSomethingIntoCollection<string>('adamantium claws', powers);

pushSomethingIntoCollection<SuperHero>('cool', superHerous); // error
pushSomethingIntoCollection<SuperHero>(wolverine, superHerous);