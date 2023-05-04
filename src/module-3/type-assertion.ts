let ok:any;

ok = "Next level web development";

(ok as string).length;

function kgToGram(param: string | number): string | number | undefined {
   if(typeof param === "string") {
      return `The converted result is ${parseFloat(param) * 1000}`;
   }
   if(typeof param === "number") {
      return param * 1000;
   }
}

const result1 = kgToGram(50) as number;
const result2 = <string>kgToGram('100');