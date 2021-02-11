const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('connect', function() {
    console.log("Successfully connected to game server");
    conn.write("Name: KVP");
  });
  
  conn.on('data', function() {
    console.log("you ded cuz you idled");
  });

  return conn;
}

module.exports = {
  connect
};


// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)