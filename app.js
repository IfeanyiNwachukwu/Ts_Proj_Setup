// THE UNKNOWN TYPE
var userInput;
var userName;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
// throw never returns any thing so the return type is never
generateError("An error has occured", 500);
