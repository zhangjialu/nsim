import Module from '../Module'

class Memory extends Module {
  constructor() {
    super()
    this.reset()
  }
  process() {}
  reset() {
    this.params = {}
    this.inputPorts = { in0: 0, in1: 0 }
    this.outputPorts = { out0: 0 }
  }
}

export default Memory
