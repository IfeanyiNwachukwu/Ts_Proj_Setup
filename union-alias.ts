// // UNION TYPE

// function Combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = Combine(30, 26);
// console.log(combinedAges);

// const combinedNames = Combine("Max", "Anna");
// console.log(combinedNames);

// TYPE ALIAS

type combinable = number | string;
type conversionDescriptor = "as-number" | "as-text";

function Combine(input1: combinable, input2: combinable) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
