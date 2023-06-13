//establish a connection with the game server
const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  //The "connect" event is triggered on a connection as soon as it is successfully established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ALS");
   //setInterval(() => conn.write("Move: up"), 1000); - experiment 
   //setInterval(() => conn.write("Move: left"), 1000); -experiment
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and console.log it for the player
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect
};