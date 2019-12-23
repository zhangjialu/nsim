class Queue {
  constructor() {
    this.data = []
  }

  enqueue(value) {
    this.data.push(value)
  }

  dequeue() {
    return this.data.shift()
  }

  front() {
    return this.data[0]
  }

  isEmpty() {
    return this.data.length === 0
  }

  clear() {
    this.data = []
  }

  size() {
    return this.data.length
  }

  isExist(value) {
    return this.data.includes(value)
  }

  print() {
    console.log(this.data.toString())
  }
}

export default Queue
