function add2(num1: number, num2: number): number {
   return num1 + num2;
};

const multi = (num1: number, num2: number): number => {
   return num1 * num2;
}

// rest pearameter
const greetFriends = (...friends:string[]):void => {
   friends.forEach(frnd => console.log(frnd));
}


greetFriends('arnab', 'mynul', 'sagor', 'ibrahim', 'jony');