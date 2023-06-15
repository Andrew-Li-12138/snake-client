const IP = "localhost";
const PORT = 50541;

//key:value sets are stored in keyMap object for handleUserInput to easily access and avoid repetitive logics by using if statements
const keyMap = { "\u0077":  "Move: up",
 "\u0061": "Move: left",
  "\u0073": "Move: down",
 "\u0064": "Move: right",
"\u0020": "Say: how's today?",
 "\u0067": "Say: good job!",
"\u0062": "Say: bye for now :)" }

//export using ES6 object shorthand
module.exports = {
  IP,
  PORT,
  keyMap,
}

