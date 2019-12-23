// const { spawn } = require('child_process')
import { spawn } from 'child_process'

const iapws = args => {
  // const args = { T: 573.15, P: 3 }
  // const args = { T: 573.15, P: 1.6 }
  const child = spawn('python', ['./test.py', JSON.stringify(args)])

  child.stdout.on('data', data => {
    process.stdout.write(data)
  })
}