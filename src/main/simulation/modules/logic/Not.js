import Module from '../Module'

class Not extends Module {
  constructor() {
    super()
    this.reset()
  }
  process() {
    const { in0 } = this.inputPorts
    const output = !parseInt(in0)
    this.outputPorts.out0 = output ? 1 : 0
    return this.outputPorts
  }
  reset() {
    this.params = {}
    this.inputPorts = { in0: 0 }
    this.outputPorts = { out0: 1 }
  }
}

export default Not
