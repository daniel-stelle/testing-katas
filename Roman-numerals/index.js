const { compose, join, repeat } = require('ramda')
const repeatChars = compose(join(''), repeat)
const lookupTable = [
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
  let currentArabic = input

  for (let [arabic, roman] of lookupTable) {
    if (currentArabic >= arabic) {
      const count = Math.floor(currentArabic / arabic)
      result += repeatChars(roman, count)
      currentArabic -= arabic * count
    }
  }

  return result
}

module.exports = toRoman
