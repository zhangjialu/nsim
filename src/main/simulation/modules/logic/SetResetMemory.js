import Module from '../Module'

class SetResetMemory extends Module {
  constructor() {
    super()
    this.reset()
  }
  process() {
    const { in0, in1 } = this.inputPorts
    const { out0 } = this.outputPorts
    const output = !parseInt(in1) && (parseInt(in0) || parseInt(out0))
    this.outputPorts.out0 = output ? 1 : 0
    return this.outputPorts
  }
  reset() {
    this.params = {}
    this.inputPorts = { in0: 0, in1: 0 } // in0: set, in1: reset
    this.outputPorts = { out0: 0 }
  }
}

export default SetResetMemory
