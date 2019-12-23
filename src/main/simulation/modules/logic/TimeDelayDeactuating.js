import Module from '../Module'

class TimeDelayDeactuating extends Module {
  // constructor() {
  //   super()
  //   this.reset()
  //   this.trigeredTime = null
  //   this.trigeredValue = null
  // }
  // process() {
  //   const { timeDelayed } = this.params
  //   if (!this.trigeredTime) {
  //     this.trigeredTime = this.time + parseInt(timeDelayed)
  //     this.trigeredValue = this.inputPorts.in0
  //   }
  //   if (this.time === this.trigeredTime) {
  //     this.outputPorts.out0 = this.trigeredValue
  //     this.trigeredTime = null
  //     this.trigeredValue = null
  //   } else {
  //     this.outputPorts.out0 = this.outputPorts.out0
  //   }
  //   return this.outputPorts
  // }
  // reset() {
  //   this.params = { timeDelayed: 0 }
  //   this.inputPorts = { in0: 0 }
  //   this.outputPorts = { out0: 0 }
  // }
}

export default TimeDelayDeactuating
