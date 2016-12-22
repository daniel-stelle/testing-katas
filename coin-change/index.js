const { reverse, map, compose } = require('ramda')

function giveChange(change, denominations = [100, 25, 10, 5, 1]) {
  const incrementCoinAmts = (denomination) => {
    if (change >= denomination) {
      const numCoins = Math.floor(change / denomination)

      change %= denomination
      return numCoins
    }

    return 0
  }

  const calcChange = compose(
    reverse,
    map(incrementCoinAmts)
  )

  return calcChange(denominations)
}

module.exports = giveChange
