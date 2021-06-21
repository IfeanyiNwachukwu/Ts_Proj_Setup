// OBJECT TYPES
//object types are written almost like objects but
// as key - type pairs rather than key-value pairs(as in objects)

// -- Not Ideal
const person: {
  name: string;
  age: number;
} = {
  name: "Max",
  age: 30,
};

//--Ideally

const Person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple
} = {
  name: "Chukwudi",
  age: 33,
  hobbies: ["sports", "cooking"],
  role: [1, "C.E.O"],
};

Person.role.push("Managing Director"); // This is something TS does not check
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const personA = {
  name: "Gambo",
  age: 33,
  role: Role.ADMIN,
};

console.log(personA);
