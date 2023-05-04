type Hello = {
   name: string;
   age: number;
   profession: string;
   address: string;
}

const user3 : Hello = {
   name: 'arnab',
   age: 22,
   profession: "programmer",
   address: 'agrabad'
}

const calclulate = (
   num1: number,
   num2: number,
   operation: (x: number, y: number) => number
) => operation(num1, num2);

calclulate(10, 20, (x,y) => x + y);
calclulate(20, 10, (x,y) => x - y);
calclulate(20, 10, (x,y) => x / y);
calclulate(20, 10, (x,y) => x % y);

console.log(calclulate(10, 20, (x,y) => x + y));


// const helloo = (x: number, y: number): number => {
//    return x + y;
// }

const myfrinds = ["hello", 'mello', 'gello', 'chelo'];

const [bestFriends, twobest] = myfrinds;

// console.log(bestFriends, twobest);