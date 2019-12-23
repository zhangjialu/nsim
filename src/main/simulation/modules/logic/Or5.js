import Module from '../Module'

class Or5 extends Module {
  constructor() {
    super()
    this.reset()
  }
  process() {
    const { in0, in1, in2, in3, in4 } = this.inputPorts
    const output =
      parseInt(in0) ||
      parseInt(in1) ||
      parseInt(in2) ||
      parseInt(in3) ||
      parseInt(in4)
    this.outputPorts.out0 = output ? 1 : 0
    return this.outputPorts
  }
  reset() {
    this.params = {}
    this.inputPorts = { in0: 0, in1: 0, in2: 0, in3: 0, in4: 0 }
    this.outputPorts = { out0: 0 }
  }
}

export default Or5
