const { connect } = require("./client.js")

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //specify what happens when "data:" is received from stdin
  const handleUserInput = function (key) {
    if (key === '\u0003') {
    process.exit();
  }
}
  // setup interface to handle user input from stdin
  stdin.on("data", handleUserInput);
  
  return stdin;
  
  }

 setupInput()