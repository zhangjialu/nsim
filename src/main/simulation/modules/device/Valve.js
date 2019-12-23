import Module from '../Module'

class Valve extends Module {
  constructor() {
    super()
    this.pressure = 0
    this.enthalpy = 0
    this.entropy = 0
    this.temperature = 0
    this.flow = 0
    this.reset()
  }

  process() {}

  reset() {}
}
