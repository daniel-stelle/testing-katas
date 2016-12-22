const { reverse } = require('ramda')

function giveChange(change) {
  const denominations = [
    [100, 0],
    [25, 0],
    [10, 0],
    [5, 0],
    [1, 0]
  ]
  let index = 0

  for (let [denomination] of denominations) {
    while (change >= denomination) {
      denominations[index][1] += 1
      change -= denomination
    }

    index++
  }

  return reverse(denominations)
}

module.exports = giveChange
