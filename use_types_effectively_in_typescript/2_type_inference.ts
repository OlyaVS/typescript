let userName: string = 'Silver Surfer';
userName = 'Gold Surfer';

// when no annotation the compiler will guess the type according to the type at initialization
let userName2 = 'Silver Surfer';
//userName2 = ['Silver', 'Surfer'];

// if we don't annotate + initialize as undefined + set the value later -> no errors,
// because compiler can't infer what the type is
let userName3;
userName3 = ['Silver', 'Surfer'];

// infer function return type
let userId = (a: string, b: number):string => a + b;
let userId2 = (a: string, b: number) => a + b;
//let userId3 = (a: string, b: number):number => a + b; //annotate the return with wrong type

// contextual inference
let target: HTMLElement = document.getElementById('target');
target.onclick = (event: MouseEvent) => event.button;

// remove annotations -> no errors
let target2 = document.getElementById('target');
target2.onclick = (event) => event.button;

// change the event type -> error
let target3 = document.getElementById('target');
//target3.onclick = (event: HTMLButtonElement) => event.button;

