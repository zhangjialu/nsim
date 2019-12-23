import Module from '../Module'

class ActuationBlock extends Module {
  constructor() {
    super()
    this.reset()
    this.intermediate = false
  }
  process() {
    const { in0, in1 } = this.inputPorts
    this.intermediate = parseInt(in0) && (parseInt(in1) || this.intermediate)
    const output = parseInt(in0) && !intermediate
    this.outputPorts.out0 = output ? 1 : 0
    return this.outputPorts
  }
  reset() {
    this.params = {}
    this.inputPorts = { in0: 0, in1: 0 } // in0: A, in1: B
    this.outputPorts = { out0: 0 }
  }
}

export default ActuationBlock
