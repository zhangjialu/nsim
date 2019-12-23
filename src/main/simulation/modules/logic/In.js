import Module from '../Module'

class In extends Module {
  constructor() {
    super()
    this.reset()
  }
  process() {
    const { inputValue } = this.params
    this.outputPorts.out0 = parseInt(inputValue)
    return this.outputPorts
  }
  reset() {
    this.params = { inputValue: 0 }
    this.inputPorts = {}
    this.outputPorts = { out0: 0 }
  }
}

export default In
