const { PythonShell } = require('python-shell')

// let pyshell = new PythonShell('print.py')
let pyshell = new PythonShell('test.py')

// sends a message to the Python script via stdin
pyshell.send(JSON.stringify({ T: 573.15, P: 1.6 }))

pyshell.on('message', function(message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message)
})

// end the input stream and allow the process to exit
pyshell.end(function(err, code, signal) {
  if (err) throw err
  console.log('The exit code was: ' + code)
  console.log('The exit signal was: ' + signal)
  console.log('finished')
  console.log('finished')
})
