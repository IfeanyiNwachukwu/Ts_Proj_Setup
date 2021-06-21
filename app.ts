// THE UNKNOWN TYPE
let userInput: unknown;

let userName: string;

userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
// throw never returns any thing so the return type is never
generateError("An error has occured", 500);
