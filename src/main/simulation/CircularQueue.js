class CircularQueue {
  constructor(k) {
    this.size = k
    this.head = -1
    this.tail = -1
    this.data = []
  }

  enQueue(value) {
    if (this.isFull()) {
      return false
    }
    if (this.isEmpty()) {
      this.head = 0
    }
    this.tail = (this.tail + 1) % this.size
    this.data[this.tail] = value
    return true
  }

  deQueue() {
    if (!this.isEmpty()) {
      if (this.tail === this.head) {
        this.tail = -1
        this.head = -1
      } else {
        this.head = (this.head + 1) % this.size
      }
      return true
    }
    return false
  }

  front() {
    return this.head === -1 ? -1 : this.data[this.head]
  }

  rear() {
    return this.tail === -1 ? -1 : this.data[this.tail]
  }

  isEmpty() {
    return this.tail === -1 && this.head === -1
  }

  isFull() {
    return (this.tail + 1) % this.size === this.head
  }

  isExist(value) {
    return this.data.includes(value)
  }
}

export default CircularQueue
