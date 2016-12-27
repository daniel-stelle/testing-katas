const { map, compose, isEmpty, tail, head, append, assoc } = require('ramda')

function giveChange(
  change,
  denominations = [100, 25, 10, 5, 1]
) {
  if (change === 0 || isEmpty(denominations)) return {}

  const denomination = head(denominations)
  const numCoins = Math.floor(change / denomination)

  if (change >= denomination) {
    return assoc(denomination, numCoins, giveChange(change - denomination, denominations))
  }

  return giveChange(change, tail(denominations))
}

module.exports = giveChange

// mergeAll(map(value => { value: 0 }))
//
// if (change >= denomination) {
//   return append(denomination, giveChange(change - denomination, denominations))
// } else {
//   return giveChange(change, tail(denominations))
// }
