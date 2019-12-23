import Module from '../Module'

// x(t) = Asin(ω*t+φ) = Acos(ω*t+φ－π/2)
class SineSignal extends Module {
  constructor() {
    super()
    this.reset()
  }
  process() {
    const { A, omega, phi } = this.params
    this.outputPorts.out0 = A * Math.sin(omega * this.time + phi)
    return this.outputPorts
  }
  reset() {
    this.params = { A: 1, omega: 1, phi: 0 }
    this.inputPorts = {}
    this.outputPorts = { out0: 0 }
  }
}

export default SineSignal
