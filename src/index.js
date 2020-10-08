// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length == 0) {
    return []
  } else {
    let arr = []
    for (let i = 0; i < matrix.length; i++) { 
      if (i % 2 == 0 || i == 0) {
        for (let x = 0; x < matrix[i].length; x++) {
          arr.push(matrix[i][x])
        }
      } else {
        for (let x = matrix[i].length - 1; x >= 0; x--) {
          arr.push(matrix[i][x])
        }
      }
    }
    return arr
  }
}
