const { compose, join, reduce, repeat } = require('ramda')
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
  const processPair = ([result, remainingInput], [arabic, roman]) => {
    const count = Math.floor(remainingInput / arabic)

    return [
      result + repeatChars(roman, count),
      remainingInput - (arabic * count)
    ]
  }

  return reduce(processPair, ['', input], lookupTable)[0]
}

module.exports = toRoman
