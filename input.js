let connection;
const { keyMap } = require("./constants");
// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //specify what happens when "data:" is received from stdin
  const handleUserInput = function(key) {
  //exit game when pressing ctrl+c
    if (key === '\u0003') {
      process.exit();
    }
    //specify what key w,a,s,d,space,b,g does (key:value is stored in constants.js as an object)
    if (keyMap[key]) {
      let command = keyMap[key];
      connection.write(command);
    }
  
  };

  stdin.on("data", handleUserInput);

  return stdin;

};

//export using ES6 object shorthand
module.exports = {
  setupInput
};