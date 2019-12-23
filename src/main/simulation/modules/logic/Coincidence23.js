import Module from '../Module'

class Coincidence23 extends Module {
  constructor() {
    super()
    this.reset()
  }
  process() {
    const { in0, in1, in2 } = this.inputPorts
    const output =
      (parseInt(in0) && parseInt(in1)) ||
      (parseInt(in1) && parseInt(in2)) ||
      (parseInt(in0) && parseInt(in2))
    this.outputPorts.out0 = output ? 1 : 0
    return this.outputPorts
  }
  reset() {
    this.params = {}
    this.inputPorts = { in0: 0, in1: 0, in2: 0 }
    this.outputPorts = { out0: 0 }
  }
}

export default Coincidence23
