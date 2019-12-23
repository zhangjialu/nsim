import Module from '../Module'

class Out extends Module {
  constructor() {
    super()
    this.reset()
  }
  process() {
    const { in0 } = this.inputPorts
    this.outputPorts.out0 = parseInt(in0)
    return this.outputPorts
  }
  reset() {
    this.params = {}
    this.inputPorts = { in0: 0 }
    this.outputPorts = { out0: 0 }
  }
}

export default Out
