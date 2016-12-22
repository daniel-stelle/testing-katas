const giveChange = require('./')

describe('Coin change', () => {
  it('returns 1 penny for $0.01 in change', () => {
    expect(giveChange(1)).toEqual([
      [1, 1],
      [5, 0],
      [10, 0],
      [25, 0],
      [100, 0]
    ])
  })

  it('returns 1 nickle for $0.05 in change', () => {
    expect(giveChange(5)).toEqual([
      [1, 0],
      [5, 1],
      [10, 0],
      [25, 0],
      [100, 0]
    ])
  })

  it('returns 1 dime for $0.10 in change', () => {
    expect(giveChange(10)).toEqual([
      [1, 0],
      [5, 0],
      [10, 1],
      [25, 0],
      [100, 0]
    ])
  })

  it('returns 1 quarter for $0.25 in change', () => {
    expect(giveChange(25)).toEqual([
      [1, 0],
      [5, 0],
      [10, 0],
      [25, 1],
      [100, 0]
    ])
  })

  it('returns 1 dollar for $1.00 in change', () => {
    expect(giveChange(100)).toEqual([
      [1, 0],
      [5, 0],
      [10, 0],
      [25, 0],
      [100, 1]
    ])
  })

  it('returns 1 of each coin for $1.41 in change', () => {
    expect(giveChange(141)).toEqual([
      [1, 1],
      [5, 1],
      [10, 1],
      [25, 1],
      [100, 1]
    ])
  })

  it('gives 1q, 1d, and 1n for $0.40 in change', () => {
    expect(giveChange(40)).toEqual([
      [1, 0],
      [5, 1],
      [10, 1],
      [25, 1],
      [100, 0]
    ])
  })

  it('gives 1D, 1d, and 1n for $1.15 in change', () => {
    expect(giveChange(115)).toEqual([
      [1, 0],
      [5, 1],
      [10, 1],
      [25, 0],
      [100, 1]
    ])
  })

  it('gives 2q, 1n, and 1p for $0.56 in change', () => {
    expect(giveChange(56)).toEqual([
      [1, 1],
      [5, 1],
      [10, 0],
      [25, 2],
      [100, 0]
    ])
  })

  it('gives 2D $2.00 in change', () => {
    expect(giveChange(200)).toEqual([
      [1, 0],
      [5, 0],
      [10, 0],
      [25, 0],
      [100, 2]
    ])
  })

  it('gives 4D, 2q, 1n, and 1p for $4.56 in change', () => {
    expect(giveChange(456)).toEqual([
      [1, 1],
      [5, 1],
      [10, 0],
      [25, 2],
      [100, 4]
    ])
  })

  it('gives 4D, 2d, and 3p for $4.56 in change', () => {
    expect(giveChange(423)).toEqual([
      [1, 3],
      [5, 0],
      [10, 2],
      [25, 0],
      [100, 4]
    ])
  })
})
