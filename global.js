// const path = require("path");

// console.log(__dirname);
// console.log(`The file name is ${path.basename(__filename)}`);

// for (let key in global) {
//   console.log(key);
// }

// console.log(process.argv);

function grab(flag) {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(`Greeting: ${greeting}`);
console.log(`User: ${user}`);
