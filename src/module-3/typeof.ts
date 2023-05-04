type person = {
   name: string;
   age: number;
   salary: number;
}

type newType = "name" | "age" | "salary";

type newTypeUsingkeyOf = keyof person;

const a: newType = "age";
const b: newTypeUsingkeyOf = "salary";