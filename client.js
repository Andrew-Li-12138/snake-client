//establish a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //The "connect" event is triggered on a connection as soon as it is successfully established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AL");
  });

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