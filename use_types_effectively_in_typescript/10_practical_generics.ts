// two regular interfaces + 1 generic interface
// Generics makes great container because they can contain anything

interface Crocodile { personality: string; }
interface Taxes { year: number; }
interface Container<T> { unit: T; }

let crocContainer: Container<Crocodile> = { unit: { personality: 'mean'}};
let taxContainer: Container<Taxes> = { unit: { year: 2011}};

interface RedCroc extends Crocodile { color: 'red' }
interface BlueCroc extends Crocodile { color: 'blue' }

// to be more specific what we can contain - use generic constraint
// constraint change generics from excepting anything to excepting anything with this type
interface CrocContainer<T extends Crocodile> { crocUnit: T;}

let redCrocContainer: CrocContainer<RedCroc> = { crocUnit: {personality: 'irate', color: 'red'}};
let blueCrocContainer: CrocContainer<BlueCroc> = { crocUnit: {personality: 'cool', color: 'blue'}};

// class generic constrains

// prop is set after instantiation
class ClassyContainer<T extends Crocodile> {
    classyCrocUnit: T;
}

// not setting the constraint type
let classyCrocContainer = new ClassyContainer();
classyCrocContainer.classyCrocUnit = {personality: 'classy'};

// setting the sonstraint type
let classyCrocContainer2 = new ClassyContainer<RedCroc>();
classyCrocContainer2.classyCrocUnit = {personality: 'classy', color: 'red'};

// class using  constructor's shorthand to set the value of prop at instantiation
class CCC<T extends Crocodile> {
    constructor(public cccUnit: T) {}
}

let ccc = new CCC({ personality: 'ultra classy' });

// If we don't pass a type argument,
// we can add extra properties as long as the class instance has the constraint type
let ccc2 = new CCC({ personality: 'ultra classy' , likeCheetos: true});
console.log(ccc2);

// If we want to be more specific, we can still pass a type argument
// and likeCheetos does not exist on the BlueCroc
let ccc3 = new CCC<BlueCroc>({ personality: 'ultra classy' , color: 'blue'});