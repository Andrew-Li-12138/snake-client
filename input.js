//Store the active TCP connection object
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //specify what happens when "data:" is received from stdin
  const handleUserInput = function(key) {
    //handle ctrl + c
    if (key === '\u0003') {
      process.exit();
    }
    // handle w,a,s,d as movement commands
    if (key === '\u0077') {
      connection.write("Move: up");
    }
    
    if (key === "\u0061") {
      connection.write("Move: left");
    }
        
    if (key === "\u0073") {
      connection.write("Move: down");
    }

    if (key === "\u0064") {
      connection.write("Move: right");
    }

    //keys of space, g, b for sending canned messages

    if (key === "\u0020") {
      connection.write("Say: how's today?");
    }
        
    if (key === "\u0067") {
      connection.write("Say: good job!");
    }

    if (key === "\u0062") {
      connection.write("Say: bye for now :)");
    }


  };

  stdin.on("data", handleUserInput);
  
  return stdin;
  
};

//export using ES6 object shorthand
module.exports = {
  setupInput
};