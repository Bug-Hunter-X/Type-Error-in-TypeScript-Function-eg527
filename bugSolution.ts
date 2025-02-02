function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
//Solution 1: Modify function signature to accept an array of strings
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}
console.log(greeterArray(user));
//Solution 2: Destructure the array to pass the correct type of string argument
let [firstName, lastName] = user;
console.log(greeter(firstName));