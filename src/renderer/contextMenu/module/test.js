// 逆时针旋转
const rotate = ({ x, y, x0 = 0, y0 = 0, theta }) => {
  const deltaX = x - x0
  const deltaY = y - y0
  const sinTheta = Math.sin((theta / 180) * Math.PI)
  const cosTheta = Math.cos((theta / 180) * Math.PI)
  const x1 = deltaX * cosTheta - deltaY * sinTheta + x0
  const y1 = deltaX * sinTheta + deltaY * cosTheta + y0
  return {
    x: parseFloat(x1.toFixed(2)),
    y: parseFloat(y1.toFixed(2))
  }
}

console.log(rotate({ x: 1, y: 0, x0: 0, y0: 0, theta: -90 }))
