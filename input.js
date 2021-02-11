// Stores the active TCP connection object.
let connection;
let func;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

 const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', function handleUserInput(key) {
    
    const repeat = function(key) {
      func = setInterval(() => {
        connection.write(key);
      }, 100);
    };

    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      clearInterval(func);
      repeat("Move: up");
    }
    if (key === 'a') {
      clearInterval(func);
        repeat("Move: left");
    }
    if (key === 's') {
      clearInterval(func);
        repeat("Move: down");
    }
    if (key === 'd') {
      clearInterval(func);
        repeat("Move: right");
    }
  });
  return stdin;
};


module.exports = { setupInput };