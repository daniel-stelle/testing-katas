const { join, repeat, compose } = require('ramda')

const repeatCharacter = compose(join(''), repeat)
const conversionTable = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

function toRoman(input) {
  let result = ''

  for (let [arabic, roman] of conversionTable) {
    const count = Math.floor(input / arabic)

    result += repeatCharacter(roman, count)
    input -= arabic * count
  }

  return result
}

module.exports = toRoman
