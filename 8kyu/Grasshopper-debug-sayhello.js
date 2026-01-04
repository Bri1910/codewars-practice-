//Debugging sayHello function
//The starship Enterprise has run into some problem when 
// creating a program to greet everyone as they come aboard.
//  It is your job to fix the code and get the program working again!

//Example output:
//Hello, Mr. Spock


function sayHello(name) {
  return `Hello, ${name}`
}
//solution #2

const sayHello = name => `Hello, ${name}`;
//solution#3
function sayHello(name) {      //Added an actual name to the function
  return 'Hello, ' + name;     //Added '+' operator to combine strings
}
