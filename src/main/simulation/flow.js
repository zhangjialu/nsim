import { PythonShell } from 'python-shell'
import path from 'path'

const scan = (currentFile, time, win) => {
  console.log('scan')
  let pyshell = new PythonShell(
    path.resolve(__dirname, '../simulation/flownet/flownet.py')
  )

  pyshell.send(JSON.stringify(currentFile.data))

  pyshell.on('message', message => {
    // console.log(message)
    const result = JSON.parse(message)
    // console.log(result)
    const newModules = [...currentFile.data.modules]
    newModules.forEach(module => {
      if (module.type === 'InnerNode') {
        module.params.forEach((param, index) => {
          if (param.name === 'P') {
            const P = result[module.id].P
            module.params[index].value = P
            module.params[index].history.push(P)
          }
        })
      } else {
        module.params.forEach((param, index) => {
          if (param.name === 'Qm') {
            const Qm = result[module.id].Qm
            module.params[index].value = Qm
            module.params[index].history.push(Qm)
          }
        })
      }
    })

    const simulateResults = {
      ...currentFile,
      data: {
        ...currentFile.data,
        modules: newModules
      }
    }
    win.webContents.send('set-simulate-results', simulateResults)
  })

  pyshell.end((err, code, signal) => {
    if (err) throw err
    console.log('The exit code was: ' + code)
    console.log('The exit signal was: ' + signal)
    console.log('finished')
    console.log('finished')
  })
}

export default scan
