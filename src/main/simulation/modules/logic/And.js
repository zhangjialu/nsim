import Module from '../Module'

class And extends Module {
  constructor() {
    super()
    this.reset()
  }
  process() {
    const { in0, in1 } = this.inputPorts
    const output = parseInt(in0) && parseInt(in1)
    this.outputPorts.out0 = output ? 1 : 0
    return this.outputPorts
  }
  reset() {
    this.params = {}
    this.inputPorts = { in0: 0, in1: 0 }
    this.outputPorts = { out0: 0 }
  }
}

export default And
