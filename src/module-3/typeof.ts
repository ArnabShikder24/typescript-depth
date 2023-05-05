type person = {
   name: string;
   age: number;
   salary: number;
}

type newType = "name" | "age" | "salary";

type newTypeUsingkeyOf = keyof person;

const a: newType = "age";
const b: newTypeUsingkeyOf = "salary";

function getProperty<X, Y extends keyof X>(obj: X, key: Y): X[Y] {
   return obj[key];
}

const property = getProperty({name: "hello world", age: 100}, "age");

// console.log(property);