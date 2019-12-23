import Module from '../Module'

class Coincidence24 extends Module {
  constructor() {
    super()
    this.reset()
  }
  process() {
    const { in0, in1, in2, in3 } = this.inputPorts
    const output =
      (parseInt(in0) && parseInt(in1)) ||
      (parseInt(in0) && parseInt(in2)) ||
      (parseInt(in0) && parseInt(in3)) ||
      (parseInt(in1) && parseInt(in2)) ||
      (parseInt(in1) && parseInt(in3)) ||
      (parseInt(in2) && parseInt(in3))
    this.outputPorts.out0 = output ? 1 : 0
    return this.outputPorts
  }
  reset() {
    this.params = {}
    this.inputPorts = { in0: 0, in1: 0, in2: 0, in3: 0 }
    this.outputPorts = { out0: 0 }
  }
}

export default Coincidence24
