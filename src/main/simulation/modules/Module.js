class Module {
  constructor() {
    this.time = 0
    this.params = {}
    this.inputPorts = {}
    this.outputPorts = {}
  }
  setTime(time) {
    this.time = time
  }
  setParams(params) {
    this.params = {
      ...this.params,
      ...params
    }
  }
  setInputs(inputs) {
    this.inputPorts = {
      ...this.inputPorts,
      ...inputs
    }
  }
}

export default Module
