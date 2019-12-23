import Module from '../Module'

class ConstantSignal extends Module {
  constructor() {
    super()
    this.reset()
  }
  process() {
    this.outputPorts.out0 = parseInt(this.params.constantValue)
    return this.outputPorts
  }
  reset() {
    this.params = { constantValue: 1 }
    this.inputPorts = {}
    this.outputPorts = { out0: 1 }
  }
}

export default ConstantSignal
