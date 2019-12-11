// annotating variable as string type
// can be set to any string
let unit: string = 'awesome';

// annotating variable as string literal type
// can be set to type value/null/undefined
let miles: 'MILES';
let miles2: 'MILES' = 'MILES';
//let miles3: 'MILES' = 'miles'; // error

// string literal combined with union types ans alias types

function moveCharacter(distance: number, value: string) {
    console.log(`You moved ${distance} ${value}`);
}

moveCharacter(3, 'feet');

// but we can pass the wrong string value -> no errors, because we accept any string
moveCharacter(3, 'dragon');

// make a type alis using string literals and union types
type distanceMetric = 'MILES' | 'KILOMETERS' | 'METERS' | 'YARDS' | 'FEET' | 'INCHES';

function moveCharacter2(distance: number, value: distanceMetric) {
    console.log(`You moved ${distance} ${value}`);
}

moveCharacter2(3, 'dragon'); // error