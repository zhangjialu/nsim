import Module from '../Module'

class MemoryWithActuationBlock extends Module {
  constructor() {
    super()
    this.reset()
    this.intermediate = false
  }
  process() {
    const { in0, in1 } = this.inputPorts
    const { out0 } = this.outputPorts
    this.intermediate = parseInt(in0) && (parseInt(in1) || this.intermediate)
    const output =
      !parseInt(in1) &&
      ((parseInt(in0) && !this.intermediate) || parseInt(out0))
    this.outputPorts.out0 = output ? 1 : 0
    return this.outputPorts
  }
  reset() {
    this.params = {}
    this.inputPorts = { in0: 0, in1: 0 } // in0: L, in1: R
    this.outputPorts = { out0: 0 }
  }
}

export default MemoryWithActuationBlock
