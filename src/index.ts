const course: string = "Apollo Mission 2||Next Level Web Development";
const age: number = 34;
const isVisiable: boolean = true;

let hello = null;
let gello = undefined;

hello = 333;
gello = 'Arnab shikder'

// console.log(course);

function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

const item = arr[index];

return item[key];

}
 
 
 
const users = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];

// console.log(getArrayItem(users, 0, 'name'))

// type Data = { num1: number }



// type B = {

//   [key in keyof Data]: string;

// }

// const numbers:B = {

//   num1: 20

// }

interface Person {

   firstName: string;
 
   lastName: string;
 
 }
 
 
 
 function fullName<T extends Person>(person: T): string {
 
   return `${person.firstName} ${person.lastName}`;
 
 }