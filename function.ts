function add(n1: number, n2: number) {
  return n1 + n2;
}

// VOID TYPE
function printResult(num: number): void {
  console.log("Result:" + num);
}

printResult(add(5, 12));

// FUNCTION TYPE
// -- The function type describes a function in terms of parameters expected and the return type
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(11, 13));

// CALLBACKS AND FUNCTION TYPES

const addHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

addHandle(11, 13, printResult);
