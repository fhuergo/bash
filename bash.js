process.stdout.write('prompt >');

// the stdin data event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newLine
  if (cmd === 'pwd') {
    //var pwdReturned = __dirname;
    const pwdReturn = require('./pwd');
    pwdReturn();
  } else if (cmd === 'ls') {
    require('./ls');
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
