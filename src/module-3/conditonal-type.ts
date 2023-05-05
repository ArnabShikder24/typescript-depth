type a = string;
type b = undefined;

type c = a extends string ? string : null;

type Sheikh = {
   wife1: string;
   wife2: string;
}


type checkProperty<T, K> = K extends keyof T ? true : false;

type checkWife1 = checkProperty<Sheikh, "wife1">;


type bondu = "arnab" | "mynul" | "onion";
type remove<T, K> = T extends K ? never : T;
type checkBondu = remove<bondu, "onion">;

// interface Main {
//    name: string;
//    age: number
// }

// interface NewMain extends Main  {
//    knowledge: string;
// }

// const newHello: NewMain = {
//    name: 'arnab',
//    age: 200,
//    knowledge: "onekh"
// }